export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  isNew?: boolean;
  isOnSale?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface Video {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  views: string;
  type: 'Tutorial' | 'Highlight' | 'Match';
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  type: 'Tournament' | 'Social' | 'Training';
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  joinDate: string;
  avatar: string;
}

export type NavItem = {
  label: string;
  path: string;
};