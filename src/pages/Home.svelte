<script>
  import { fade } from "svelte/transition";

  import { onMount } from "svelte";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<div class="container">
  <div class="flex-item-heading">
    <h1>go Svelt</h1>
    {#if visible}
      <div class="flex-item-content">
        <p transition:fade={{ duration: 1000 }}>
          Svelte is an open-source modern web framework for creating user
          interfaces on the web.
          <br />
          It was ranked as the most admired and most loved JavaScript web framework
          in 2022 on the Stack Overflow Developer Survey. It employs a clear, concise,
          and readable way to write code. Svelte is easier to write and learn. Unlike
          traditional JavaScript frameworks, Svelte shifts much of the workload from
          the browser to the build step, resulting in highly optimized and fast applications.
          This innovative technique not only enhances runtime performance but also
          leads to smaller bundle sizes. By leveraging modern JavaScript features
          and clean syntax, Svelte allows developers to write less code and achieve
          more, making it an attractive choice for both new projects and existing
          applications. Svelte was created by Rich Harris in November 2016. Since
          its creation, Svelte has undergone several major versions, each introducing
          significant improvements and new features. Svelte 5 is around the corner,
          boasting further optimizations, reduced bundle sizes, and numerous other
          enhancements.
        </p>
      </div>
        <a href="https://svelte.dev/" target="_blank">Learn more about Svelte</a
        >
        <br />
        <a
          href="https://medium.com/@kaljessy/svelt-felt-better-ff7ce0f81977"
          target="_blank">Svelt, felt better?</a
        >
    {/if}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 80px;
    border-radius: 15px;
    background-color: #d74e4ee4;
    height: 80vh;
  }
  .flex-item-heading {
    flex: 1;
    border: 1px solid #000;
    padding: 50px;
    background-color: #f3efef;
    border-radius: 15px;
    height: 80%;
  }
  .flex-item-content {
    flex: 1;
    background-color: #f3efef;
    text-align: left;
  }
  .flex-item-links {
    flex: 1;
    padding: 50px;
    background-color: #252424;
    border-radius: 15px;
  }
  a {
    color: rgb(9, 135, 225);
    text-decoration: none;
  }

  h1 {
    color: #130202;
    font-size: 42px;
    font-weight: 700;
  }

  p {
    color: #130202;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
  }
</style>
