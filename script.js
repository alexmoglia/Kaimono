window.onload = init;

function init() {
  let itemField = document.querySelector("#item");
  let quantityField = document.querySelector("#quantity");

  const add = document.querySelector("#add");
  add.addEventListener("click", updateResults);

  const undo = document.querySelector("#undo");
  undo.addEventListener("click", undoResults);

  // const email = document.querySelector("#email");
  // email.addEventListener("click", emailResults);

  const form = document.querySelector("form");
  form.addEventListener("keyup", event =>
    event.keyCode === 13 ? updateResults() : null
  );

  const typeWrapper = document.querySelector("#type-wrapper");
  typeWrapper.addEventListener("click", event =>
    processTypeClick(event.target)
  );
}

let typeValue;
function processTypeClick(target) {
  // remove background if typeValue has been assigned
  if (typeValue !== undefined) {
    document.querySelector("#" + typeValue).style.background = "white";
  }
  //  apply background and assign typeValue
  if (target.tagName === "BUTTON") {
    target.style.background = "var(--" + target.id + ")";
    typeValue = target.id;
  }
}

let counter = "0";
function updateResults() {
  itemValue = document.querySelector("#item").value;
  if (itemValue !== "") {
    // assemble Section identifier for pushing result
    section = document.querySelector("#" + typeValue + "-result");

    // check if Quantity info provided, update itemValue if so
    quantityValue = document.querySelector("#quantity").value;
    if (quantityValue) {
      itemValue += " - " + quantityValue;
    }

    // create & push result
    li = document.createElement("li");
    node = document.createTextNode(itemValue);
    li.appendChild(node);
    section.appendChild(li);

    // reset the form
    resetForm();
  }
}

function resetForm() {
  // clears the item & quantity fields
  document.querySelector("#item").value = "";
  document.querySelector("#quantity").value = "";
  // places focus in item field for quickly adding next item
  document.querySelector("#item").focus();
}

function undoResults() {
  section.removeChild(li);
}

// function emailResults() {
// emailValue = prompt("Enter your email address:");
// console.log(emailValue);
//   window.open("mailto:test@example.com");
// }
