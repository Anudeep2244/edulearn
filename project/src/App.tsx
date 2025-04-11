import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Classes from './pages/Classes';
import Resources from './pages/Resources';
import Community from './pages/Community';
import Profile from './pages/Profile';
import LoginForm from './components/auth/LoginForm';
import ManageClasses from './pages/ManageClasses';
import ManageResources from './pages/ManageResources';
import Privacy from './pages/Privacy';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Blog from './pages/Blog';
import Support from './pages/Support';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import { AuthProvider, useAuth } from './context/AuthContext';

// Protected Route component
const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode; allowedRoles?: string[] }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/classes"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Classes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resources"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Resources />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-classes"
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <ManageClasses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-resources"
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <ManageResources />
                </ProtectedRoute>
              }
            />
            <Route
              path="/community"
              element={
                <ProtectedRoute>
                  <Community />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/support" element={<Support />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;