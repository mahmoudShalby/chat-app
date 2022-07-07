<script>
  import Fa from 'svelte-fa'
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

  export let searchMode, contentMode

  const clickHanlder = () => {
    searchMode = true
    contentMode = 'Chats'
  }
</script>

<div on:click={clickHanlder} id="searchButton">
  <Fa
    icon={faMagnifyingGlass}
    class="text-xl"
  />
</div>
