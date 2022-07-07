<script>
  import Fa from 'svelte-fa'
  import { faXmark } from '@fortawesome/free-solid-svg-icons'

  export let searchMode

  const clickHandler = () => searchMode = false
</script>

<div
  on:click={clickHandler}
  class="text-xl absolute right-4"
>
  <Fa icon={faXmark} />
</div>
