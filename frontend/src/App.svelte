<script>
  import Content from './components/Content/Content.svelte'
  import Navbar from './components/Navbar/Navbar.svelte'
  import socketio from 'socket.io-client'
  import Auth from './components/Auth/Auth.svelte'
  import { onMount, setContext } from 'svelte'
  import { fade } from 'svelte/transition'
  import { writable } from 'svelte/store'

  // Vars
  let isLoading = true
  let lateLoading = false
  let isLoginded = false
  let navbarMode = 'Home'
  let contentMode = 'Chats'
  let searchMode = false
  let socketId
  let username = ''
  let chats = []
  let userChats = []
  let searchValue = writable('')

  setContext('searchValue', searchValue)

  $: if (!searchMode) chats = userChats

  // Setup socket.io connection
  const SERVER_URL = 'http://localhost:5000'
  const socket = socketio(SERVER_URL)
  setContext('socket', socket)

  $: socket.emit('search chats', $searchValue)

  onMount(() => {
    socket.emit('auth token', localStorage.getItem('token'))
    setTimeout(() => {
      lateLoading = true
    }, 5000)
  })

  socket.on('data', (sentUsername, sentChats, sentSocketId) => {
    if (sentUsername) {
      username = sentUsername
      userChats = chats = sentChats
      socketId = sentSocketId
      isLoginded = true
      console.log('\x1b[36musername:', username)
      console.log('\x1b[36mchats:', chats)
      console.log('\x1b[36msocketId:', socketId)
    }
    isLoading = false
  })

  socket.on('set auth token', token => {
    localStorage.setItem('token', token)
    console.log('wating for data...')
    socket.emit('auth token', token)
  })

  socket.on('search result', result => chats = result)
</script>

<div class="text-white h-screen bg-slate-900">
  {#if isLoading}
    <span class="h-screen grid place-items-center text-xl">
      {#if lateLoading}
        Some thing went wrong
      {:else}
        Loading...
      {/if}
    </span>
  {:else}
    {#if isLoginded}
      <div class="h-screen grid grid-rows-[80px_1fr] gap-2" in:fade out:fade={{ duration: 100 }}>
        <Navbar bind:navbarMode bind:contentMode bind:searchMode bind:isLoginded />
        <Content bind:contentMode bind:chats bind:searchMode bind:username />
      </div>
    {:else}
      <Auth />
    {/if}
  {/if}
</div>
