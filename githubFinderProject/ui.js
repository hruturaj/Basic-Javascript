class UI {
    constructor() {
        this.profile = document.querySelector('#profile')
    }

    // Display profile of user
    showProfile(user) {
        this.profile.innerHTML = `
            <div class='card card-body border-light mb-3'>
                <div class='row'>
                    <div class='col-md-3'>
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary"> Public Repo : ${user.public_repos}</span>
                        <span class="badge badge-success"> Public Gists : ${user.public_gists}</span>
                        <span class="badge badge-secondary"> Followers : ${user.followers}</span>
                        <span class="badge badge-info"> Following : ${user.following}</span>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                            <li class="list-group-item">Bio: ${user.bio}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repositories</h3>
            <div id="repos"></div>
        `
    }

    // Clear the text when no input
    clearProfile() {
        this.profile.innerHTML = ''
    }

    // Show alert when no user found
    showAlert(message, classes) {
        // Clear previous alert
        this.clearAlert()

        // Create div Element
        const div = document.createElement('div')

        // Add class
        div.className = classes

        // Add text
        div.appendChild(document.createTextNode(message))

        // Get parent
        const container = document.querySelector('.searchContainer')

        // Get search box
        const search = document.querySelector('.search')

        // Insert alert
        container.insertBefore(div, search)


    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert')

        if (currentAlert) {
            currentAlert.remove()
        }
    }

    // Show repos
    showRepos(repos) {
        let output = ''

        repos.forEach(function(repo) {
            output += `
                <div class="card card-body border-info mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge badge-primary "> Stars : ${repo.stargazers_count}</span>
                        <span class="badge badge-success"> Watchers : ${repo.watchers_count}</span>
                        <span class="badge badge-secondary"> Fork : ${repo.forms_count}</span>                    
                        </div>
                    </div>
                </div>
            `
        })

        // Output the repos
        document.querySelector('#repos').innerHTML = output
    }

}