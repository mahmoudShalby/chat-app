<script>
  import SearchBar from "./SearchBar/SearchBar.svelte"
  import Header from "./Header/Header.svelte"
  import Tabs from "./Tabs/Tabs.svelte"

  export let searchMode, contentMode, isLoginded

</script>

<div class="h-full grid">
  {#if searchMode}
    <SearchBar bind:searchMode bind:contentMode />
  {:else}
    <div class="grid grid-rows-[1fr_40%]">
      <Header bind:searchMode bind:contentMode bind:isLoginded />
      <Tabs bind:contentMode />
    </div>
  {/if}
</div>
