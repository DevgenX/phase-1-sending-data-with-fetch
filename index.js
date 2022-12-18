const submitData = (name, email) => {
  const DOM = document.querySelector("body");

  return fetch("http://localhost:3000/users", {})
    .then((response) => response.json())
    .then((data) => {
      DOM.append(data.id);
    })
    .catch((message) => {
      DOM.append(message);
    });
};
