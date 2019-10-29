document.addEventListener ("DOMContentLoaded", () => {

  let form= document.querySelector("#create-task-form")

  form.addEventListener("submit",formsubmit)
  
  function formsubmit(event){
  event.preventDefault()
  let inputtext= event.target[0].value
  console.log(inputtext)
  
  let task = document.querySelector
  ("#tasks")

  let newList = document.createElement("li")

  let removeList = document.createElement("button")

  removeList.innerText = "X";
  removeList.id = inputtext;

  removeList.addEventListener("click", deleteAction)

  newList.innerText = inputtext 

  task.append(newList)

  newList.append(removeList)

  event.target.reset()

}
});

function deleteAction(event) {
  let parentLi = event.target.parentElement;
  
  parentLi.remove(); 
}


