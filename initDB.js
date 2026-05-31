const sql = require('better-sqlite3')

const db = sql('tasks.db');

const dummyTasks = [
    {
        title : 'study for exam',
        status : 0,
        date : new Date().toISOString().split('T')[0],
        priority : 2
    }
];

db.prepare(`
    CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    status INTEGER DEFAULT 0,
    date TEXT DEFAULT CURRENT_TIMESTAMP,
    priority INTEGER DEFAULT 0
    )
    `).run()

async function initData () {
    const stmt = db.prepare(
        `INSERT INTO tasks VALUES (
        null,
        @title,
        @status,
        @date,
        @priority
        )`
    );
    for (const task of dummyTasks) {
        stmt.run(task);
    }
} 

initData();