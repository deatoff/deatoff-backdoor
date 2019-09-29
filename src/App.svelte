<script>
import Signin from "./components/Signin";
import { onMount } from 'svelte';

let ref;

onMount(() => { ref.focus() });   

export let name;

</script>

<div>
	<h1>Hello {name}!</h1>
	<Signin label="First Name" placeholder="someone@example.com" name="signin" bind:ref />
</div>


<style>
div {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
  h1 {
    color: #ff7373;
  }
</style>

