<script>
  export let contentMode

  let activeSpanPosition = 'left-[8px]'
  let activeTab = 'Chats'

  const chatsClickHandler = () => {
    contentMode = 'Chats'
    activeTab = 'Chats'
    activeSpanPosition = 'left-[8px]'
  }
  
  const profileClickHandler = () => {
    contentMode = 'Profile'
    activeTab = 'Profile'
    activeSpanPosition = 'right-[8px]'
  }
</script>

<div class="grid grid-cols-[1fr_1fr] relative px-2 gap-2">
  <button class={`outline-none ${activeTab === 'Chats' ? '':'text-stone-400'}`} on:click={chatsClickHandler}>Chats</button>
  <button class={`outline-none ${activeTab === 'Profile' ? '':'text-stone-400'}`} on:click={profileClickHandler}>Profile</button>
  <span class={`absolute w-[calc(50%-12px)] h-[3px] bg-lime-500 bottom-0 ${activeSpanPosition}`}></span>
</div>
