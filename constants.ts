import { Product, BlogPost, Video, Event, TeamMember } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ace Pro Vector Bowls (Set of 4)',
    price: 450.00,
    category: 'Bowls',
    image: 'https://picsum.photos/seed/bowls1/400/400',
    rating: 4.8,
    isNew: true
  },
  {
    id: '2',
    name: 'Classic Club Polisher',
    price: 15.99,
    category: 'Accessories',
    image: 'https://picsum.photos/seed/polish/400/400',
    rating: 4.5,
    isOnSale: true
  },
  {
    id: '3',
    name: 'Pro-Grip Lawn Shoes',
    price: 89.95,
    category: 'Clothing',
    image: 'https://picsum.photos/seed/shoes/400/400',
    rating: 4.7,
    isNew: true
  },
  {
    id: '4',
    name: 'Deluxe Trolley Bag',
    price: 120.00,
    category: 'Equipment',
    image: 'https://picsum.photos/seed/bag/400/400',
    rating: 4.9
  },
  {
    id: '5',
    name: 'Breathable Team Jersey',
    price: 45.00,
    category: 'Clothing',
    image: 'https://picsum.photos/seed/jersey/400/400',
    rating: 4.2,
    isOnSale: true
  },
  {
    id: '6',
    name: 'Measuring Tape & Calipers',
    price: 25.50,
    category: 'Accessories',
    image: 'https://picsum.photos/seed/measure/400/400',
    rating: 4.6
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering the Draw Shot: A Beginner’s Guide',
    excerpt: 'The draw shot is the bread and butter of lawn bowls. Learn the fundamental techniques to consistently land close to the jack.',
    date: 'Oct 12, 2023',
    author: 'James Miller',
    image: 'https://picsum.photos/seed/blog1/800/600',
    category: 'Technique'
  },
  {
    id: '2',
    title: 'Top 5 Strategies for Wet Weather Play',
    excerpt: 'Don’t let the rain dampen your game. Adapt your weight and line to conquer heavy greens.',
    date: 'Oct 28, 2023',
    author: 'Sarah Jenkins',
    image: 'https://picsum.photos/seed/blog2/800/600',
    category: 'Strategy'
  },
  {
    id: '3',
    title: 'Choosing Your First Set of Bowls',
    excerpt: 'Size, weight, bias, and grip. We break down everything you need to know before making an investment.',
    date: 'Nov 05, 2023',
    author: 'Mike Ross',
    image: 'https://picsum.photos/seed/blog3/800/600',
    category: 'Equipment'
  }
];

export const VIDEOS: Video[] = [
  {
    id: '1',
    title: 'World Championship Finals Highlights 2023',
    duration: '12:45',
    thumbnail: 'https://picsum.photos/seed/vid1/640/360',
    views: '12k',
    type: 'Highlight'
  },
  {
    id: '2',
    title: 'Correct Grip Technique Explained',
    duration: '05:30',
    thumbnail: 'https://picsum.photos/seed/vid2/640/360',
    views: '5.4k',
    type: 'Tutorial'
  },
  {
    id: '3',
    title: 'Reading the Head: Tactics for Skips',
    duration: '08:15',
    thumbnail: 'https://picsum.photos/seed/vid3/640/360',
    views: '8.1k',
    type: 'Tutorial'
  },
  {
    id: '4',
    title: 'Club Semi-Finals Full Match',
    duration: '45:20',
    thumbnail: 'https://picsum.photos/seed/vid4/640/360',
    views: '2.2k',
    type: 'Match'
  }
];

export const EVENTS: Event[] = [
  {
    id: '1',
    name: 'Summer Open Championship',
    date: 'Dec 15, 2023',
    location: 'Sunnyvale Greens',
    type: 'Tournament',
    image: 'https://picsum.photos/seed/event1/800/400'
  },
  {
    id: '2',
    name: 'Friday Night Barefoot Bowls',
    date: 'Weekly - Fridays',
    location: 'Club Main Rink',
    type: 'Social',
    image: 'https://picsum.photos/seed/event2/800/400'
  },
  {
    id: '3',
    name: 'Junior Coaching Clinic',
    date: 'Jan 10, 2024',
    location: 'Training Facility',
    type: 'Training',
    image: 'https://picsum.photos/seed/event3/800/400'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Robert "Bob" Oak',
    role: 'Club President',
    bio: 'Playing for over 40 years, Bob brings a wealth of experience and passion to the club leadership.',
    image: 'https://picsum.photos/seed/person1/300/300'
  },
  {
    id: '2',
    name: 'Elena Fisher',
    role: 'Head Coach',
    bio: 'Former national champion dedicated to training the next generation of bowlers.',
    image: 'https://picsum.photos/seed/person2/300/300'
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'Greenkeeper',
    bio: 'The wizard behind our pristine surfaces. David ensures the greens run true every time.',
    image: 'https://picsum.photos/seed/person3/300/300'
  }
];