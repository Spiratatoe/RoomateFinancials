import { useAuth0 } from '@auth0/auth0-react';

export function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="nav-tab"
      style={{
        backgroundColor: '#DC2626',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        border: 'none'
      }}
    >
      Log Out
    </button>
  );
}
