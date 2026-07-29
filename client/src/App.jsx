/**
 * Application root.
 *
 * Wraps the router in AuthProvider so every page has access to the auth
 * context. react-hot-toast is mounted once here so toasts are available
 * globally without additional setup in individual components.
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/routing/ProtectedRoute';

import RegisterPage    from './pages/auth/RegisterPage';
import LoginPage       from './pages/auth/LoginPage';
import VerifyEmailPage from './pages/auth/VerifyEmailPage';
import DashboardPage   from './pages/dashboard/DashboardPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/register"     element={<RegisterPage />} />
          <Route path="/login"        element={<LoginPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />

          {/* Protected — any authenticated role */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          {/* Role-specific dashboard aliases — Phase 2–5 will replace these
              with real components; for now they all render the same stub. */}
          <Route
            path="/dashboard/:role"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div
                style={{
                  minHeight: '100dvh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                }}
              >
                <span style={{ fontSize: '4rem' }}>🔍</span>
                <h2>Page not found</h2>
                <a href="/" className="btn btn-ghost">Go home</a>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* Toast notifications — position top-right, dark theme */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'var(--surface-float)',
            color: 'var(--text-primary)',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.9rem',
          },
        }}
      />
    </AuthProvider>
  );
}
