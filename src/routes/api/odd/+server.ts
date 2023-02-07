import { json, type RequestHandler } from '@sveltejs/kit';
import { OPENAI_API_KEY } from '$env/static/private';
import { ChatGPTAPI } from 'chatgpt';

export const POST = (async ({ request }) => {
  const { prompt } = await request.json();

  const api = new ChatGPTAPI({
    apiKey: OPENAI_API_KEY,
  })

  const result = await api.sendMessage(`Yes or no, is the number ${prompt} an odd number?`);
  return json({ result: result.text });
}) satisfies RequestHandler;
