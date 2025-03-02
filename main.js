// First Button Work

document.getElementById("discover-btn").addEventListener("click", function(){
  window.location.href = "./second.html";
})

// Button of Card Container

// Card-1
document.getElementById("btn-1").addEventListener("click", function(){
  const mainTask = document.getElementById("total-task").innerText;
  const task = mainTask - 1;
  document.getElementById("total-task").innerText = task;

  const point = document.getElementById("point").innerText;
  const finalPoint = point - 1;
  document.getElementById("point").innerText = finalPoint;

  const newFile = document.createElement("p");
  newFile.classList.add("forInput");
  newFile.innerText = "You have complete the task at 9:46 pm.Task name is Fixed Mobile button Issue";

  const container = document.getElementById("button-click-effect");
  container.append(newFile);

  document.getElementById("btn-1").style.backgroundColor = "white";
  document.getElementById("btn-1").style.color = "black";

  

  this.disabled = true;
})

// Card-2
document.getElementById("btn-2").addEventListener("click", function(){
  const mainTask = document.getElementById("total-task").innerText;
  const task = mainTask - 1;
  document.getElementById("total-task").innerText = task;

  const point = document.getElementById("point").innerText;
  const finalPoint = point - 1;
  document.getElementById("point").innerText = finalPoint;

  const newFile = document.createElement("p");
  newFile.classList.add("forInput");
  newFile.innerText = "You have complete the task at 9:46 pm.Task name is Add Dark Mode";

  const container = document.getElementById("button-click-effect");
  container.append(newFile);

  document.getElementById("btn-2").style.backgroundColor = "white";
  document.getElementById("btn-2").style.color = "black";

  this.disabled = true;
})

// Card-3
document.getElementById("btn-3").addEventListener("click", function(){
  const mainTask = document.getElementById("total-task").innerText;
  const task = mainTask - 1;
  document.getElementById("total-task").innerText = task;

  const point = document.getElementById("point").innerText;
  const finalPoint = point - 1;
  document.getElementById("point").innerText = finalPoint;

  const newFile = document.createElement("p");
  newFile.classList.add("forInput");
  newFile.innerText = "You have complete the task at 9:46 pm.Task name is Optimize Home Page";

  const container = document.getElementById("button-click-effect");
  container.append(newFile);

  document.getElementById("btn-3").style.backgroundColor = "white";
  document.getElementById("btn-3").style.color = "black";

  this.disabled = true;
})

// Card-4
document.getElementById("btn-4").addEventListener("click", function(){
  const mainTask = document.getElementById("total-task").innerText;
  const task = mainTask - 1;
  document.getElementById("total-task").innerText = task;

  const point = document.getElementById("point").innerText;
  const finalPoint = point - 1;
  document.getElementById("point").innerText = finalPoint;

  const newFile = document.createElement("p");
  newFile.classList.add("forInput");
  newFile.innerText = "You have complete the task at 9:46 pm.Task name is Add New Emoji";

  const container = document.getElementById("button-click-effect");
  container.append(newFile);

  document.getElementById("btn-4").style.backgroundColor = "white";
  document.getElementById("btn-4").style.color = "black";

  this.disabled = true;
})

// Card-5
document.getElementById("btn-5").addEventListener("click", function(){
  const mainTask = document.getElementById("total-task").innerText;
  const task = mainTask - 1;
  document.getElementById("total-task").innerText = task;

  const point = document.getElementById("point").innerText;
  const finalPoint = point - 1;
  document.getElementById("point").innerText = finalPoint;

  
  const newFile = document.createElement("p");
  newFile.classList.add("forInput");
  newFile.innerText = "You have complete the task at 9:46 pm.Task name is Integrate OpenAI API";

  const container = document.getElementById("button-click-effect");
  container.append(newFile);

  document.getElementById("btn-5").style.backgroundColor = "white";
  document.getElementById("btn-5").style.color = "black";

  this.disabled = true;
})

// Card-6
document.getElementById("btn-6").addEventListener("click", function(){
 const point = document.getElementById("point").innerText;
  const finalPoint = point - 1;
  document.getElementById("point").innerText = finalPoint;
  alert("Board Update Successfully");

  const newFile = document.createElement("p");
  newFile.classList.add("forInput");
  newFile.innerText = "You have complete the task at 9:46 pm.Task name is Improved Job Searching";

  const container = document.getElementById("button-click-effect");
  container.append(newFile);

  document.getElementById("btn-6").style.backgroundColor = "white";
  document.getElementById("btn-6").style.color = "black";

  this.disabled = true;
})

// Clear History Button

document.getElementById("clear-btn").addEventListener("click", function(){
  document.getElementById("button-click-effect").style.display = "none";
})

// Back Button
document.get
