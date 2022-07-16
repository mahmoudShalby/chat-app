<script>
  import Home from "./Home/Home.svelte"
  import Chat from "./Chat/Chat.svelte"

  export let contentMode, searchMode, isLoginded
</script>

<div class="bg-lime-700 font-bold">
  {#if contentMode === 'Chat'}
    <Chat />
  {:else}
    <Home bind:contentMode bind:searchMode bind:isLoginded />
  {/if}
</div>
