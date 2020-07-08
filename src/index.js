console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages () {
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => console.log(json));

}

function renderImages(images) {
    console.log(images)
    const main = document.querySelector('main')



    images.forEach(message => {
        const img = document.createElement('img')
        img.src = message
        main.appendChild(img)
    })
}


document.addEventListener('DOMContentLoaded', function () {
    fetchImages()
})
