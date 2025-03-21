<script lang="ts">
	import { schedule } from '$lib/store';
	import Confetti from 'svelte-confetti';

	let timeText = $state('');

	let currentSchedule = $state(Array.from($schedule));
	let currentItem = $state(0);

	let interval = setInterval(step, 1000);
	step();
	function step() {
		if (currentSchedule.length === 0) {
			timeText = 'Schedule ended';
			clearInterval(interval);
			return;
		}

		let now = new Date();

		while (currentSchedule.length > 0) {
			let item = currentSchedule[0];
			let itemDate = new Date();
			itemDate.setHours(item.hour, item.minute, item.second);

			if (now > itemDate) {
				currentSchedule = currentSchedule.filter((_, index) => index !== 0);
				timeText = '';
				currentItem += 1;
			} else {
				break;
			}
		}

		if (currentSchedule.length > 0) {
			let nextItem = currentSchedule[0];
			let nextItemDate = new Date();
			nextItemDate.setHours(nextItem.hour, nextItem.minute, nextItem.second);

			const diff = nextItemDate.getTime() - now.getTime();
			const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((diff % (1000 * 60)) / 1000);

			timeText = `${hours > 0 ? (hours < 10 ? '0' + hours : hours) + ':' : ''}${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
		}
	}
</script>

<div class="absolute left-0 top-0 flex h-screen w-full flex-col p-5 opacity-50">
	{#each currentSchedule as item}
		{#if item.type !== 'hidden'}
			<div class="mb-2.5 flex flex-col items-start justify-center">
				<p class="font-bold">{item.name}</p>
				<p class="text-sm">
					{item.hour < 10 ? '0' + item.hour : item.hour}:{item.minute < 10
						? '0' + item.minute
						: item.minute}:{item.second < 10 ? '0' + item.second : item.second}
				</p>
			</div>
		{/if}
	{/each}
</div>

<div
	class="absolute left-0 top-0 flex h-screen w-full flex-col items-end justify-end p-5 opacity-50"
>
	<a href="/">go bac</a>
</div>

<div class="flex h-screen w-full flex-col items-center justify-center">
	<h1 class="text-8xl font-bold">{timeText}</h1>
	{#if currentItem > 1 && timeText !== ''}
		<h2 class="animate-pulse text-4xl">
			{$schedule[currentItem - 1].type === 'hidden' ? $schedule[currentItem - 1].name : ''}
		</h2>
	{/if}
</div>

{#if currentSchedule.length === 0}
	<div class="absolute left-0 top-0 flex w-full flex-col items-center justify-start">
		<Confetti fallDistance="100vh" duration={5000} amount={200} y={[0, 0.1]} x={[-5, 5]} infinite />
	</div>
{/if}

<style>
	:global(body) {
		overflow: hidden;
	}
</style>
