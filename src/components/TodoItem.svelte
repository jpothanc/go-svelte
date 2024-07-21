<script lang="ts">
  import type { Todo } from "../lib/types";

  export let todo = { id: 1, todo: "Buy milk", completed: false, userId: "" };
  export let itemClicked: (item: Todo) => void;
  export let selected = false;
  import { scale } from "svelte/transition";

  let borderColor = todo.completed ? "green" : "red";
  function handleClick() {
    itemClicked(todo);
  }
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      handleClick();
    }
  }
  $: borderColor = selected ? "yellow" : todo.completed ? "green" : "red";
</script>

<div
  transition:scale
  role="button"
  tabindex="0"
  aria-label="Clickable div"
  on:click={handleClick}
  on:keydown={handleKeydown}
  style="border: {borderColor} 1px solid "
>
  <h3>{todo.todo}</h3>
  
  <p>{todo.completed ? "Done" : "Pending"}</p>
  <p>{todo.userId}</p>
</div>

<style>
  div {
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 150px;
    width: 200px;
    font-size: 11px;
    background-color: rgb(18, 3, 3);
  }
</style>
