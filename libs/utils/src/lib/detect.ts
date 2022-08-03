export const isServer = () => {
  return typeof window === 'undefined';
};

export const isClient = () => !isServer();
