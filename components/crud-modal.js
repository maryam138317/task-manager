'use client';

import { useEffect, useState } from "react";
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  TextField, Button, MenuItem, Stack, 
  Typography
} from "@mui/material";

import { Delete } from "@mui/icons-material";

import { handleDeleteTask, handleSaveTask, handleUpdateTask } from "../lib/actions";

export default function CRUDModal({ isOpen, toggleOpenStatus, mode, task }) {
  const [formData, setFormData] = useState({ title: "", priority: 0 });

  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && task) {
        setFormData({ title: task.title, priority: task.priority });
      } else {
        setFormData({ title: "", priority: 0 });
      }
    }
  }, [isOpen, mode, task]);

  const handleSubmit = async () => {
    if (!formData.title.trim()) return;

    if (mode === 'edit') {
      await handleUpdateTask({ id: task.id, ...formData });
    } else {
      await handleSaveTask(formData);
    }
    
    toggleOpenStatus(); // Close modal after saving
  };

  return (
    <Dialog open={isOpen} onClose={toggleOpenStatus} fullWidth maxWidth="sm">
      <DialogTitle sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>{mode === 'edit' ? 'Edit Task' : 'Add New Task'}</Typography>
        {mode === "edit" && (
    <Button
      startIcon={<Delete />}
      onClick={() => handleDeleteTask(task.id)}
    >
      Remove Task
    </Button>
  )}
        </DialogTitle>
      <DialogContent>
        <Stack spacing={3} sx={{ mt: 1 }}>
          <TextField
            label="Task Title"
            fullWidth
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <TextField
            select
            label="Priority"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
          >
            <MenuItem value={0}>Not Important</MenuItem>
            <MenuItem value={1}>Important</MenuItem>
            <MenuItem value={2}>Urgent</MenuItem>
          </TextField>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleOpenStatus}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          {mode === 'edit' ? 'Update' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
