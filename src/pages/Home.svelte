<script>
  import { fade } from "svelte/transition";

  import { onMount } from "svelte";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<div class="container">
  {#if visible}
    <div class="flex-item-content">
      <h1>go Svelt</h1>
      <p transition:fade={{ duration: 1000 }}>
        Svelte is an open-source modern web framework for creating user
        interfaces on the web.
        <br />
        It was ranked as the most admire4d and most loved JavaScript web framework
        in 2022 on the Stack Overflow Developer Survey. It employs a clear, concise,
        and readable way to write code. Svelte is easier to write and learn. Unlike
        traditional JavaScript frameworks, Svelte shifts much of the workload from
        the browser to the build step, resulting in highly optimized and fast applications.
        This innovative technique not only enhances runtime performance but also
        leads to smaller bundle sizes. By leveraging modern JavaScript features and
        clean syntax, Svelte allows developers to write less code and achieve more,
        making it an attractive choice for both new projects and existing applications.
        Svelte was created by Rich Harris in November 2016. Since its creation, Svelte
        has undergone several major versions, each introducing significant improvements
        and new features. Svelte 5 is around the corner, boasting further optimizations,
        reduced bundle sizes, and numerous other enhancements.
      </p>
      <h3>
        <a href="https://svelte.dev/" target="_blank">Learn more about Svelte</a
        >
        <br />
        <a
          href="https://medium.com/@kaljessy/svelt-felt-better-ff7ce0f81977"
          target="_blank">Svelt, felt better?</a
        >
      </h3>
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 5vh auto;
    border-radius: 15px;
    color: #130202;
    height: 80vh;
    max-width: 800px;
    min-width: 400px;
  }
  h1,
  h3 {
    text-align: center;
  }
  .flex-item-content {
    margin-top: 10px;
    align-self: center;
    background-color: #f3efef;
    font-size: 16px;
    border-radius: 15px;
    padding: 5px;
    border: #f3efef 1px solid;
  }
  a {
    color: rgb(9, 135, 225);
    text-decoration: none;
  }
</style>
