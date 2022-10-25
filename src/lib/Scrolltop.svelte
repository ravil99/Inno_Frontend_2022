<script lang="ts">
	let y: typeof scrollY;
</script>

<svelte:window bind:scrollY={y} />

<!--========== Scrolltop (for small screens) ==========-->
<a href={'#'} class={y >= 200 ? 'scrolltop show-scroll' : 'scrolltop'}>
	<i class="bx bxs-up-arrow scrolltop__icon" /> Go up
</a>

<style>
	.scrolltop {
		position: fixed;
		right: 1rem;
		bottom: -20%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.3rem;
		background-color: var(--contrainer-color-alt);
		border-radius: 0.4rem;
		z-index: var(--z-tooltip);
		transition: 0.4s;
		visibility: hidden;
	}

	.scrolltop__icon {
		font-size: 1.2rem;
		color: var(--text-color);
	}

	.show-scroll {
		visibility: visible;
		bottom: 5rem;
	}
</style>
