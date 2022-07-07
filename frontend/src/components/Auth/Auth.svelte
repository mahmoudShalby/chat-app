<script>
  import Input from "./components/Input.svelte"
  import Button from "./components/Button.svelte"
  import Alert from "../Alert.svelte"
  import { fade } from 'svelte/transition'
  import { getContext } from 'svelte'

  const socket = getContext('socket')
  let username = '', password = ''
  let signupAlertInvisible = false
  let signinAlertInvisible = false

  socket.on('wrong sign up', () => {
    signinAlertInvisible = false
    signupAlertInvisible = true
  })

  socket.on('wrong sign in', () => {
    signupAlertInvisible = false
    signinAlertInvisible = true
  })

  const submitHandler = type =>
    socket.emit(type, username, password)
</script>

{#if signupAlertInvisible}
  <Alert text="Exists username" bg="red-600" />
{:else if signinAlertInvisible}
  <Alert text="username or password isn't right" bg="red-600" />
{/if}

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
