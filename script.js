let container = document.getElementById("container");
createGrid();
var dob = document.getElementById("birthday");
// default the date to today's date
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0
var yyyy = today.getFullYear();
dob.value = yyyy + "-" + mm + "-" + dd;
// let age = 0;

dob.addEventListener("change", updateValue);

function updateValue() {
  removeSelected();
  let age = 0;
  age = calcAge();
  updateColors(age);
}

function calcAge() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0
  var yyyy = today.getFullYear();
  let updatedDob = dob.value;
  let age = (yyyy - updatedDob.substring(0, 4)) * 52;
  console.log(age);
  return age;
}

function createGrid() {
  for (let i = 0; i < 80; i++) {
    const year = document.createElement("DIV");
    year.classList.add("year");
    year.classList.add("year" + (i + 1));
    container.appendChild(year);
    for (let j = 0; j < 52; j++) {
      const week = document.createElement("DIV");
      week.classList.add("week");
      week.setAttribute("id", "year" + (i + 1) + "-week" + (j + 1));
      year.appendChild(week);
    }
    // console.log(year);
  }
}

function updateColors(age) {
  let counter = 0;
  for (let i = 0; i < 80; i++) {
    for (let j = 0; j < 52; j++) {
      let week = document.getElementById("year" + (i + 1) + "-week" + (j + 1));
      week.classList.add("past");
      counter++;
      if (counter > age) {
        return;
      }
    }
  }
}

function removeSelected() {
  for (let i = 0; i < 80; i++) {
    for (let j = 0; j < 52; j++) {
      let week = document.getElementById("year" + (i + 1) + "-week" + (j + 1));
      week.classList.remove("past");
    }
  }
}
