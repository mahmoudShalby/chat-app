<script>
  import Fa from 'svelte-fa'
  import { faXmark } from '@fortawesome/free-solid-svg-icons'
  import { fade } from 'svelte/transition'

  export let text, bg

  let invisible = true

  const closeButtonClickHandler = () => invisible = false
</script>

{#if invisible}
  <div class="w-full h-[80px] fixed grid place-items-center">
    <div
      class={`fixed min-w-[210px] px-3 py-1 mx-auto rounded-lg bg-${bg}`}
      transition:fade
    >
      <div class="w-[90%]">
        {text}
      </div>
      <div on:click={closeButtonClickHandler} class="absolute top-2 right-3 text-lg">
        <Fa icon={faXmark} />
      </div>
    </div>
  </div>
{/if}
