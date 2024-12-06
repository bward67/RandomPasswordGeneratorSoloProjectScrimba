const pwBtn = document.getElementById("pw-btn");
const displayBoxLeft = document.getElementById("display-box-l");

const displayBoxRight = document.getElementById("display-box-r");

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function generatePasswords() {
  let randomPassword = ""; // to reset each time
  let randomPassword2 = "";
  //to get a string of 15 random characters
  for (let i = 0; i < 15; i++) {
    randomPassword += characters[Math.ceil(Math.random() * characters.length)];
  }
  for (let i = 0; i < 15; i++) {
    randomPassword2 += characters[Math.ceil(Math.random() * characters.length)];
  }

  displayBoxLeft.textContent = randomPassword;
  displayBoxRight.textContent = randomPassword2;
}
