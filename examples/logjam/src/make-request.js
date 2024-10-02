export const makeRequest = async (url) => {
  if (!import.meta.env.API_KEY) {
    throw new Error('API_KEY is required');
  }
  return { data: 'Some data would go here.' };
};
