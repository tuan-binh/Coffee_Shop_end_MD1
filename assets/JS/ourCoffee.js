const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const thumbs = $$(".thumb");
const bodyItems = $$(".body-item");

thumbs.forEach((element, index) => {
  let info = bodyItems[index];
  element.onclick = () => {
    $(".thumb.active").classList.remove("active");
    $(".body-item.active-item").classList.remove("active-item");

    this.classList.add("active");
    info.classList.add("active-item");
  };
});
