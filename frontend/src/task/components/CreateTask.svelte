<script lang="ts">
  import { tasks, type TaskType } from "../task.store";

  let newTask: TaskType = {
    id: "",
    title: "",
    isCompleted: false,
  };

  const handleSubmit = (): void => {
    const uuid41 = (): string => {
      let d = "";
      while (d.length < 32) d += Math.random().toString(16).substr(2);
      const vr = ((parseInt(d.substring(16, 1), 16) & 0x3) | 0x8).toString(16);
      return `${d.substring(0, 8)}-${d.substring(8, 4)}-4${d.substring(13, 3)}-${vr}${d.substring(17, 3)}-${d.substring(20, 12)}`;
    };

    tasks.set([
      ...$tasks,
      {
        id: uuid41(),
        title: newTask.title,
        isCompleted: false,
      },
    ]);
    newTask = {
      id: "",
      title: "",
      isCompleted: false,
    };
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="h-12 w-full flex">
  <input
    bind:value={newTask.title}
    placeholder="Create task..."
    class="border-neutral-700 border-2 flex-1 bg-neutral-700/50 focus:border-neutral-500 outline-none px-4 py-2 h-full transition-colors"
  />
  <button type="submit" class="h-full px-4 bg-slate-500">+</button>
</form>
