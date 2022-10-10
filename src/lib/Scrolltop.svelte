 <script lang="ts">
    let y: typeof scrollY;
    
 </script>

<svelte:window bind:scrollY={y}/>
 
 <!--========== Scrolltop (for small screens) ==========-->
 <a href={"#"} class={y >= 200 ? 'scrolltop show-scroll' : 'scrolltop'} id="scroll-top">
     <i class='bx bxs-up-arrow scrolltop__icon' ></i> Go up
 </a>

 