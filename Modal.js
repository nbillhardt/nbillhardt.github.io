var modal = document.getElementById("myModal");

var contact = document.getElementById("education");

var span = document.getElementsByClassName("close")[0];

contact.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
