"use client";

import { useState, useTransition } from "react";
import { ListItemText, Checkbox } from "@mui/material";
import CRUDModal from "./crud-modal";
import { toggleTaskAction } from "../lib/actions";

export default function TaskItems({ id, title, status, priority, date }) {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const isCompleted = Boolean(status);

  const handleToggle = () => {
    startTransition(async () => {
      await toggleTaskAction(id, isCompleted);
    });
  };

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Checkbox
        checked={isCompleted}
        onChange={handleToggle}
        disabled={isPending}
      />

      <ListItemText
        primary={title}
        secondary={date}
        onClick={openModal}
        sx={{
          cursor: "pointer",
          textDecoration: isCompleted ? "line-through" : "none",
          opacity: isCompleted ? 0.5 : 1,
          transition: "opacity 0.2s ease",
          "& .MuiListItemText-primary": {
            fontWeight: isCompleted ? 400 : 600
          },
          "&:hover": {
            opacity: 0.8
          }
        }}
      />

      {/* CRUD Modal for Editing */}
      <CRUDModal
        isOpen={open}
        toggleOpenStatus={closeModal}
        mode="edit"
        task={{ id, title, priority, status }}
      />
    </>
  );
}
