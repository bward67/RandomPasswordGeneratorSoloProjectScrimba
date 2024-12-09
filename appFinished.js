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
  //we want to put a string of random characters into the display boxes
  //first we want to create an empty string so that it clears/resets each time we click the btn
  let randomPassword = "";
  let randomPassword2 = "";
  //then we use a for let loop to get 15 instances of a different character from the array
  for (let i = 0; i < 15; i++) {
    randomPassword += characters[Math.ceil(Math.random() * characters.length)];
    //so the first time we loop through :
    //i is 0 & 1 is < 15 so we run the code which is add a character from the characters array at a random index and ADD it to the randomPassword string and we add 1 to i
    //so second time we loop through:
    //i is 1 & 1 is < 15 so we run the code which is add a character from the characters array at a random index and ADD it to the randomPassword string and we add 1 to it
    //! we must not create a variable called randomIndex and use it as then we will generate the SAME character each time
  }
  displayBoxLeft.textContent = randomPassword;

  //then we do the exact same for the display box on the right
  for (let i = 0; i < 15; i++) {
    randomPassword2 += characters[Math.ceil(Math.random() * characters.length)];
  }

  displayBoxRight.textContent = randomPassword2;
}
