import { Member, Project, Transaction, TeamLeader } from '../types';

export const teamLeader: TeamLeader = {
  id: '1',
  name: 'Sarah Johnson',
  avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
  email: 'sarah.johnson@company.com',
  role: 'Project Director'
};

export const members: Member[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    description: 'Senior Developer with focus on frontend architecture',
    isActive: true,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    email: 'alex.morgan@company.com',
    role: 'Senior Developer'
  },
  {
    id: '2',
    name: 'Jamie Chen',
    description: 'UX designer specializing in user research and prototyping',
    isActive: true,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    email: 'jamie.chen@company.com',
    role: 'UX Designer'
  },
  {
    id: '3',
    name: 'Taylor Smith',
    description: 'Backend developer with expertise in database optimization',
    isActive: false,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    email: 'taylor.smith@company.com',
    role: 'Backend Developer'
  },
  {
    id: '4',
    name: 'Jordan Lee',
    description: 'Full-stack developer focused on scalable architectures',
    isActive: true,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    email: 'jordan.lee@company.com',
    role: 'Full-stack Developer'
  },
  {
    id: '5',
    name: 'Casey Rivera',
    description: 'DevOps engineer specializing in CI/CD pipelines',
    isActive: false,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    email: 'casey.rivera@company.com',
    role: 'DevOps Engineer'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Complete overhaul of company website with new brand identity',
    progress: 75,
    dueDate: '2025-06-15',
    members: ['1', '2', '4']
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Creating cross-platform mobile application for clients',
    progress: 45,
    dueDate: '2025-08-30',
    members: ['1', '3', '5']
  },
  {
    id: '3',
    name: 'API Integration',
    description: 'Connecting our platform with third-party services',
    progress: 90,
    dueDate: '2025-05-10',
    members: ['3', '4']
  }
];

export const transactions: Transaction[] = [
  {
    id: '1',
    amount: 2.5,
    date: '2025-04-05',
    description: 'Payment for code review',
    type: 'incoming'
  },
  {
    id: '2',
    amount: 1.8,
    date: '2025-04-03',
    description: 'Subscription renewal',
    type: 'outgoing'
  },
  {
    id: '3',
    amount: 5.2,
    date: '2025-04-01',
    description: 'Project milestone completion',
    type: 'incoming'
  },
  {
    id: '4',
    amount: 0.75,
    date: '2025-03-28',
    description: 'Software license',
    type: 'outgoing'
  }
];