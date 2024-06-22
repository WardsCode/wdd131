const inputA = document.querySelector("#favchap");
const buttonA = document.querySelector("button");
const listA = document.querySelector("#list");


function addScripture() {

    if (inputA.value.trim() !== ""){

        const newList = document.createElement("li");

        newList.textContent = inputA.value;

        inputA.value = "";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌"; 

        listA.appendChild(newList);

        newList.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            listA.removeChild(newList);
        } );

        inputA.focus();

    } 

}

buttonA.addEventListener("click", addScripture);



/*
buttonA.addEventListener("click", function(){

//code function
});
*/