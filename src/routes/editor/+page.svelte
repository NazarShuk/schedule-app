<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { defaultSchedule } from '$lib/schedules';
	import { saveSchedule, schedule } from '$lib/store';

	let currentSchedule = $state(Array.from($schedule));
	$effect(() => {
		schedule.set(currentSchedule);
		saveSchedule();
	});
</script>

<div class="ml-auto mr-auto flex h-screen w-1/2 flex-col items-center p-5">
	<h1 class="text-2xl">Editor</h1>

	<Button class="mb-2.5" variant="destructive" onclick={() => (currentSchedule = defaultSchedule)}
		>Reset to default</Button
	>
	{#each currentSchedule as item, index (index)}
		<div class="mb-5 flex flex-col items-center gap-2.5">
			<div class="mt-2.5 flex w-full flex-row items-center gap-2.5">
				<Input
					class="w-full"
					type="text"
					bind:value={item.name}
					onchange={(e) => {
						// @ts-ignore
						currentSchedule[index].name = e.target?.value;
					}}
				/>
				<Button
					class="w-fit"
					variant="destructive"
					onclick={() => {
						currentSchedule.splice(index, 1);
					}}>Delete</Button
				>
			</div>
			<div class="mt-2.5 flex flex-row items-center">
				<Input
					type="number"
					onchange={(e) => {
						// @ts-ignore
						currentSchedule[index].hour = e.target?.value;
					}}
					bind:value={item.hour}
				/>
				<Input
					type="number"
					onchange={(e) => {
						// @ts-ignore
						currentSchedule[index].minute = e.target?.value;
					}}
					bind:value={item.minute}
				/>
				<Input
					type="number"
					onchange={(e) => {
						// @ts-ignore
						currentSchedule[index].second = e.target?.value;
					}}
					bind:value={item.second}
				/>
			</div>
		</div>
	{/each}

	<Button
		class="mt-2.5"
		onclick={() => {
			currentSchedule = [
				...currentSchedule,
				{
					name: 'new item',
					hour: 0,
					minute: 0,
					second: 0
				}
			];
		}}>Add item</Button
	>
</div>

<style>
	:global(body) {
		overflow: auto;
	}
</style>
