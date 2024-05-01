<script lang="ts">
  import checkIcon from "../../assets/icons/check.svg";
  import {
    Quit,
    WindowToggleMaximise,
    WindowMinimise,
    WindowSetAlwaysOnTop,
  } from "../../../wailsjs/runtime/runtime.js";

  const handleMinimize = (): void => {
    WindowMinimise();
  };

  const handleToggleMaximize = async (): Promise<void> => {
    WindowToggleMaximise();
  };

  const handleClose = (): void => {
    Quit();
  };
</script>

<div
  id="titlebar"
  class="flex items-center justify-between w-full bg-neutral-50/10 text-white"
>
  <span class="ml-6">
    <img src={checkIcon} alt="Complete a task." class="filter-check" />
  </span>
  <div>
    <div class="flex items-center">
      <button
        on:click={handleMinimize}
        class="hover:bg-neutral-600/40 w-14 h-14 text-xl opacity-50"
        >&ndash;</button
      >
      <button
        on:click={handleToggleMaximize}
        class="hover:bg-neutral-600/40 w-14 h-14 text-md opacity-50"
        >&square;</button
      >
      <button
        on:click={handleClose}
        class="hover:bg-red-800/40 w-14 h-14 text-xl opacity-50">&times;</button
      >
    </div>
  </div>
</div>

<style>
  #titlebar {
    --wails-draggable: drag;
  }

  #titlebar button {
    --wails-draggable: no-drag;
  }
</style>
