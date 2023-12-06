import { createItem, getItems, editItem } from "./api.js";

/** @typedef {import("./config.js").Item} Item */
/** @typedef {import("./config.js").ItemPayload} ItemPayload */

/**
 * @param {Item[]} items
 */
function drawTable(items) {
  /** @type {HTMLTableSectionElement} */
  const table = document.getElementById("body_table");

  // Clear all elements
  table.innerHTML = "";

  for (const item of items) {
    const row = document.createElement("tr");

    row.innerHTML = `<td>${item.subject}</td> 
    <td>${item.date}</td> 
    <td>${item.time}</td> 
    <td>${item.about}</td> 
    <td><button id="plus_button">+</button></td>
    <td>${item.person.length}/${item.participant}</td> 
    <td><button id="view_button">view</button></td>
    <td>${item.contact}</td>`;
    table.appendChild(row);

    let plusButton = row.querySelector(`#plus_button`);
    plusButton.addEventListener("click", () => {
      if (item.person.length < parseInt(item.participant)) {
        createPop(item._id);
        let popupContainer = document.getElementById(
          `popupContainer${item._id}`
        );
        popupCreatePerson(item._id);
        popupContainer.style.display = "block";
      } else {
        //alert
        alert("This Activity is Full !!");
      }
    });

    let viewButton = row.querySelector(`#view_button`);
    viewButton.addEventListener("click", () => {
      let popup = document.getElementById("view_popup");
      handleGetPerson(item._id);
      popup.classList.add("open-view_popup");
    });
  }
}

export async function fetchAndDrawTable() {
  const items = await getItems();

  drawTable(items);
}

/**
 * @param {string} id
 * @param {array} person
 */

export async function handleCreateItem() {
  /** @type {HTMLInputElement} */
  const subjectToAdd = document.getElementById("select_subject");

  /** @type {HTMLSelectElement} */
  const date = document.getElementById("date_input");
  const startTime = document.getElementById("startTime_input");
  const endTime = document.getElementById("endTime_input");
  let dateToAdd = `${date.value}`;
  let timeToAdd = `${startTime.value} - ${endTime.value}`;

  /** @type {HTMLInputElement} */
  const aboutToAdd = document.getElementById("about_input");

  /** @type {HTMLInputElement} */
  const numberOfmember = document.getElementById("numberOfmember_input");

  /** @type {HTMLInputElement} */
  const contactToAdd = document.getElementById("contact_input");

  const payload = {
    subject: subjectToAdd.value,
    date: dateToAdd,
    time: timeToAdd,
    about: aboutToAdd.value,
    participant: numberOfmember.value,
    person: [],
    contact: contactToAdd.value,
  };

  await createItem(payload);
  await fetchAndDrawTable();

  subjectToAdd.value = "";
  dateToAdd = "";
  timeToAdd = "";
  aboutToAdd.value = "";
  numberOfmember.value = "";
  contactToAdd.value = "";
}

export async function createPop(_id) {
  let div = document.createElement("div");
  div.innerHTML = `<div id="popupContainer${_id}" class="popupInput">
  <div class="popupInput-content">
      <span id="closePopup${_id}" class="closeInput">&times;</span>
      <h2 id="enterText${_id}">Enter Your Name (ㆆ_ㆆ) </h2>
      <input type="text" id="textInput${_id}">
      <button id="submitText${_id}">Submit</button>
  </div>
  </div>`;
  document.body.appendChild(div);
}

export async function popupCreatePerson(_id) {
  // Get references to the pop-up elements
  let popupContainer = document.getElementById(`popupContainer${_id}`);
  let closeButton = document.getElementById(`closePopup${_id}`);
  let textInput = document.getElementById(`textInput${_id}`);
  let submitButton = document.getElementById(`submitText${_id}`);

  // Close the pop-up when the close button is clicked
  closeButton.addEventListener("click", () => {
    popupContainer.style.display = "none";
  });

  // Handle text submission
  submitButton.addEventListener("click", () => {
    const enteredText = textInput.value;
    // เอาค่าไปใส่ใน อาเรย์
    if (enteredText != "") handleCreatePerson(enteredText, _id);
    console.log("Entered text: " + enteredText);
    // Close the pop-up
    popupContainer.style.display = "none";
    // Clear the input field
    textInput.value = "";
  });
}
/**
 @param {array} person
 */
export async function handleCreatePerson(enteredText, _id) {
  const items = await getItems();
  let item;
  for (let oitem of items) {
    if (_id === oitem._id) {
      item = oitem;
      break;
    }
  }
  let arr = item.person;
  arr.push(enteredText);
  const payload = {
    id: _id,
    subject: item.subject,
    date: item.date,
    time: item.time,
    about: item.about,
    participant: item.participant,
    person: arr,
    contact: item.contact,
  };
  console.log(payload);
  await editItem(_id, payload);

  await fetchAndDrawTable();
}

export async function popupGetPerson(idx) {
  const items = await getItems();
  handleGetPerson(items[idx - 1]._id);
}

export async function handleGetPerson(_id) {
  const items = await getItems();
  console.log(_id);
  for (const item of items) {
    if (_id === item._id) {
      console.log(item.person);
      var name = document.createElement("h4");
      name.innerText = `${item.subject} ${item.date} ${item.time}`;
      var list = document.createElement("ul");
      item.person.forEach((element) => {
        const li = document.createElement("li");
        li.innerText = element;
        list.appendChild(li);
      });
    }
  }
  let popup = document.getElementById("view_popup");
  popup.appendChild(name);
  popup.appendChild(list);
  // let button = document.createElement("button");
  // button.id = "close_view_button" ;
  // button.onclick = "closeViewButton()"
  // button.innerText = "Close";
  // //button.innerHTML =  `<button id="close_view_button" onclick="closeViewButton()">Close</button>`;
  // popup.appendChild(button);
}
