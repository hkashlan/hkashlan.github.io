import { Github, Linkedin, Mail, Twitter, FileText, Coffee } from 'lucide-react';

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  description: string;
  color: string;
}

export const linkedInInfo: SocialLink =   {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/hadi-kashlan/',
    description: 'Connect professionally',
    color: 'bg-blue-600'
};

export const githubInfo: SocialLink = {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/hkashlan',
    description: 'View my code',
    color: 'bg-slate-800'
};

export const emailInfo: SocialLink = {
    name: 'Email',
    icon: Mail,
    url: 'mailto:hkashlan@gmail.com',
    description: 'Send a message',
    color: 'bg-red-600'
};

export const resumeInfo: SocialLink = {
    name: 'Resume',
    icon: FileText,
    url: 'https://drive.google.com/file/d/1ZJKb1UP9f6UPWmPK9oDcniuTsvpD3plp/view?usp=sharing',
    description: 'Download CV',
    color: 'bg-green-600'
};

export const scheduleCallInfo: SocialLink = {
    name: 'Schedule Call',
    icon: Coffee,
    url: 'https://calendly.com/hkashlan/15min',
    description: 'Let\'s chat',
    color: 'bg-orange-600'
};

export const socialLinks: SocialLink[] = [
  linkedInInfo,
  githubInfo,
  emailInfo,
  resumeInfo,
  scheduleCallInfo
];

