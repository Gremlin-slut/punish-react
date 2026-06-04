import { LogLevel, LogPayload } from './types';

const LOG_API_URL = '/api/logs';

class RemoteLogger {
  private async sendToServer(level: LogLevel, message: string, context?: Record<string, unknown>) {
    const payload: LogPayload = {
      level,
      message,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      context,
    };

    // Always log to browser console for local debugging
    console[level](`[Remote Log] ${message}`, context || '');

    try {
      // Use standard fetch to send data to your server
      await fetch(LOG_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      // Fail silently or handle fallback storage (e.g., LocalStorage)
      console.error('Failed to dispatch log to server:', err);
    }
  }

  public info(message: string, context?: Record<string, unknown>) {
    this.sendToServer('info', message, context);
  }

  public warn(message: string, context?: Record<string, unknown>) {
    this.sendToServer('warn', message, context);
  }

  public error(message: string, context?: Record<string, unknown>) {
    this.sendToServer('error', message, context);
  }
}

export const logger = new RemoteLogger();
