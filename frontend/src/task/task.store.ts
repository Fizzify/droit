import { writable } from "svelte/store";

export type TaskType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const stored: string = localStorage.getItem("tasks");

export const tasks = writable<TaskType[]>(JSON.parse(stored) || []);

tasks.subscribe((value) =>
  localStorage.setItem("tasks", JSON.stringify(value))
);
