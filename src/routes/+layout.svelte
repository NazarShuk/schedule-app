<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

<ModeWatcher />

<svelte:head>
	<title>Schedule</title>
</svelte:head>

<div class="h-full w-full bg-gradient-to-b from-primary/20 to-background">
	{@render children()}
</div>
