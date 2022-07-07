<script>
  import Fa from 'svelte-fa'
  import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

  export let isLoginded

  const clickHanlder = () => {
    localStorage.removeItem('token')
    isLoginded = false
  }
</script>

<div on:click={clickHanlder}>
  <Fa
    icon={faArrowRightFromBracket}
    class="text-xl"
  />
</div>
