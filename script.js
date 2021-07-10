const destiny = document.getElementById("body");
const section = document.createElement("section");
const textarea = document.createElement("textarea");
textarea.id = "textInput";
textarea.setAttribute("value", "");
const button = document.createElement("button");
const textButton = document.createTextNode("count frequencies");
const clickButton = document.getElementById("countButton");

const lettersDiv = document.createElement("div");
lettersDiv.id = "lettersDiv";
const wordsDiv = document.createElement("div");
wordsDiv.id = "wordsDiv";

destiny.appendChild(section);
section.appendChild(textarea);
section.appendChild(button);
section.appendChild(lettersDiv);
section.appendChild(wordsDiv);
textarea.setAttribute("rows", 15);
textarea.setAttribute("col", 60);
button.setAttribute("style", "display:block");

button.innerText = "count frequencies";
let typedText = "";
const letterCounts = {};
button.addEventListener("click", function () {
  typedText = document.getElementById("textInput").value;
  for (let i = 0; i < typedText.length; i++) {
    let currentLetter = typedText[i].toLowerCase();
    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;
    }
  }
  letras();
  word();
});
////////// letras    ///////////////////////77
function letras() {
  for (let letter in letterCounts) {
    const span = document.createElement("span");
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent;
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span);
  }
}
////////////// palabras ///////////////////7777

function word() {
  let palavras = {};
  let words = [];
  words = typedText.split(/\s/);
  //  for (let palavra in words) {
  for (let i = 0; i < words.length; i++) {
    if (palavras[words[i]] === undefined) {
      palavras[words[i]] = 1;
    } else {
      palavras[words[i]]++;
      /*
       */
    }
  }
  const span = document.createElement("span");
  const textContent = `"${JSON.stringify(palavras)}",`;
  span.innerText = textContent;
  const contPalavras = document.getElementById("wordsDiv");
  contPalavras.appendChild(span);
  console.log(palavras); //words[word]++;
}
s
