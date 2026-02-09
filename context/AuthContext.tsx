import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Check local storage on mount (simulated persistence)
  useEffect(() => {
     const storedUser = localStorage.getItem('lbfa_user');
     if (storedUser) {
         try {
             setUser(JSON.parse(storedUser));
         } catch (e) {
             console.error("Failed to parse stored user", e);
             localStorage.removeItem('lbfa_user');
         }
     }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For demo purposes, we accept any login, but if it's "admin@example.com" we give admin role
    const mockUser: User = {
        id: '1',
        name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
        email: email,
        role: email.includes('admin') ? 'Administrator' : 'Club Member',
        joinDate: '2023-05-15',
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=104573&color=fff`
    };
    setUser(mockUser);
    localStorage.setItem('lbfa_user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const signup = async (name: string, email: string, password: string) => {
     setIsLoading(true);
     await new Promise(resolve => setTimeout(resolve, 800));
     const mockUser: User = {
         id: Math.random().toString(36).substr(2, 9),
         name: name,
         email: email,
         role: 'Club Member',
         joinDate: new Date().toISOString().split('T')[0],
         avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=F2921D&color=fff`
     };
     setUser(mockUser);
     localStorage.setItem('lbfa_user', JSON.stringify(mockUser));
     setIsLoading(false);
  };

  const logout = () => {
      setUser(null);
      localStorage.removeItem('lbfa_user');
  };

  const updateUser = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('lbfa_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};