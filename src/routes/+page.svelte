<script>
	import { goto } from "$app/navigation";
	import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="flex flex-col items-center justify-center w-full h-screen">
    <h1 class="text-6xl font-bold">Schedule</h1>
    <h2 class="mb-5"> It's back omg no way 😎</h2>

    <div class="flex flex-row items-center justify-center w-full gap-5">
        <Button onclick={()=> goto("/schedule")}>Open Schedule</Button>
        <Button onclick={()=> goto("/editor")}>Open Editor</Button>
    </div>

</div>