<script>
  import { isAuthenticated } from "../lib/authStore";
  import { FaRegStickyNote, FaBuromobelexperte } from "svelte-icons/fa";
  import { Link } from "svelte-routing";

  function login() {
    isAuthenticated.update((value) => !value);
    console.log("logged in");
  }
</script>

<div class="navbar">
  <nav>
    <Link to="/"><FaRegStickyNote size="18" /></Link>
    <Link to="/about"><FaBuromobelexperte size="18" /></Link>
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
    background-color: rgb(15, 15, 15);
    color: #161313;
    align-items: center;
    height: 5%;
    min-height: 30px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  nav {
    flex: 9;
    display: flex;
    padding-left: 10px;
    gap: 10px;
    height: 50%;
  }

  button {
    flex: 0.2;
    background-color: #f0f0f0;
    color: #130202;
    padding: 5px 8px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    &:hover {
      filter: brightness(0.8);
    }
  }
  .end {
    flex: 0.1;
  }
</style>
