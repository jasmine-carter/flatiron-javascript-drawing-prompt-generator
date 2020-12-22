
class Prompt {
  constructor(object) {
    this.value = object.sentences[0].value;
    this.style = object.style_id
    this.id = object.id
  }

  prompt_idea(){
    return `${this.value}`
  }
  //add image
}

class Image {
  constructor(object) {
    this.url = object.attributes.url
    this.image_caption = object.attributes.image_caption
  }
}


document.addEventListener("DOMContentLoaded", () =>{
  renderUserPromptForm()
  renderUserImageForm()
  renderImageMenu()
})

let promptButton = document.querySelector(".get-prompt")
promptButton.addEventListener("click", event=> {
  generatePrompt()
})


function generatePrompt(noun='', verb ='', adjective='', style='') {
  //this function will hit create prompt endpoint
  return fetch("http://localhost:3000/prompts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "noun": noun,
      "verb": verb,
      "adjective": adjective,
      "style": style
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let newPrompt = new Prompt(object)
    console.log(object)
    addPromptToSection(newPrompt)
  })
}

//takes newly generated prompt and adds to DOM
function addPromptToSection(newPrompt){
  let promptSection = document.querySelector(".Generator-Result")
  promptSection.innerHTML = newPrompt.prompt_idea()
  promptSection.id = newPrompt.id
}

document.querySelector(".submit").addEventListener("click", function (event) {
  let noun = document.querySelector("input[name='noun']").value
  let verb = document.querySelector("input[name='verb']").value
  let adjective = document.querySelector("input[name='adjective']").value
  let style = document.querySelector("input[name='style']").value
  event.preventDefault()
  document.querySelector("input[name='noun']").value = ""
  document.querySelector("input[name='verb']").value = ""
  document.querySelector("input[name='adjective']").value= ""
  document.querySelector("input[name='style']").value = ""
  generatePrompt(noun, verb, adjective, style)

})

//shows or hides user form to submit new Prompt based on click and style of form.
function renderUserPromptForm(){
  let userFormButton = document.querySelector(".user-generated-prompt")
  let userForm = document.querySelector(".user-prompt-form")
  userFormButton.addEventListener("click", event=> {
    if (userForm.style.display == "none") {
      userForm.style.display ="block"
    }
    else
    userForm.style.display = "none"
  })
}

function renderUserImageForm(){
  let userImageButton = document.querySelector(".add-image-to-prompt")
  let imageForm = document.querySelector(".submit-image-form")
  userImageButton.addEventListener("click", event => {
    if (imageForm.style.display == "none") {
      imageForm.style.display = "block"
    }
    else
      imageForm.style.display = "none"
  })
}

document.querySelector("#submit-image").addEventListener("click", function (event) {
  let image = document.querySelector("input[name='image']").value
  let prompt = document.querySelector(".Generator-Result").id
  event.preventDefault()
  console.log("you're submitting an image to a prompt")
  document.querySelector("input[name='image']").value = ""
  document.querySelector(".submit-image-form").style.display = "none"
  addImageToPrompt(image, prompt)
  //function that submits form data goes here
})

function addImageToPrompt(image, prompt) {
  return fetch(`http://localhost:3000/prompts/${prompt}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "image": image
    })
  })
  .then(function(response) {
    return response.json()
  })
  .then(function(object) {
  })
}


function getRandomImages(){
  //this function will hit create prompt endpoint
  fetch("http://localhost:3000/images")
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object.data)
    //for each element in object array .. call new item
    for (const image of object.data) {
      let newImage = new Image(image)
      console.log(newImage)
    }
    //call add image cards to  view - and button to clear them
  })
}

function renderImageMenu(){
  let seeRandomImages = document.querySelector(".see-all-images")
  //let imagesForm = document.querySelector(".see-image-form")
  //let imageUrlForm = document.querySelector(".submit-image-form")
  seeRandomImages.addEventListener("click", event => {
    console.log("clicked!")
    event.preventDefault()
    getRandomImages()
  })
}

function createImageCards(image){
  let card = document.createElement("div");
  let cardContainer =  document.querySelector("#image-collection")
  let img = document.createElement("IMG")
  card.className = "image-card"
  img.className = "image-avatar"
}
//function for each random image, add a div to show the image


//build out function to get all prompts by style
// build out function to show images for a prompt
//
