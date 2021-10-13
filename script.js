const fonts = [
  "Arial",
  "Arial Black",
  "Verdana",
  "Tahoma",
  "Trebuchet MS",
  "Impact",
  "Times New Roman",
  "Didot",
  "Georgia",
  "American Typewriter",
  "Andalé Mono",
  "Courier",
  "Lucida Console",
  "Monaco",
  "Bradley Hand",
  "Brush Script MT",
  "Luminari",
  "Comic Sans MS",
];

const colors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

// Random Color API
// https://www.colourlovers.com/api/colors/random&format=json

// Add Javascript Here

// Random Color API
// https://www.colourlovers.com/api/colors/random&format=json

// Add Javascript Here

fonts.forEach((font) => {
  let fontSelection = document.querySelector("#font-selection");
  let option = document.createElement("option");
  option.value = font;
  option.textContent = font;
  fontSelection.append(option);
});

colors.forEach((color) => {
  let colorSelection = document.querySelector("#color-selection");
  let option = document.createElement("option");
  option.value = color;
  option.textContent = color;
  colorSelection.append(option);
});

let textInput = document.querySelector("#text-input");

textInput.addEventListener("input", (event) => {
  let preview = document.querySelector("#preview-placeholder");
  let fontSelection = document.querySelector("#font-selection");
  let colorSelection = document.querySelector("#color-selection");

  preview.style.fontFamily = fontSelection.value;
  preview.style.color = colorSelection.value;
  preview.textContent = event.target.value;
});

let fontSelection = document.querySelector("#font-selection");
fontSelection.addEventListener("change", (event) => {
  let preview = document.querySelector("#preview-placeholder");
  preview.style.fontFamily = event.target.value;
});

let colorSelection = document.querySelector("#color-selection");
colorSelection.addEventListener("change", (event) => {
  let preview = document.querySelector("#preview-placeholder");
  const color = event.target.value;
  if (color === "random") {
    fetch("https://www.colourlovers.com/api/colors/random&format=json")
      .then((response) => response.json())
      .then((colors) => (preview.style.color = "#" + colors[0].hex));
  } else {
    preview.style.color = event.target.value;
  }
});

let button = document.querySelector("#save-button");

button.addEventListener("click", (event) => {
  let textInput = document.querySelector("#text-input");
  let fontSelection = document.querySelector("#font-selection");
  let colorSelection = document.querySelector("#color-selection");

  let li = document.createElement("li");

  li.textContent = textInput.value;
  li.style.fontFamily = fontSelection.value;
  li.style.color = colorSelection.value;

  let list = document.querySelector("#saved-list ul");
  list.append(li);
});
