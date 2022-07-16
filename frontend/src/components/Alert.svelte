<script>
  import Fa from 'svelte-fa'
  import { faXmark } from '@fortawesome/free-solid-svg-icons'
  import { fade } from 'svelte/transition'

  export let text, bg, invisible

  const closeButtonClickHandler = () => invisible = false
</script>

{#if invisible}
  <div class="w-full h-[80px] fixed grid place-items-center">
    <div
      class={`relative min-w-[210px] pl-3 pr-8 py-1 rounded-lg bg-${bg}`}
      transition:fade
    >
      {text}
      <div on:click={closeButtonClickHandler} class="absolute top-2 right-3 text-lg">
        <Fa icon={faXmark} />
      </div>
    </div>
  </div>
{/if}
