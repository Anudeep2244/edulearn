import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  password: string; // In a real app, never store plain text passwords
  role: 'student' | 'teacher';
  avatar: string;
}

// Hardcoded users
const USERS: User[] = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    email: 'teacher@edu.com',
    password: 'teacher123',
    role: 'teacher',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    id: '2',
    name: 'Rahul Sharma',
    email: 'student1@edu.com',
    password: 'student123',
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  },
  {
    id: '3',
    name: 'Priya Verma',
    email: 'student2@edu.com',
    password: 'student456',
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  }
];

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => { success: boolean; message: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    const foundUser = USERS.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      return { success: true, message: 'Login successful' };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}