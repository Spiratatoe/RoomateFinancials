# Security Documentation

## Authentication Configuration

### Auth0 Credentials in Environment Variables

This application uses Auth0 for authentication. Auth0 credentials are stored in environment variables (`.env` file) and loaded via `import.meta.env` in `src/main.jsx`.

**This is the recommended approach for managing configuration.**

### Why Auth0 Credentials Can Be Public

#### For SPAs (like this React app):

1. **Client ID is Public**: The OAuth 2.0 specification designates SPAs as "public clients" where the client ID is meant to be public.

2. **No Client Secret**: SPAs do not use a client secret (which would need to be kept private). Our Auth0 application is configured with Token Endpoint Authentication Method set to "none".

3. **Security Through Configuration**: Security is enforced through Auth0's application settings:
   - **Allowed Callback URLs**: Only `http://localhost:5173/` is authorized
   - **Allowed Logout URLs**: Only `http://localhost:5173/` is authorized
   - **Allowed Web Origins**: Only `http://localhost:5173/` is authorized

   Even if someone has your Client ID, they cannot authenticate users unless the requests come from your configured URLs.

4. **PKCE Protection**: The Auth0 React SDK uses PKCE (Proof Key for Code Exchange), adding an additional security layer that prevents authorization code interception attacks.

### What IS Sensitive

The following should **NEVER** be committed to version control:

- ✗ **Client Secrets** (we don't use these in SPAs)
- ✗ **API Keys** for backend services
- ✗ **Private Keys** or Certificates
- ✗ **Database Credentials**
- ✗ **Access Tokens** or Refresh Tokens
- ✗ **`.env` files** with actual credentials

### Protected by .gitignore

Our `.gitignore` is configured to prevent accidental commits of:

```
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.auth0
*.key
*.pem
*.p12
*.pfx
```

### Using Environment Variables

This application uses environment variables to manage Auth0 configuration:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your Auth0 credentials to `.env`:
   ```
   VITE_AUTH0_DOMAIN=your-tenant.us.auth0.com
   VITE_AUTH0_CLIENT_ID=your-client-id
   ```

3. The `.env` file is automatically ignored by git (see `.gitignore`)

4. For production deployments, set these environment variables in your hosting platform's settings

### Production Deployment Checklist

When deploying to production:

1. ✓ Create a separate Auth0 application for production
2. ✓ Set production environment variables (`VITE_AUTH0_DOMAIN` and `VITE_AUTH0_CLIENT_ID`) in your deployment platform
3. ✓ Configure Auth0 application with production URLs:
   - Allowed Callback URLs: `https://yourdomain.com`
   - Allowed Logout URLs: `https://yourdomain.com`
   - Allowed Web Origins: `https://yourdomain.com`
4. ✓ Enable HTTPS (required for production)
5. ✓ Review Auth0 application logs for suspicious activity
6. ✓ Enable Multi-Factor Authentication (MFA) in Auth0 if needed
7. ✓ Set up Auth0 Rules or Actions for additional security policies

### Security Best Practices

1. **Regular Updates**: Keep Auth0 SDK and all dependencies up to date
2. **Monitor Auth0 Logs**: Review authentication logs for suspicious activity
3. **Review Permissions**: Regularly audit Auth0 application permissions
4. **Use HTTPS**: Always use HTTPS in production
5. **Implement CSP**: Consider implementing Content Security Policy headers
6. **Token Expiration**: Configure appropriate token expiration times in Auth0
7. **Logout Properly**: Always use the Auth0 logout endpoint, not just local session clearing
8. **Environment Separation**: Use different Auth0 applications for dev, staging, and production

### Reporting Security Issues

If you discover a security vulnerability, please email security@yourdomain.com instead of creating a public GitHub issue.

### Additional Resources

- [Auth0 SPA Security Best Practices](https://auth0.com/docs/get-started/applications/spa)
- [OAuth 2.0 for Browser-Based Apps](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps)
- [OWASP SPA Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Single_Page_Application_Security_Cheat_Sheet.html)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
