<script>
  export let text, bg
</script>

<div on:click class={`px-2 py-1 cursor-pointer bg-${bg}`}>
  {text}
</div>
