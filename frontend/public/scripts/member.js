import { SUBJECT } from "./config.js";

export function populateSubject() {
  // /** @type {HTMLUListElement} */

  /** @type {HTMLSelectElement} */
  const subjectSelect = document.getElementById("select_subject");

  SUBJECT.forEach((subject) => {
    const option = document.createElement("option");
    option.value = option.textContent = subject;
    subjectSelect.appendChild(option);
  });
  console.log("ok");
}
