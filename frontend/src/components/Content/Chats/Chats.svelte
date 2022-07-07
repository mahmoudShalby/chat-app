<script>
  import ChatsItem from "./ChatsItem.svelte"

  export let chats, searchMode, userUsername
</script>

<div class="flex flex-col gap-2 px-2">
  {#if chats.length}
    {#each chats as chat}
      <ChatsItem bind:userUsername username={chat.username} firstUser={chat.firstUser} secondUser={chat.secondUser} messages={chat.messages} bind:searchMode />
    {/each}
  {:else}
    <div class="h-screen grid place-items-center text-xl">
      No chats
    </div>
  {/if}
</div>
