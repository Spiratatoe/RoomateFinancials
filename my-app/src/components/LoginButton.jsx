import { useAuth0 } from '@auth0/auth0-react';

export function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="nav-tab"
      style={{
        backgroundColor: '#2563EB',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        border: 'none'
      }}
    >
      Log In
    </button>
  );
}
