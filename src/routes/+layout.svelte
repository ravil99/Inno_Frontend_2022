<script lang="ts">
	import './styles.css';
	import Header from './Header.svelte';
	import Scrolltop from '$lib/Scrolltop.svelte';
	import Home from '$lib/Home.svelte';
	import Social from '$lib/Social.svelte';
</script>

<div class="app">
	<Header />
	<main class="bd-container">
		<div class="resume">
			<!--========== RESUME LEFT ==========-->
			<div class="resume__left">
				<Home />
				<Social />
			</div>
			<!--========== RESUME RIGHT ==========-->
			<div class="resume__right">
				<slot />
			</div>
		</div>
	</main>
	<Scrolltop />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.resume__left,
	.resume__right {
		padding: 0 1.5rem;
	}
</style>
