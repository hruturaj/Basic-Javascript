const http = new easyHttp()

// Get Posts
/*
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
    if (err) {
        console.log(err)
    } else {
        console.log(posts)
    }
})
*/

// Get single Post
/*
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
    if (err) {
        console.log(err)
    } else {
        console.log(posts)
    }
})
*/

/*
// Create post
const data = {
        title: 'Custom Post',
        body: 'This is a Custom post'
    }
    // Create post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
    if (err) {
        console.log(err)
    } else {
        console.log(post)
    }
})

// Update post
http.post('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
    if (err) {
        console.log(err)
    } else {
        console.log(post)
    }
})
*/

// Delete a post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if (err) {
        console.log(err)
    } else {
        console.log(response)
    }
})