import { json, type RequestHandler } from '@sveltejs/kit';
import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';
export const POST = (async ({ request }) => {
  const { prompt } = await request.json();
  let result = '';

  const config = new Configuration({
		apiKey: OPENAI_API_KEY,
	});

	const openai = new OpenAIApi(config);

  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: `Is ${prompt} an odd number?`
  });

  result = completion.data.choices[0].text as string;

  return json({ result });
}) satisfies RequestHandler;
