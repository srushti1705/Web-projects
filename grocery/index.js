let bgContainerElement = document.createElement("div"); 
bgContainerElement.classList.add("bg-teal-400", "p-8", "min-h-screen"); 
document.body.appendChild(bgContainerElement); 

let headingEl = document.createElement("h1");
headingEl.classList.add("text-4xl", "font-bold", "text-white", "mb-6", "text-center"); 
headingEl.textContent = "Grocery List";
bgContainerElement.appendChild(headingEl); 

let listContainerEl = document.createElement("ul"); 
listContainerEl.classList.add("bg-white", "rounded-lg", "py-8", "px-12", "list-disc", "max-w-md", "mx-auto", "shadow-lg"); 
bgContainerElement.appendChild(listContainerEl);

let listItems = ["Milk", "Bread", "Eggs", "Cheese", "Fruits", "Vegetables"]; 
for (let item of listItems) {
    let listItemEl = document.createElement("li");
    listItemEl.classList.add("text-lg", "mb-4");
    listItemEl.textContent = item;
    listContainerEl.appendChild(listItemEl);
}

const buttonContainerEl = document.createElement("div"); 
buttonContainerEl.className = "text-center mt-6";

let buttonel = document.createElement("button");
buttonel.classList.add("bg-green-500", "text-white", "px-4", "py-2", "rounded", "hover:bg-green-600"); 
buttonel.textContent = "Proceed to Pay";
buttonContainerEl.appendChild(buttonel);
bgContainerElement.appendChild(buttonContainerEl);