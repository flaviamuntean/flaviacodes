import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Lisbon, Portugal',
    description:
      'As a self-taught developer I enrolled in the LeWagon bootcamp and immediately found a job as a full-stack developer after graduation.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Junior Software Developer',
    location: 'Liphook, UK',
    description:
      'I worked as a junior developer for Rocksteady Music School. I built a web app for teachers to manage their students and lessons. I also built a mobile app for students to practice at home.',
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2021',
  },
  {
    title: 'Mid-Level Software Developer',
    location: 'Liphook, UK',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to freelance opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Contentfulize',
    description:
      'A web app that allows you to export your Contentful data to a JSON file compatible with computer-assisted translation tools. It also allows the import and tagging of content.',
    tags: ['React', 'Next.js', 'MySQL', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'Schools Portal',
    description:
      'Portal for school employees to manage their Rocksteady Music School lessons and enrol school-funded children.',
    tags: ['React', 'Material UI', 'Ruby on Rails'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Band Leader App',
    description:
      'Offline-first React Native app for music teachers. It has features like offline storage, syncing, music player and more. I was the lead developer.',
    tags: ['React Native', 'Expo', 'Redux', 'Redux Saga'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Ruby on Rails',
  'Git',
  'Expo',
  'React Native',
  'Redux',
  'Prisma',
  'MySQL',
  'PostgreSQL',
  'Tailwind',
  'Framer Motion',
] as const;
