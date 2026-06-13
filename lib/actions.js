'use server';

import { ToggleStatus, saveTask, updateTask, deleteTask } from "./tasks";
import { revalidatePath } from "next/cache";

export async function toggleTaskAction(id, currentStatus) {
  
  const nextStatus = !currentStatus;
  
  ToggleStatus(id, nextStatus);
  
  revalidatePath("/all-tasks")
}

export async function handleSaveTask(formData) {
  // Add default status and date for new tasks
  const task = {
    title: formData.title,
    priority: formData.priority,
    status: 0,
    date: new Date().toISOString().split('T')[0]
  };
  
  saveTask(task);
  revalidatePath('/'); // Refresh the data on the page
  revalidatePath('/all-task');
  revalidatePath('/static');
  revalidatePath('/priorities');
}

export async function handleUpdateTask(formData) {
  // formData here is { id, title, priority }
  updateTask(formData);
  revalidatePath('/'); // Refresh the data on the page
  revalidatePath('/all-task');
  revalidatePath('/static');
  revalidatePath('/priorities');
}

export async function handleDeleteTask(id) {
  deleteTask(id);
  revalidatePath('/');
  revalidatePath('/all-task');
  revalidatePath('/static');
  revalidatePath('/priorities');
}
