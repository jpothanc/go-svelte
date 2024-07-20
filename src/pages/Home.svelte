<script>
  import { fade } from "svelte/transition";

  import { onMount } from "svelte";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<div class="container">
  <div class="flex-item">
    <h1>go Svelt</h1>
    {#if visible}
      <p transition:fade={{ duration: 1000 }}>
        Svelte is an open-source modern web framework for creating user
        interfaces on the web. It was ranked as the most admired and most loved
        JavaScript web framework in 2022 on the Stack Overflow Developer Survey.
        It employs a clear, concise, and readable way to write code. Svelte is
        easier to write and learn. Unlike traditional JavaScript frameworks,
        Svelte shifts much of the workload from the browser to the build step,
        resulting in highly optimized and fast applications. This innovative
        technique not only enhances runtime performance but also leads to
        smaller bundle sizes. By leveraging modern JavaScript features and clean
        syntax, Svelte allows developers to write less code and achieve more,
        making it an attractive choice for both new projects and existing
        applications. Svelte was created by Rich Harris in November 2016. Since
        its creation, Svelte has undergone several major versions, each
        introducing significant improvements and new features. Svelte 5 is
        around the corner, boasting further optimizations, reduced bundle sizes,
        and numerous other enhancements.
      </p>
      <br />
      <a href="https://svelte.dev/" target="_blank">Learn more about Svelte</a>
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
  }
  .flex-item {
    flex: 1;
    border: 1px solid #000;
    padding: 50px;
    background-color: #dcd6d6;
    border-radius: 15px;
  }
  a {
    color: rgb(5, 126, 92);
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
