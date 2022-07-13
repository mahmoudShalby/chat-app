<script>
  export let content, senderUsername, userUsername
</script>

<div class={`flex ${senderUsername === userUsername ? 'flex-row-reverse':''}`}>
  <div class={`break-all rounded-xl ${senderUsername === userUsername ? 'flex-row-reverse':''}`}>
    {content}
  </div>
</div>
