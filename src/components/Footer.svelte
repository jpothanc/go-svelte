<script lang="ts">
  import { onDestroy } from "svelte";
  import config from "../config/config.json";
  import { isAuthenticated } from "../lib/authStore";
  import { FaStreetView, FaLink } from "svelte-icons/fa";

  let loggedIn = false;
  const unsubscribe = isAuthenticated.subscribe((value) => {
    loggedIn = value;
    console.log("subscribed is store isAuthenticated", value);
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="footer">
  <div class="footer-text">
    <p>
      &copy; 2024 {config.app.footer.firstName}&nbsp;
      {config.app.footer.lastName}. All Rights Reserved. | Dream, Code, Inspire
      and Innovate.
    </p>
  </div>
  <div class="footer-url">
    <a href="https://jpothanc.github.io/#/" class="custom-link" target="_blank">
      <FaLink size="12" />
    </a>
  </div>
  <div
    class="footer-status"
    style="background-color:{loggedIn ? 'green' : 'brown'};"
  >
    <div style="height:50%;">
      <FaStreetView size="12" />
    </div>

    {#if loggedIn}
      ✔
    {:else}
      X
    {/if}
  </div>
</div>

<style>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f3efef;
    color: #130202;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 30px;
    font-size: 14px;
    column-gap: 2px;
  }
  .footer-text,
  .footer-status {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-wrap: wrap;
    text-align: center;
  }
  .footer-text {
    flex: 8;
    font-weight: 700;
    font-size: 12px;
  }
  .footer-url {
    flex: 0.2;
    height: 50%;
  }
  .footer-status {
    flex: 3%;
    max-width: 60px;
    border-left: #111212 1px solid;
  }
  .custom-link {
    color: #111212;
    text-decoration: none;
  }
  @media (max-width: 780px) {
    .footer-text {
      font-size: 10px;
    }
  }
</style>
