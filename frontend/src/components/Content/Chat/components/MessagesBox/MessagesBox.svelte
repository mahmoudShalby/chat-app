<script>
  import Message from "./Message/Message.svelte"

  export let messages
  console.log(messages)
</script>

{#each messages as message}
  <div class="">
    <Message {...message} />
  </div>
{:else}
  <div class="grid place-items-center text-xl">
    No messages
  </div>
{/each}
