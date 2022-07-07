<script>
// @ts-nocheck

  import Home from "./Home/Home.svelte"
  import Chat from "./Chat/Chat.svelte"

  export let navbarMode, contentMode, searchMode, isLoginded

  let component = ''
  switch (navbarMode) {
    case 'Home':
      component = Home
      break
    case 'Chat':
      component = Chat
      break
  }
</script>

<div class="bg-lime-700 font-bold">
  <svelte:component this={component} bind:contentMode bind:searchMode bind:isLoginded />
</div>
