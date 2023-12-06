import {
  fetchAndDrawTable,
  handleCreateItem,
  popupGetPerson,
} from "./table.js";
import { populateSubject } from "./member.js";
document.addEventListener("DOMContentLoaded", () => {
  fetchAndDrawTable();
  populateSubject();

  const addButton = document.querySelectorAll("#addFooter");
  addButton.forEach((button) => {
    button.addEventListener("click", () => {
      handleCreateItem();
      console.log("ok");
    });
  });

  
  //Kong Jing
  // const viewButton = document.querySelectorAll("#view_button");
  // viewButton.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     console.log("ok");
  //     var row = button.parentNode.parentNode;
  //     var rowIndex = row.rowIndex;
  //     //alert('Button is in row ' + rowIndex);
  //     popupGetPerson(rowIndex);
  //     let popup = document.getElementById("view_popup");
  //     popup.classList.add("open-view_popup");
  //   });
  // });
  // const closeviewButton = document.querySelectorAll("#close_view_button");
  // closeviewButton.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     let popup = document.getElementById("view_popup");
  //     popup.classList.remove("open-view_popup");
  //     popup.innerHTML = ` <h3>Member</h3>
  //                        <button type = "button" id = "close_view_button"  onclick="closeViewButton()" >Close</button>`;
  //     console.log("ok");
  //   });
  // });
  
});
// const closeviewButton = document.querySelectorAll("#close_view_button");
//   closeviewButton.forEach((button) => {
//     button.addEventListener("click", () => {
//       let popup = document.getElementById("view_popup");
//       popup.classList.remove("open-view_popup");
//       popup.innerHTML = ` <h3>Member</h3>
//                          <button type = "button" id = "close_view_button">Close</button>`;
//       console.log("ok");
//     });
//   });
