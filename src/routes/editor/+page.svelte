<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { schedule } from '$lib/store';
</script>

<div class="ml-auto mr-auto flex h-screen w-1/2 flex-col items-center p-5">
	<h1 class="text-2xl">Editor</h1>
	{#each $schedule as item, index (index)}
		<div class="mb-5 flex flex-col items-center gap-2.5">
			<Input class="w-1/2" type="text" bind:value={item.name} />
			<div class="mt-2.5 flex flex-row items-center">
				<Input type="number" bind:value={item.hour} />
				<Input type="number" bind:value={item.minute} />
				<Input type="number" bind:value={item.second} />
			</div>
		</div>
	{/each}
</div>
