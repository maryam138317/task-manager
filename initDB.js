const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(process.cwd(), 'tasks.db');

console.log('Database file:', dbPath);

const db = new Database(dbPath);

const dummyTasks = [
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