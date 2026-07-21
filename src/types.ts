export type SectionType = 'home' | 'courses' | 'about' | 'contact';

export interface Course {
  id: string;
  name: string;
  code: string;
  category: 'basic' | 'accounting' | 'programming';
  duration: string;
  eligibility: string;
  shortDescription: string;
  description: string;
  keyTopics: string[];
  icon: string; // Lucide icon name
  popular?: boolean;
  fee?: string;
  careerOpportunities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  review: string;
  rating: number;
  avatar: string;
  courseTaken: string;
  year: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  courseInterested: string;
  message: string;
}

export interface EnrollmentFormData {
  fullName: string;
  email: string;
  phone: string;
  courseId: string;
  preferredBatch: 'morning' | 'afternoon' | 'evening';
  message: string;
}

export interface USPItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
