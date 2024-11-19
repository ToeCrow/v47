// Felhantering
document.getElementById("validateJSONButton").addEventListener("click", () => {
 const input = document.getElementById("jsonInput").value;
 try {
     const parsed = JSON.parse(input);
     document.getElementById("jsonResult").innerText = "Giltig JSON!";
     console.log(parsed);
 } catch (error) {
     document.getElementById("jsonResult").innerText = "Ogiltig JSON!";
     console.error("Fel:", error);
 }
});

// Eventhantering
document.getElementById("colorChangeButton").addEventListener("click", () => {
 const text = document.getElementById("colorChangeText");
 text.style.color = text.style.color === "red" ? "blue" : "red";
});

// To-Do Lista
document.getElementById("addTaskButton").addEventListener("click", () => {
 const taskInput = document.getElementById("taskInput");
 const taskText = taskInput.value.trim();
 if (!taskText) return alert("Uppgiften kan inte vara tom!");

 const taskList = document.getElementById("taskList");
 const taskItem = document.createElement("li");
 taskItem.innerText = taskText;

 const deleteButton = document.createElement("button");
 deleteButton.innerText = "Ta bort";
 deleteButton.style.marginLeft = "10px";
 deleteButton.addEventListener("click", () => taskItem.remove());

 taskItem.appendChild(deleteButton);
 taskList.appendChild(taskItem);

 taskInput.value = "";
});

// Asynkron kod
document.getElementById("fetchDataButton").addEventListener("click", async () => {
 const dataList = document.getElementById("dataList");
 dataList.innerHTML = "Laddar...";

 try {
     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
     const data = await response.json();
     dataList.innerHTML = "";
     data.slice(0, 5).forEach(item => {
         const li = document.createElement("li");
         li.innerText = item.title;
         dataList.appendChild(li);
     });
 } catch (error) {
     dataList.innerHTML = "Fel vid hämtning av data!";
     console.error("Fel:", error);
 }
});

// DOM Traversering
document.getElementById("traverseButton").addEventListener("click", () => {
 const listItems = document.querySelectorAll("#nestedList li");
 listItems.forEach(item => console.log(item.innerText));
});
