<script lang="ts">
    import './styles.css';
	  import Header from './Header.svelte';
    import NavMenu from '$lib/Nav_menu.svelte';
    import Scrolltop from '$lib/Scrolltop.svelte';
    import Home from '$lib/Home.svelte';
    import Social from '$lib/Social.svelte';
</script>

<div class="app">
    <Header />
    <NavMenu />
    <main class="1-main bd-container">
      <div class="resume" id="area-cv">
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
</style>