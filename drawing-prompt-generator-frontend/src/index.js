
//design button to generate request to prompt create
//design header banner
//set up div that will receive returned prompt value to user when generated
//set up top level menu that you can select to see all prompt images?

let promptButton = document.querySelector(".get-prompt")
promptButton.addEventListener("click", event=> {
  console.log("you done clicked it!")
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
    console.log(object)
    addPromptToSection(object)
  })
}

function addPromptToSection(object){
  let promptSection = document.querySelector(".Generator-Result")
  promptSection.innerHTML = object.value
}

//create class for Prompt here
//from response in generatePrompt(), build new instance of Prompt class

//create a method to submit a user generated prompt

function renderUserPromptForm(){
  let userFormButton = document.querySelector(".user-generated-prompt")
  let userForm = document.querySelector(".user-prompt-form")
  userFormButton.addEventListener("click", event=> {
    userForm.style =""
  })
}
