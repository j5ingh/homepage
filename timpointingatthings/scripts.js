console.log("test");

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', './data.json', true)

request.onload = function () {
	const app = document.getElementById('root')
	var data = JSON.parse(this.response)
	data = data.data

	for(var i in data) {
		console.log(data[i]);

		// container
		const container = document.createElement('div')
		container.setAttribute('class','container')
		app.append(container)

		// title
		const title = document.createElement('div')
		title.setAttribute('class', 'title')
		title.innerHTML = data[i].title
		container.append(title)

		// image
		const image = document.createElement('img')
		image.setAttribute('class', 'image')
		image.src = data[i].src
		container.append(image)

		// descrition
		const description = document.createElement('div')
		description.setAttribute('class', 'description')
		description.innerHTML = data[i].description
		container.append(description)
	}
}

// Send request
request.send()
