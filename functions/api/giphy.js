import { env } from 'cloudflare:workers';

export async function onRequest() {
  const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${env.API_KEY}&limit=12&offset=0&rating=g&bundle=messaging_non_clips`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to fetch' }), {
      status: 500,
    });
  }
}
