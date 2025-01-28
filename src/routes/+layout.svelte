<script lang="ts">
	import Footer from '$lib/Components/Footer/Footer.svelte';
	import Header from '$lib/Components/Header/Header.svelte';
	import Home from '$lib/Components/Home.svelte';
	import ProfileCard from '$lib/Components/ProfileCard.svelte';
	import RelativeLink from '$lib/Components/RelativeLink.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<div class="flex-grow">
		<div
			class="mx-auto flex w-full flex-col justify-between lg:container lg:flex-row lg:p-10 lg:px-20"
		>
			<!-- Profile Card -->
			<ProfileCard />
			<div class="mx-auto space-y-9 lg:mx-0 lg:w-[55%] lg:pl-6 lg:pt-6">
				{@render children()}
			</div>
		</div>
	</div>
	<Footer />
</div>
