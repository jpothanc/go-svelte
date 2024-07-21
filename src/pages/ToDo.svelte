<script>
  // your script goes here

  import ToDoList from "../components/ToDoList.svelte";
</script>

<div class="container">
  <div class="flex-item-heading">
    <h1>todo list</h1>
  </div>
  <div class="flex-item-content">
    <ToDoList />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    height: 80vh;
    width: 100%;
  }
  .flex-item-heading {
    flex: 0.6;
    text-align: center;
    color: #f6f1f1;
    margin-top: 20px;
    background-color: #138db5;
    width: 100%;
    height: 10px;
    font-size: 10px;
    text-align: start;
    padding-left: 10px;
  }
  .flex-item-content {
    flex: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
