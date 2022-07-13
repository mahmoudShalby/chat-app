<script>
  import { getContext } from 'svelte'

  export let userUsername, username, firstUser, secondUser, searchMode, contentMode

  const socket = getContext('socket')

  let anotherUser

  $: if (!searchMode)
    anotherUser = firstUser.username === userUsername ? secondUser:firstUser

  const clickHandler = () => {
    if (searchMode) {
      socket.emit('create chat', username)
      searchMode = false
    }
    else {
      contentMode = 'Chat'
    }
  }
</script>

<div class="h-[50px] rounded-xl hover:bg-slate-800 flex items-center px-2" on:click={clickHandler}>
  {#if searchMode}
    {username}
  {:else}
    {anotherUser.username}
  {/if}
</div>
