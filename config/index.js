const config = () => ({
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export const Config = config();
