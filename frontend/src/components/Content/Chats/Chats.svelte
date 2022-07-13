<script>
  import ChatsItem from "./ChatsItem.svelte"

  export let chats, searchMode, userUsername, contentMode
</script>

<div class="h-full flex flex-col gap-2 px-2">
  {#each $chats as chat}
    <ChatsItem bind:userUsername username={chat.username} firstUser={chat.firstUser} secondUser={chat.secondUser} bind:searchMode bind:contentMode />
  {:else}
    <div class="h-full grid place-items-center text-xl">
      No chats
    </div>
  {/each}
</div>
