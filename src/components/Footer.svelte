<script lang="ts">
  import config from "../config/config.json";
</script>

<div>
  <p>
    &copy; 2024 {config.app.footer.firstName}&nbsp;
    {config.app.footer.lastName}. All Rights Reserved. | Dream, Code, Inspire
    and Innovate.
  </p>
</div>

<style>
  div {
    background-color: #f4f4f4;
    color: #130202;
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
    font-size: 14px;
    color: black;
    font-weight: 600;
  }
</style>
