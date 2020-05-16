class easyHttp {
    constructor() {
        this.xhr = new XMLHttpRequest()
    }

    // Make a Http get request
    get(url, callBack) {
        // Getting class this keyword  
        let self = this.xhr

        // open the Api using xhr
        self.open('GET', url, true)

        // perform operation using onload method
        self.onload = function() {
            if (self.status === 200) {
                callBack(null, self.responseText)
            } else {
                callBack(`Error : ${self.status}`)
            }
        }

        // Send the data
        self.send()

    }

    // Make a http Post request
    post(url, data, callBack) {
        let self = this.xhr

        self.open('POST', url, true)
        self.setRequestHeader('Content-type', 'application/json')

        self.onload = function() {
            callBack(null, self.responseText)
        }

        self.send(JSON.stringify(data))
    }

    // Make a http Put request
    put(url, data, callBack) {
        let self = this.xhr

        self.open('PUT', url, true)
        self.setRequestHeader('Content-type', 'application/json')

        self.onload = function() {
            callBack(null, self.responseText)
        }

        self.send(JSON.stringify(data))
    }


    // Make a http Delete request
    delete(url, callBack) {
        // Getting class this keyword  
        let self = this.xhr

        // open the Api using xhr
        self.open('DELETE', url, true)

        // perform operation using onload method
        self.onload = function() {
            if (self.status === 200) {
                callBack(null, 'Post deleted')
            } else {
                callBack(`Error : ${self.status}`)
            }
        }

        // Send the data
        self.send()

    }


}