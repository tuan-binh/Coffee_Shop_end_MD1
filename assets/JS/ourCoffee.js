let thumbs = document.querySelectorAll(".thumb");

let bodyItems = document.querySelectorAll(".body-item");

thumbs.forEach(function (e, i) {
  let tab = bodyItems[i];
  e.onclick = function () {
    let activeImage = document.querySelector(".thumb.active");
    let activeContent = document.querySelector(".body-item.action-item");
    activeImage.classList.remove("active");
    activeContent.classList.remove("action-item");

    e.classList.add("active");
    tab.classList.add("action-item");
  };
});
