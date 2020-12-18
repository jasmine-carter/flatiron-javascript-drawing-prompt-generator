
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
  })
}
