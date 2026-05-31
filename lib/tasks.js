import sql from 'better-sqlite3'

const db = sql('tasks.db');

export function getAllTasks(searchQuery = "") {
    return db.prepare(`
        SELECT * FROM tasks 
        WHERE title LIKE ? 
        ORDER BY status ASC, date DESC
    `).all(`%${searchQuery}%`);
}


export function getTodayTasks(searchQuery = "") {
    const todayDate = new Date().toISOString().split('T')[0];
    return db.prepare(`
        SELECT * FROM tasks 
        WHERE date(date) = ? 
        AND title LIKE ? 
        ORDER BY status ASC, priority DESC
    `).all(todayDate, `%${searchQuery}%`);
}


export function ToggleStatus (id, newStatus) {
    const statusValue = newStatus ? 1 : 0;
    return db
    .prepare("UPDATE tasks SET status = ? WHERE id = ?")
    .run(statusValue, id);
}

export function getTasksByPriority(priority) {
  return db.prepare(`
    SELECT * FROM tasks 
    WHERE priority = ? 
    ORDER BY status ASC, date DESC
  `).all(priority);
}

export function getStatusSummary() {
  const completed = db.prepare(`SELECT COUNT(*) as count FROM tasks WHERE status = 1`).get().count;
  const Notcompleted = db.prepare(`SELECT COUNT(*) as count FROM tasks WHERE status = 0`).get().count;

  return {completed, Notcompleted};
}
export function getPrioritySummary() {
  const notImp = db.prepare(`SELECT COUNT(*) as count FROM tasks WHERE priority = 0`).get().count;
  const Imp = db.prepare(`SELECT COUNT(*) as count FROM tasks WHERE priority = 1`).get().count;
  const urg = db.prepare(`SELECT COUNT(*) as count FROM tasks WHERE priority = 2`).get().count;

  return {notImp, Imp, urg};
}

export function saveTask (task) {
  db.prepare(`
    INSERT INTO tasks
    (title, status,date,priority)
    VALUES (
    @title,
    @status,
    @date,
    @priority
    )
    `).run(task)
}

export function updateTask (task) {
  db.prepare(`
    UPDATE tasks
    SET title = @title,
        priority = @priority
    WHERE id = @id
    `).run(task)
}

export function deleteTask (id) {
  db.prepare(`DELETE FROM tasks WHERE id = ?`).run(id)
}

