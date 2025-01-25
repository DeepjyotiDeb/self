<script lang="ts">
	import Footer from '$lib/Components/Footer/Footer.svelte';
	import Header from '$lib/Components/Header/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<div class="flex-grow">
		{@render children()}
	</div>
	<Footer />
</div>
