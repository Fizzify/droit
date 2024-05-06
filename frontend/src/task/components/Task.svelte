<script lang="ts">
  export let task: TaskType;
  import { slide } from "svelte/transition";
  import trashIcon from "../../assets/icons/trash.svg";
  import { tasks, type TaskType } from "../task.store";

  const handleTaskDelete = (): void => {
    tasks.update((prev) =>
      prev.filter((foundTask) => foundTask.id !== task.id),
    );
  };

  const handleTaskCompleteToggle = (): void => {
    tasks.update((prev) => {
      return prev.map((foundTask) => {
        if (foundTask.id === task.id) {
          foundTask.isCompleted = !foundTask.isCompleted;
        }
        return foundTask;
      });
    });
  };

  const handleTaskKeypress = (e: KeyboardEvent): void => {
    const value = (e.target as HTMLInputElement).value;

    if (e.key !== "Enter") return;

    tasks.update((prev) => {
      return prev.map((foundTask) => {
        if (foundTask.id === task.id) {
          foundTask.title = value;
        }
        return foundTask;
      });
    });

    (e.target as HTMLInputElement).blur();
  };
  const handleTaskBlur = (e: Event): void => {
    const value = (e.target as HTMLInputElement).value;
    tasks.update((prev) => {
      return prev.map((foundTask) => {
        if (foundTask.id === task.id) {
          foundTask.title = value;
        }
        return foundTask;
      });
    });
  };
</script>

<li
  in:slide={{ axis: "y" }}
  out:slide={{ axis: "x" }}
  class="px-4 py-4 h-12 flex items-center justify-between gap-4"
>
  <div class="flex items-center gap-4 w-full">
    <input
      on:change={handleTaskCompleteToggle}
      type="checkbox"
      checked={task.isCompleted}
    />
    <input
      on:keypress={handleTaskKeypress}
      on:blur={handleTaskBlur}
      value={task.title}
      class="flex-1 bg-transparent outline-none border-2 border-transparent focus:border-neutral-500 transition-colors duration-300"
    />
  </div>
  <button on:click={handleTaskDelete} class="opacity-90">
    <img
      src={trashIcon}
      alt="Delete task."
      class="filter-trash hover:opacity-50 transition-opacity"
    />
  </button>
</li>
