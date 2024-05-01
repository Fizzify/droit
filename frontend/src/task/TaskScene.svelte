<script lang="ts">
  import DefaultLayout from "../layouts/DefaultLayout.svelte";
  import CreateTask from "./components/CreateTask.svelte";
  import List from "./components/List.svelte";
</script>

<DefaultLayout>
  <CreateTask />
  <List />
</DefaultLayout>
