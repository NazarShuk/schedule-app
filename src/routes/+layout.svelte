<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

<ModeWatcher />

<svelte:head>
	<title>Schedule</title>
</svelte:head>

{@render children()}
