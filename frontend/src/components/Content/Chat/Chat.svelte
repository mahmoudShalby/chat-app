<script>
  import MessagesBox from "./components/MessagesBox/MessagesBox.svelte"
  import Form from "./components/Form/Form.svelte"

  export let chat
</script>

<div class="h-full grid grid-rows-[1fr_40px]">
  <MessagesBox bind:messages={chat.messages} />
  <Form />
</div>
