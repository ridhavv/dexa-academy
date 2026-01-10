
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  image: string;
}

export interface Course {
  id: string;
  title: string;
  ageGroup: string;
  description: string;
  icon: string;
  features: string[];
}

export interface LeadFormData {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  country: string;
  interest: string;
  message: string;
}

export enum Subject {
  VEDIC_MATHS = 'Vedic Maths',
  COMMUNICATION = 'Communication Skills',
  REGULAR_MATHS = 'Regular School Maths',
  APTITUDE = 'Aptitude & Logic'
}
