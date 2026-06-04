export interface Task {
  description: string;
  hasImplement?: boolean;
  hasAccessory?: boolean;
  hasLocation?: boolean;
  hasCount?: boolean;
  isPost?: boolean;
  weight: number;
}

export interface Implement {
  description: string;
}

export interface Accessory {
  description: string;
}

export interface Location {
  description: string;
}

export interface Count {
  description: string;
}

export interface TimeIncrement {
  description: string;
}

export type LogLevel = 'info' | 'warn' | 'error';

export interface LogPayload {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
  url: string;
}