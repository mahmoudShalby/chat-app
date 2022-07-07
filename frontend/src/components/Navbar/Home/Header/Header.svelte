<script>
  import LogoutButton from "./LogoutButton.svelte"
  import SearchButton from "./SearchButton.svelte"

  export let searchMode, contentMode, isLoginded
</script>

<div class="flex items-center justify-between pl-2 pr-5">
  <h1 class="text-lg">Chat app</h1>
  <div class="h-full flex justify-between items-center gap-3">
    <SearchButton bind:searchMode bind:contentMode />
    <LogoutButton bind:isLoginded />
  </div>
</div>
