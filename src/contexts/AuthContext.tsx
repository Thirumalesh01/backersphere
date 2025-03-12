
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '@/types/user';
import { toast } from 'sonner';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Simulate checking local storage for user data
        const storedUser = localStorage.getItem('backersphere_user');
        
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      } catch (error) {
        console.error('Authentication error:', error);
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      // For demo purposes, we'll accept any email/password combination
      // In a real app, this would validate credentials with a backend
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a fake user based on the email
      const mockUser: User = {
        id: `user_${Math.random().toString(36).substring(2, 9)}`,
        name: email.split('@')[0],
        email,
        role: email.includes('admin') ? 'admin' : 'backer',
        createdAt: new Date().toISOString(),
        avatar: `https://api.dicebear.com/7.x/micah/svg?seed=${email}`,
      };
      
      // Store in localStorage for persistence
      localStorage.setItem('backersphere_user', JSON.stringify(mockUser));
      
      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });
      
      toast.success('Logged in successfully');
    } catch (error) {
      console.error('Login error:', error);
      setAuthState(prev => ({ ...prev, isLoading: false }));
      toast.error('Failed to log in. Please try again.');
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      // Simulate API call
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a new user
      const newUser: User = {
        id: `user_${Math.random().toString(36).substring(2, 9)}`,
        name,
        email,
        role: 'backer', // Default role for new users
        createdAt: new Date().toISOString(),
        avatar: `https://api.dicebear.com/7.x/micah/svg?seed=${email}`,
      };
      
      // Store in localStorage for persistence
      localStorage.setItem('backersphere_user', JSON.stringify(newUser));
      
      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
      });
      
      toast.success('Account created successfully');
    } catch (error) {
      console.error('Signup error:', error);
      setAuthState(prev => ({ ...prev, isLoading: false }));
      toast.error('Failed to create account. Please try again.');
      throw error;
    }
  };

  const logout = () => {
    // Remove from localStorage
    localStorage.removeItem('backersphere_user');
    
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
    
    toast.success('Logged out successfully');
  };

  const updateProfile = async (userData: Partial<User>) => {
    try {
      if (!authState.user) {
        throw new Error('No authenticated user');
      }
      
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update user data
      const updatedUser = { ...authState.user, ...userData };
      
      // Store in localStorage
      localStorage.setItem('backersphere_user', JSON.stringify(updatedUser));
      
      setAuthState({
        user: updatedUser,
        isAuthenticated: true,
        isLoading: false,
      });
      
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Update profile error:', error);
      setAuthState(prev => ({ ...prev, isLoading: false }));
      toast.error('Failed to update profile. Please try again.');
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        signup,
        logout,
        updateProfile,
      }}
    >
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
