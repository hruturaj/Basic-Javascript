// Using ES5 Object Oriented Approach

// Book constructor
function Book(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
}

// UI constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.querySelector('#book-list')

    // Create tr element
    const row = document.createElement('tr')

    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'>X</a></td>
    `
    list.appendChild(row)
}

// Clear fields
UI.prototype.clearFields = function() {
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''

}

// Show alert
UI.prototype.showAlert = function(message, className) {
    // Create div
    const div = document.createElement('div')

    // Add classes
    div.className = `alert ${className}`

    // Add text
    div.appendChild(document.createTextNode(message))

    // Get parent
    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')

    // Insert alert
    container.insertBefore(div, form)

    // Timeout after 3 sec
    setTimeout(function() {
        document.querySelector('.alert').remove()
    }, 3000)
}

// Delete Book
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove()
    }
}

// Event Listener
document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value

    const book = new Book(title, author, isbn)

    // Instantiate UI object
    const ui = new UI()

    // Check field input values (Validation)
    if (title === '' || author === '' || isbn === '') {

        // Error alert
        ui.showAlert('Please fill in all fields', 'error')

    } else {

        // Add book to list
        ui.addBookToList(book)

        // Show Success
        ui.showAlert('Book Added', 'success')

        // Clear fields
        ui.clearFields()

        e.preventDefault()
    }
})

// Add event listener for delete
document.querySelector('#book-list').addEventListener('click', function(e) {

    // Create ui object
    const ui = new UI()

    // Call delete function
    ui.deleteBook(e.target)

    // Show message for book deletion
    ui.showAlert('Book deleted successfully', 'success')

})