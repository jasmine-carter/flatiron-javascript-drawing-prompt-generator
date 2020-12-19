
class Prompt {
  constructor(object) {
    this.value = object.value;
    this.style = object.style
  }

  prompt_idea(){
    return `${this.value}`
  }

}

document.addEventListener("DOMContentLoaded", () =>{
  renderUserPromptForm()
})

let promptButton = document.querySelector(".get-prompt")
promptButton.addEventListener("click", event=> {
  generatePrompt()
})


function generatePrompt() {
  //this function will hit create prompt endpoint
  //feed response to updateUserFacingPrompt
  return fetch("http://localhost:3000/prompts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "test": "test value"
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let newPrompt = new Prompt(object)
    addPromptToSection(newPrompt)
    console.log(newPrompt.prompt_idea())
  })
}

function addPromptToSection(newPrompt){
  let promptSection = document.querySelector(".Generator-Result")
  promptSection.innerHTML = newPrompt.prompt_idea()
}

//from response in generatePrompt(), build new instance of Prompt class

//create a method to submit a user generated prompt

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
