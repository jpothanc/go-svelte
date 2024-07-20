<script lang="ts">
  import { onMount } from "svelte";
  import type { Todo } from "../lib/types";
  import TodoItem from "./TodoItem.svelte";
  import config from "../config/config.json";

  let todos: Todo[] = [];
  let selectedId: number = -1;

  onMount(async () => {
    // await fetch("https://dummyjson.com/todos")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     todos = data.todos;
    //     console.log(todos);
    //   });
    todos = config.todos;
  });

  function itemClicked(todo: Todo) {
    console.log(todo);
    selectedId = todo.id;
  }
</script>

<div>
  {#each todos as todo (todo.id)}
    <TodoItem {todo} {itemClicked} selected={selectedId === todo.id} />
  {/each}
</div>

<style>
  div {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    justify-content: center;
  }
</style>
