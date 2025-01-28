<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	interface Props {
		animation?: string;
		animation_out?: string;
		once?: boolean;
		top?: number;
		bottom?: number;
		css_observer?: string;
		css_animation?: string;
		children?: import('svelte').Snippet;
	}

	let {
		animation = 'none',
		animation_out = 'none; opacity: 0',
		once = false,
		top = 0,
		bottom = 0,
		css_observer = '',
		css_animation = '',
		children
		// onUpdate
	}: Props = $props();

	// cute litle reactive dispatch to get if is observing :3
	// const dispatch = createEventDispatcher();

	// be aware... he's looking...
	let observing = $state(true);

	// $effect(() => {
	// 	dispatch('update', { observing: observing });
	// });
	// for some reason the 'bind:this={box}' on div stops working after npm run build... so... workaround time >:|
	const countainer = `__saos-${Math.random()}__`;

	/// current in experimental support, no support for IE (only Edge)
	/// see more in: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
	function intersection_verify(box: Element | null) {
		// bottom left top right
		if (!box) return;
		const rootMargin = `${-bottom}px 0px ${-top}px 0px`;

		const observer = new IntersectionObserver(
			(entries) => {
				observing = entries[0].isIntersecting;
				if (observing && once) {
					observer.unobserve(box);
				}
			},
			{
				rootMargin
			}
		);

		observer.observe(box);
		return () => observer.unobserve(box);
	}

	/// Fallback in case the browser not have the IntersectionObserver
	function bounding_verify(box: HTMLElement | null) {
		if (!box) return;
		const c = box.getBoundingClientRect();
		observing = c.top + top < window.innerHeight && c.bottom - bottom > 0;

		if (observing && once) {
			// @ts-ignore
			window.removeEventListener('scroll', verify);
		}

		// @ts-ignore
		window.addEventListener('scroll', bounding_verify);
		// @ts-ignore
		return () => window.removeEventListener('scroll', bounding_verify);
	}

	onMount(() => {
		// for some reason the 'bind:this={box}' on div stops working after npm run build... so... workaround time >:|
		const box = document.getElementById(countainer);

		if (IntersectionObserver) {
			return intersection_verify(box);
		} else {
			return bounding_verify(box);
		}
	});
</script>

<div id={countainer} style={css_observer}>
	{#if observing}
		<div style="animation: {animation}; {css_animation}">
			{@render children?.()}
		</div>
	{:else}
		<div style="animation: {animation_out}; {css_animation}">
			{@render children?.()}
		</div>
	{/if}
</div>
