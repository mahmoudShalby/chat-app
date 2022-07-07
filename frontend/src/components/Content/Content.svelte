<script>
  import Chats from "./Chats/Chats.svelte"
  import Profile from "./Profile/Profile.svelte"
  import Chat from "./Chat/Chat.svelte"

  export let contentMode, chats, searchMode, username
</script>

<div>
  {#if contentMode === 'Chats'}
    <Chats bind:chats bind:searchMode bind:userUsername={username} />
  {:else if contentMode === 'Chat'}
    <Chat />
  {:else if contentMode === 'Profile'}
    <Profile />
  {/if}
</div>
