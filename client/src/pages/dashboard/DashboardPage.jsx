/**
 * Placeholder dashboard — rendered after login while role-specific dashboards
 * are built in Phase 2–5. Reads the authenticated user from context and shows
 * a welcome card with basic profile info and a logout button.
 */

import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ROLE_COLORS = {
  donor:    'var(--red-400)',
  seeker:   'var(--blue-400)',
  hospital: 'var(--color-warning)',
  admin:    'var(--color-success)',
};

const ROLE_ICONS = {
  donor: '🩸', seeker: '🏥', hospital: '🏨', admin: '🛡️',
};

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate('/login', { replace: true });
  }

  if (!user) return null;

  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-6)',
        background: 'var(--surface-base)',
      }}
    >
      <div className="card animate-fade-up" style={{ maxWidth: 480, width: '100%' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-6)',
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 'var(--radius-md)',
              background: 'var(--surface-float)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.75rem',
              flexShrink: 0,
            }}
          >
            {ROLE_ICONS[user.role]}
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: 2 }}>
              Welcome, {user.name}
            </h2>
            <span
              className="badge"
              style={{
                background: `${ROLE_COLORS[user.role]}22`,
                color: ROLE_COLORS[user.role],
              }}
            >
              {user.role}
            </span>
          </div>
        </div>

        {/* Info */}
        <div
          style={{
            background: 'var(--surface-float)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-5)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-6)',
          }}
        >
          <InfoRow label="Email" value={user.email} />
          <InfoRow label="Role"  value={user.role}  />
          <InfoRow label="User ID" value={user.id}  />
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: 'var(--space-6)' }}>
          Phase 1 complete. Your role-specific dashboard will be available after Phase 2–5.
        </p>

        <button id="dashboard-logout" className="btn btn-danger btn-full" onClick={handleLogout}>
          <LogOut size={16} />
          Sign out
        </button>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{label}</span>
      <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{value}</span>
    </div>
  );
}
