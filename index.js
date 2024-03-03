// 假设 tasks 是一个包含任务信息的数组，每个任务对象包括 name 和 deadline 属性
const tasks = [
    { name: 'Task 1', deadline: '2024-03-05' },
    { name: 'Task 2', deadline: '2024-03-10' },
    { name: 'Task 3', deadline: '2024-03-15' }
];

// 当页面加载完成时执行初始化操作
window.addEventListener('load', () => {
    displayTasks();
});

// 显示任务列表
function displayTasks() {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = ''; // 清空任务列表

    const keyword = document.getElementById('search-input').value.toLowerCase();

    // 遍历任务数组，筛选包含关键字的任务，并为每个任务创建一个列表项并添加到页面中
    tasks.forEach(task => {
        if (task.name.toLowerCase().includes(keyword)) {
            const listItemElement = document.createElement('li');
            listItemElement.textContent = `Task: ${task.name}, Deadline: ${task.deadline}`;
            taskListElement.appendChild(listItemElement);
        }
    });
}

// 当搜索输入框内容改变时执行搜索
document.getElementById('search-input').addEventListener('input', () => {
    displayTasks();
});
