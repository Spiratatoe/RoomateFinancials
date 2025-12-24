import { useAuth0 } from '@auth0/auth0-react';

export function SignupButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } })}
      className="nav-tab"
      style={{
        backgroundColor: '#059669',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        border: 'none'
      }}
    >
      Sign Up
    </button>
  );
}
