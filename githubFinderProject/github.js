class GitHub {
    constructor() {
        this.clientID = '86e1818c286088224b1a'
        this.clientSecret = 'dc6d1b6cec84154c92cf84729a3577440e03127f'
        this.repoCount = 5
        this.repoSort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`)

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repoCount}&sort=${this.repoSort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`)

        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        console.log(profile)
        console.log(repos)
        return {
            profile,
            repos
        }
    }

}