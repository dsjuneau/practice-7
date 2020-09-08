document.addEventListener("click", (e) => {
  let num = e.target.id.split("").pop();
  document.getElementById("a-" + num).style.visibility = "visible";
});
