async function GetComponent(element, fileName) {
  try {
    let response = await fetch(`/components/${fileName}.html`);
    const htmlFile = await response.text();
    element.innerHTML = htmlFile;
  } catch (err) {
    console.log("Fetch error: " + err);
  }
}

function createElement(element, fileName, className, elementId) {
  const htmlElement = document.createElement(element);
  className && htmlElement.classList.add(className);
  if (elementId) htmlElement.id = elementId;
  document.getElementById("app").append(htmlElement);
  if (className) {
    GetComponent(document.querySelector(`.${className}`), fileName);
  } else {
    GetComponent(document.querySelector(htmlElement), fileName);
  }
}

//Create a nav
const navElement = {
  elementName: "nav",
  fileName: "nav",
  className: "nav",
  elementId: "nav",
};
createElement(
  navElement.elementName,
  navElement.fileName,
  navElement.className,
  navElement.elementId
);
//create a main
const main = {
  elementName: "main",
  fileName: "mainContent",
  className: "main",
  elementId: "",
};
createElement(main.elementName, main.fileName, main.className, main.elementId);
