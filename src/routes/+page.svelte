<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import MyImage from './OH_MY_GOD.jpg?enhanced';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center">
	<h1 class="text-6xl font-bold">Schedule</h1>
	<h2 class="mb-5 flex flex-row items-center gap-1">
		It's back omg no way <span
			><enhanced:img class="h-10 w-10" alt="OH MY GOD" src={MyImage} />
		</span>
	</h2>

	<div class="flex w-full flex-row items-center justify-center gap-5">
		<Button onclick={() => goto('/schedule')}>Open Schedule</Button>
		<Button onclick={() => goto('/editor')}>Editor</Button>
	</div>
</div>
