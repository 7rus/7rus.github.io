// Compiles a node list of indiviual lines inside text blocks
var lines = document.querySelectorAll(".text-line");

// Compiles a node list of elements appended to the ends of lines
var appendages = document.querySelectorAll(".append");

// Wraps each character of a string inside a `<span>` element
var wrapCharacters = function(lines) {
  return lines.forEach(function(line) {
    var characters = line.innerHTML.split("");
    var wrappedCharacters = characters
      .map(function(character) {
        if (character === " ") {
          return '<span class="text-line">&nbsp;</span>';
        }
        return '<span class="text-line">' + character + "</span>";
      })
      .join("");
    return (line.innerHTML = wrappedCharacters);
  });
};

// Sets an element’s font size based on its previous sibling
var useSiblingFontSize = function(elem) {
  elem.style.fontSize = elem.previousSibling.style.fontSize;
};

// Measures the length of each line and sets its font size accordingly
var setFontSize = function(elems) {
  return elems.forEach(function(elem) {
    if (!elem.classList.contains("append")) {
      return (elem.style.fontSize = 120 / elem.innerHTML.length + "vw");
    }
    return useSiblingFontSize(elem);
  });
};

var formatTextBlocks = function() {
  setFontSize(lines);
  setFontSize(appendages);
  wrapCharacters(lines);
};

formatTextBlocks();
