
import React from 'react';
import { Testimonial, Course, Subject } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Parent of 8yr old",
    location: "London, UK",
    content: "Dexa Academy transformed how Arjun views numbers. He used to be terrified of long calculations, but now he does them mentally using Vedic tricks. Truly a game changer for NRIs!",
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
    role: "Parent of 10yr old",
    location: "New Jersey, USA",
    content: "Living abroad, we wanted our son to stay connected to his roots while gaining skills. The Vedic Maths classes are structured perfectly for international time zones.",
    rating: 5,
    image: "https://picsum.photos/id/65/100/100"
  }
];

export const COURSES: Course[] = [
  {
    id: 'vm-jr',
    title: 'Vedic Maths Junior',
    ageGroup: '6-9 Years',
    description: 'Master the basics of rapid mental calculation using ancient Indian techniques.',
    icon: '🧮',
    features: ['Base Method Multiplications', 'Digit Sum Checks', 'Magic Addition']
  },
  {
    id: 'vm-sr',
    title: 'Vedic Maths Senior',
    ageGroup: '10-15 Years',
    description: 'Advanced algebra, square roots, and complex arithmetic at lightning speed.',
    icon: '⚡',
    features: ['Algebraic Equations', 'Cubes & Square Roots', 'Mental Calculus Foundations']
  },
  {
    id: 'comm-ex',
    title: 'Communication Excellence',
    ageGroup: '8-15 Years',
    description: 'Build confidence, public speaking skills, and effective storytelling.',
    icon: '🗣️',
    features: ['Body Language Mastery', 'Vocabulary Building', 'Public Speaking Projects']
  },
  {
    id: 'math-logic',
    title: 'Logical Aptitude',
    ageGroup: '10-15 Years',
    description: 'Prepare for Olympiads and competitive exams with logical reasoning.',
    icon: '🧩',
    features: ['Pattern Recognition', 'Problem Solving', 'Critical Thinking']
  }
];
