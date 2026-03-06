const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    alert("Navigation vers " + this.textContent);
  });
});
