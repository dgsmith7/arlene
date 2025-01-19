export function getConfig() {
  const audience = import.meta.env.VITE_AUDIENCE;

  return {
    domain: import.meta.env.VITE_DOMAIN,
    clientId: import.meta.env.VITE_CLIENT_ID,
    ...(audience ? { audience } : null),
  };
}
