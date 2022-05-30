let Add = document.querySelector("#add");
let inputName = document.querySelector("#name");
let inputPrice = document.querySelector("#price");
let Del = document.querySelector("#del");
let table = document.querySelector("table");
let id = document.querySelectorAll(".id");
let idArray = [];

// add event listeners
Add.addEventListener("click", addRow);
Del.addEventListener("click", delRow);

// define event listener functions
let i = 0;

function addRow() {
  if (inputName.value == "" && !Number(inputPrice.value)) {
    return;
  } else {
    //get input values
    let inputNameValue = inputName.value;
    let inputPriceValue = inputPrice.value;

    //create table row
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdId = document.createElement("td");
    //add values to data
    tdId.innerText = i += 1;
    tdName.innerText = inputNameValue;
    tdPrice.innerText = `$${inputPriceValue}`;
    //add class to tdId
    tdId.className = "id";
    // add table data to row
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    // add table row to table
    idArray.push(tr);
    idArray.map((item) => {
      table.appendChild(item);
    });
    inputName.value = "";
    inputPrice.value = "";
  }
}

function delRow() {
  //prompt user input
  let userPrompt;
  userPrompt = prompt();

  if (userPrompt === "") {
    idArray.pop();
    table.deleteRow(-1);
    i -= 1;
  } else if (Number(userPrompt)) {
    table.deleteRow(parseInt(userPrompt));
    idArray.splice(parseInt(userPrompt - 1), 1).pop();
    i -= 1;
    idArray.map((item) => {
      table.appendChild(item);
    });
    for (let j = 0; j < document.querySelectorAll(".id").length; j++) {
      document.querySelectorAll(".id")[j].innerHTML = j + 1;
    }
  }
}
