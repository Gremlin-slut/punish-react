export interface Task 
{
  id: number;
  description: string;
  hasImplement: boolean;
  hasAbrasive: boolean;
  hasLocation: boolean;
  hasCount: boolean;
  isPost: boolean;  
}

export interface Implement 
{
  id: number;
  description: string;
}

export interface Abrasive 
{
  id: number;
  description: string;
}

export interface Location 
{
  id: number;
  description: string;
}

export interface Count 
{
  id: number;
  description: string;
}

export interface TimeIncrement 
{
  id: number;
  description: string;
}
