
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

document.addEventListener("DOMContentLoaded", () =>{
  renderUserPromptForm()
  renderUserImageForm()
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

document.querySelector(".submit-image").addEventListener("click", function (event) {
  let imageUrl = document.querySelector("input[name='image']").value
  event.preventDefault()
  //function that submits form data goes here
})

//function addImageToPrompt()

//build out function to enable user to add image url to their prompt generated
//build out function to get all prompts by style
// build out function to show images for a prompt
