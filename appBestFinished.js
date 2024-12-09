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

const generatePasswords = () => {
  let password1 = "";
  let password2 = "";
  //we need 2 for loops - 1 for each display area
  for (let i = 0; i < 15; i++) {
    // console.log(i); // i get 0 to 14 printed out separately
    //but I want 15 random characters from the characters array
    // password1 += characters[i]
    //console.log(password1); // I get the first 15 characters BUT I want to get a random character each time NOT the first 15 from the characters array - so we must change [i] to be a randomNumber
    password1 += characters[Math.ceil(Math.random() * characters.length)];
  }
  //console.log(password1);
  displayBoxLeft.textContent = password1;

  for (let i = 0; i < 15; i++) {
    password2 += characters[Math.ceil(Math.random() * characters.length)];
  }
  // console.log(password2);
  displayBoxRight.textContent = password2;
};
