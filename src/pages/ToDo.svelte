<script lang="ts">
  import ToDoList from "../components/ToDoList.svelte";
</script>

<div class="todo-container">
  <div class="flex-item-heading">todo list</div>
  <div class="flex-item-content">
    <ToDoList />
  </div>
</div>

<style>
  .todo-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5vh;
    border-radius: 10px;
  }
  .flex-item-heading {
    display: flex;
    color: #f6f1f1;
    font-size: 14px;
    align-items: center;
    padding-left: 10px;
    background-color: #138db5;
  }
 
</style>
