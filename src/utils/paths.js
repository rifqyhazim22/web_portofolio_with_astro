const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path = '/') => {
  if (!path.startsWith('/')) {
    return `${base}/${path}`;
  }
  return `${base}${path}`;
};
