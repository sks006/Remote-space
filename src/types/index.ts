export interface Member {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  avatar: string;
  email: string;
  role: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  dueDate: string;
  members: string[];
}

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
  type: 'incoming' | 'outgoing';
}

export interface TeamLeader {
  id: string;
  name: string;
  avatar: string;
  email: string;
  role: string;
}