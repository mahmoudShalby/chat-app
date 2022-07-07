<script>
  import CloseButton from './CloseButton.svelte'
  import { getContext, onDestroy } from 'svelte'

  export let searchMode, contentMode

  const searchValue = getContext('searchValue')
  let value = ''

  $: searchValue.set(value)

  const submitHandler = () => {
    if (value)
      contentMode = 'Chats'
  }

  onDestroy(() => searchValue.set(''))
</script>

<form
  class="flex px-4 items-center gap-3 relative"
  on:submit={submitHandler}
>
  <input
    type="text"
    bind:value
    placeholder="Search friends"
    class="w-full h-[70%] bg-transparent placeholder:text-slate-300 outline-none "
  >

  <CloseButton bind:searchMode />
</form>
