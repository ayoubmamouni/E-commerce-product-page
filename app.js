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

const elementObj = {
  elementName: "div",
  fileName: "contact",
  className: "contact-content",
  elementId: "myElementId",
};

createElement(
  elementObj.elementName,
  elementObj.fileName,
  elementObj.className,
  elementObj.elementId
);
