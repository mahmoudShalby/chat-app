<script>
  import Input from "./components/Input.svelte"
  import Button from "./components/Button.svelte"
  import Alert from "../Alert.svelte"
  import { fade } from 'svelte/transition'
  import { getContext } from 'svelte'

  const socket = getContext('socket')
  let username = '', password = ''
  let alert = {
    invisible: false,
    args: {
      text: '',
      bg: ''
    }
  }
  let wrongSignupAlert = {
    text: 'Exists username',
    bg: 'red-600'
  }
  let wrongSigninAlert = {
    text: "Username or password isn't right",
    bg: 'red-600'
  }
  let emptyFieldAlert = {
    text: 'Please fill the fields to continue',
    bg: 'red-600'
  }

  socket.on('wrong sign up', () => alert = { invisible: true, args: wrongSignupAlert })
  socket.on('wrong sign in', () => alert = { invisible: true, args: wrongSigninAlert })

  const submitHandler = type => {
    if (username && password)
      socket.emit(type, username, password)
    else
      alert = { invisible: true, args: emptyFieldAlert }
  }
</script>

<Alert bind:invisible={alert.invisible} {...alert.args} />

<div class="h-screen grid place-items-center" in:fade out:fade={{ duration: 100 }}>
  <form class="w-full md:w-[350px] max-h-fit bg-slate-800 grid place-items-center py-3">
    <Input bind:value={username} additionalAttrs={{ type: 'text', placeholder: 'username' }} />
    <Input bind:value={password} additionalAttrs={{ type: 'password', placeholder: 'password' }} />
    <div class="flex gap-3 mt-1">
      <Button on:click={() => submitHandler('sign up')} text="Create account" bg='lime-600' />
      <Button on:click={() => submitHandler('sign in')} text="Sign in" bg='blue-600' />
    </div>
  </form>
</div>
