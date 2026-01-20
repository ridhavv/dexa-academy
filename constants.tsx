
import React from 'react';
import { Testimonial, Course, Subject } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Parent of 10yr old",
    location: "London, UK",
    content: "Dexa Academy's Basic Money Skills course has been incredible! Arjun now understands budgeting and saving. He's even started his own savings plan. Truly empowering for young minds!",
    rating: 5,
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Parent of 12yr old",
    location: "Singapore",
    content: "The communication course is excellent. My daughter was shy and struggled with public speaking. After 3 months at Dexa, she won her school's debate competition.",
    rating: 5,
    image: "https://picsum.photos/id/91/100/100"
  },
  {
    id: 3,
    name: "Anjali Gupta",
    role: "Parent of 13yr old",
    location: "New Jersey, USA",
    content: "The AI and Python course is fantastic! My son has built his first chatbot and is so excited about coding. The classes are perfectly structured for international time zones.",
    rating: 5,
    image: "https://picsum.photos/id/65/100/100"
  }
];

export const COURSES: Course[] = [
  {
    id: 'money-skills',
    title: 'Basic Money Skills',
    ageGroup: '8-15 Years',
    description: 'Learn essential financial literacy including budgeting, saving, investing basics, and understanding money management.',
    icon: '💰',
    features: ['Budgeting & Saving', 'Understanding Investments', 'Financial Planning Basics']
  },
  {
    id: 'ai-python',
    title: 'AI and Python Course',
    ageGroup: '10-15 Years',
    description: 'Master Python programming and AI fundamentals. Build real-world projects and understand machine learning concepts.',
    icon: '🤖',
    features: ['Python Programming', 'AI Fundamentals', 'Machine Learning Basics', 'Project Building']
  },
  {
    id: 'communication',
    title: 'Communication Excellence',
    ageGroup: '8-15 Years',
    description: 'Build confidence, public speaking skills, and effective storytelling. Master verbal and non-verbal communication.',
    icon: '🗣️',
    features: ['Body Language Mastery', 'Vocabulary Building', 'Public Speaking Projects', 'Effective Storytelling']
  },
  {
    id: 'logical-aptitude',
    title: 'Logical Aptitude',
    ageGroup: '10-15 Years',
    description: 'Prepare for Olympiads and competitive exams with logical reasoning. Develop critical thinking and problem-solving skills.',
    icon: '🧩',
    features: ['Pattern Recognition', 'Problem Solving', 'Critical Thinking', 'Competitive Exam Prep']
  }
];
