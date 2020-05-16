//Define UI variables
const form = document.querySelector("#task-form")
const taskList = document.querySelector('.collections')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listener
loadEventListeners();

function loadEventListeners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks)

    // Add task event
    form.addEventListener('submit', addTask)

    // Remove task event
    taskList.addEventListener('click', removeTask)

    // Clear task
    clearBtn.addEventListener('click', clearTask)

    // Filter task event
    filter.addEventListener('keyup', filterTask)
}

// Get tasks from local storage
function getTasks() {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task) {
        // Create li element
        const li = document.createElement('li')

        // Add class
        li.className = 'collection-item'

        // Create text node and append to li
        li.appendChild(document.createTextNode(task))

        // Create new link element
        const link = document.createElement('a')

        // Add class
        link.className = 'delete-item secondary-content'

        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"><i>'

        // Append the link to li
        li.appendChild(link)

        // Append li to ul
        taskList.appendChild(li)

    })
}

// Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert("Add a task")
    } else {
        // Create li element
        const li = document.createElement('li')

        // Add class
        li.className = 'collection-item'

        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value))

        // Create new link element
        const link = document.createElement('a')

        // Add class
        link.className = 'delete-item secondary-content'

        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"><i>'

        // Append the link to li
        li.appendChild(link)

        // Append li to ul
        taskList.appendChild(li)

        // Store in local storage
        storeToLocalStorage(taskInput.value)

        // Clear input
        taskInput.value = ""

    }
    e.preventDefault();
}

// Remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure ?')) {
            e.target.parentElement.parentElement.remove()
        }
    }

}

function clearTask(e) {

    // Faster removing using for loop
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}

function filterTask(e) {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll(".collection-item").forEach(function(task) {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

function storeToLocalStorage(task) {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}