<script>
  export let name;
  export let label = '';
  export let placeholder = '';
  export let value = '';
  export let ref = null;

  const handleSubmit = async (e) => {
    const response = await fetch("https://deatoff-functions-k9ywui7js.now.sh/api/signin", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value 
      })
    });
    const data = await response.json();
    console.log(data)
  }
</script>

<form on:submit|preventDefault="{handleSubmit}">
  <label for="email">Email</label>
  <input required {placeholder} type="email" id="email" {name} bind:value={value} bind:this={ref} >

  <label for="password">Password</label>
  <input required type="password" id="password" />
  
  <button type="submit">Signin</button>
</form>

<style>
  form {
    border-radius: 0.3em;
    border: 1px solid #d85f7d;
    padding: 2em 1.5em;
    width: 400px;
    display: flex;
    flex-direction: column;
  }

  form label {
    color: #ff7373;
    margin-bottom: 0.5em;
  }

  form input {
    border-radius: 0.1em;
    padding: 0.5em;
    margin-bottom: 1em;
    font-size: 16px;
    outline: none;
    border: 1px solid #d85f7d;
    color: #ff7373;
  }

  form button {
    border-radius: 0.1em;
    padding: 0.5em;
    font-size: 16px;
    color: #fff;
    background: #ff7373;
    outline: none;
    border: 1px solid #d85f7d;
  }
</style>