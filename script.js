document.addEventListener("keydown", (event) => {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    fillBar(String.fromCharCode(event.keyCode).toUpperCase());
  }
});

function fillBar(char) {
  let entries = document.querySelector("#attempt").children;
  let index = [...entries].findIndex((box) => box.value === "");
  if (index != -1) entries[index].value = char;
}

function submit() {
  let entries = document.querySelector("#attempt").children;
  let index = [...entries].findIndex((box) => box.value === "");
  if (index != -1) {
    alert("Please enter a complete word");
  } else {
    let chars = [...entries].map((box) => box.value);
    chars.forEach((char) => {
      document.getElementById(char.toLowerCase()).style.backgroundColor =
        "#756769";
    });
  }
}

function back() {
  let entries = document.querySelector("#attempt").children;
  let index = [...entries].findIndex((box) => box.value === "");
  entries[index != -1 ? index - 1 : 4].value = "";
}
