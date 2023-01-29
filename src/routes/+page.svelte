<script lang="ts">
	let input: String = '';
	let result: String = '';
	let error: String = '';
	let loading: boolean = false;

	// An effort to match the case of applying the 'green' class to the result div
	const positive = ['yes', 'is an']

	type PromptResponse = {
		result: string;
	};

	const check = async () => {
		loading = true;

		try {
			const response = await fetch('/api/odd', {
				method: 'POST',
				body: JSON.stringify({ prompt: input }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			let responseResult = (await response.json()) as PromptResponse;
			result = responseResult.result;
		} catch (err) {
			error = err as String;
		} finally {
			loading = false;
		}
	};
</script>

<svelte:head>
	<title>Is it odd?</title>
</svelte:head>

<div class="container">
	<h1 class="title">Is it odd?</h1>
	<input type="number" bind:value={input} placeholder="Number" class="number-input" />
	<button on:click={check} class="check-button">Check</button>

	{#if loading}
		<div class="loading">
			<p>Evaluating...</p>
		</div>
	{:else if result}
		<div class={positive.some(el => result.toLowerCase().includes(el)) ? 'result-green' : 'result-red'}>
			<p>{result}</p>
		</div>
	{:else if error}
		<div class="error">
			<p>{error}</p>
		</div>
	{/if}

	<p>Results are provided by OpenAI's <span class="code-block">code-davinci-002</span></p>
</div>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}

	* {
		font-family: 'Roboto', sans-serif;
		overflow: hidden;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.title {
		font-size: 2em;
		font-weight: 600;
		margin: 0.5em;
		font-family: 'Roboto Mono', monospace;
	}

	.result-green {
		background-color: #e0ffe0;
		border: 1px solid #00ff00;
		border-radius: 5px;
		padding: 0.5em;
		margin: 0.5em;
		width: 25%;
		text-align: center;
	}

	.result-red {
		background-color: #ffe0e0;
		border: 1px solid #ff0000;
		border-radius: 5px;
		padding: 0.5em;
		margin: 0.5em;
		width: 25%;
		text-align: center;
	}

	.error {
		background-color: #ffe0e0;
		border: 1px solid #ff0000;
		border-radius: 5px;
		padding: 0.5em;
		margin: 0.5em;
		width: 25%;
		text-align: center;
	}

	.code-block {
		font-size: 1em;
		font-family: 'Roboto Mono', monospace;
	}

	.number-input {
		padding: 0.5em;
		margin: 0.5em;
		font-size: 1em;
		border-radius: 5px;
		border: none;
		text-align: center;
	}

	.check-button {
		padding: 0.5em 1em;
		margin: 0.5em;
		background-color: white;
		border-radius: 5px;
		border: 1px solid black;
		font-size: 1em;
		cursor: pointer;
	}

	.check-button:hover {
		background-color: #f0f0f0;
	}

	::selection {
		background: pink;
	}
</style>
