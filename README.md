
# Is it odd?

A brand new way to determine whether a number is odd or not.

Powered by OpenAI

*Cutting edge*

## Usage

After cloning, be sure to install packages with `npm install`

A `.env` variable named `OPENAI_API_KEY` is to be set with your OpenAI key in order to use the app

Run for development

```ts
npm run dev
```

Create production version

```ts
npm run build
```

Preview production version with `npm run preview`

For some reason, the usage of an adblocker in the `development` enviroment messes with Vercel audiences so just disable your adblock while in development so that the app will actually run, I'm looking into this.

## Showcase

Available at [https://is-it-odd.vercel.app/](https://is-it-odd.vercel.app/)

![Image from the page](/img/screenshot.png)

There is also a `chatgpt` branch which uses the [ChatGPT client](https://github.com/transitive-bullshit/chatgpt-api) which I just added because I found it and it does produce different results.
