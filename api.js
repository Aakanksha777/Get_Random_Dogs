//--------------------------Classic way to fetch data {promise, then}--------------------------
// console.log("Fetching API data")
// fetch("https://dog.ceo/api/breeds/list/all")
// .then(Response => Response.json())
// .then(data => console.log(data))


// console.log("i am 2nd clg")
// console.log(4 * 4)
// console.log(2+98)
// console.log(10/10)


//--------------------------Modern way {Async Await}-----------------------------------


// <-------start function fetches the breed List------>
async function start () {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json ()
    console.log(data)
    createBreedList(data.message)
}

start()


//<---------createBreedList function creates the select Element--------->

function createBreedList ( breedList) { //parameter = breedList =object with properties
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option>choose a dog breed</option> 
        ${Object.keys(breedList).map(function (breed) {
            return `<option>${breed}</option>`
        })}
    </select>
    `
}

// Loop through an array using MAP
// ${Object.keys()} this gives us an ARRAY 
// function inside map
// return `<option>${breed}</option>` this line returns comma also.
// .join('') ==> returns data without comma 
// onchange we are calling loadByBreed function.
// argument in loadByBreed = this--> whatever breed is selected show it.


//-------loadByBreed function loads the image of selected breed--------->>>
async function loadByBreed(breed) {
    if (breed != "choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`) // documentation - by breed URL.
        const data = await response.json()
        // console.log(data) // message: Array(5), status: 'success',message:(5), status:"success"
        createSlideShow(data.message) 
    }
}

//loadByBreed parameter
// alert (breed) // shows whichever breed is selected from the drop down.
// when i select "choose dog breed"  it also shows ALERT. SOLUTION IS-> if condition
// Access breed photo from selected breed name. so fetch again to send request for particular dog breed's photo.
// back ticks b'coz we want photos which we selected. not random one.
// Replace hound to ${breed}


// createSlideShow function create div with innerHTML which shows images

function createSlideShow(images) { 
    // let currentPosition = 0
    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${images[0]}');"></div>
    <div class="slide" style="background-image: url('${images[1]}');"></div>
    `
    // currentPosition += 2
    // setInterval(nextSlide, 3000) // func which will run every 3secs.

    // function nextSlide() {
    // <div class="slide" style="background-image: url('${images[1]}');"></div>
    //     document.getElementById("slideshow").insertAdjacentHTML("beforeend", ` <div class="slide" style="background-image: url('${images[currentPosition]}');"></div>`)
    //     setTimeout (function () {
    //         document.querySelector(".slide").remove
    //     },1000)
    //     if (currentPosition + 1 >= images.length) {
    //         currentPosition = 0
    //     } else {
    //         currentPosition + 1
    //     }
    // }
}

//images = Array.

