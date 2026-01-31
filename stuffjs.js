function h(element, inner, id) {
  const NewElement = document.createElement(element)
  NewElement.id = id
  NewElement.innerHTML = inner
  document.body.appendChild(NewElement)
}

function g(id, term) {
  const element = document.getElementById(id)
  return element ? element[term] : undefined
}

function remove(id) {
  const element = document.getElementById(id)
  if (element) element.innerHTML = ''
}

function style(id, styles) {
  const element = document.getElementById(id);
  if (element) {
    for (const property in styles) {
      element.style[property] = styles[property];
    }
  }
}

function on(id, event, handler) {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener(event, handler);
  }
}
