<script>
  import { isAuthenticated } from "../lib/authStore";
  import { FaHome, FaBuromobelexperte } from "svelte-icons/fa";
  import { Link } from "svelte-routing";

  function login() {
    isAuthenticated.update((value) => !value);
    console.log("logged in");
  }
</script>

<div class="navbar">
  <nav>
    <Link to="/"><FaHome /></Link>
    <br />
    <Link to="/about"><FaBuromobelexperte /></Link>
  </nav>

  <button on:click={login}>
    {#if $isAuthenticated}
      Logout
    {:else}
      Login
    {/if}
  </button>
  <div class="end"></div>
</div>

<style>
  .navbar {
    display: flex;
    align-items: center;
    color: #161313;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(15, 15, 15);
  }

  nav {
    flex: 9;
    display: flex;
    padding-left: 10px;
    gap: 10px;
    height: 20px;
  }

  a {
    color: #130202;
    font-weight: 700;
    text-decoration: none;
  }
  button {
    flex: 0.2;
    background-color: #f0f0f0;
    color: #130202;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    &:hover {
      filter: brightness(1.2);
    }
  }
  .end {
    flex: 0.2;
  }
</style>
