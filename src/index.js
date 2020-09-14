console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// CHALLENGE 1

function fetchImages () {
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json));
}

function renderImages(images) {
    console.log(images.message)
    const main = document.querySelector('#dog-image-container')

    images.message.forEach(message => {
        const img = document.createElement('img')
        img.src = message
        main.appendChild(img)
    })
}

// CHALLENGE 2

function fetchBreeds() {
    return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breeds = Object.keys(json.message)
            renderBreeds(breeds)});
}
fetchBreeds()

function renderBreeds(breeds) {
    console.log(breeds.message)
    const main = document.querySelector('#dog-breeds')

    

    breeds.forEach(message => {
        console.log(message)
        const li = document.createElement('li')
        li.innerText = message

        main.appendChild(li)
    })
   
}


document.addEventListener('DOMContentLoaded', function () {
    fetchImages()
})
