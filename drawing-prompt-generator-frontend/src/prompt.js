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
