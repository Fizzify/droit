<script lang="ts">
  import { tasks } from "../task.store";
  import Task from "./Task.svelte";
</script>

<ul>
  {#each $tasks as task (task.id)}
    <Task {task} />
  {/each}
</ul>
