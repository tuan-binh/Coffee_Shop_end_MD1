let desc = `A deliciously smooth coffee made from speciality Arabica beans from Guatemala grown in the volcanic soils of tropical valleys and beans from Cerrado Minas Gerais in Brazil.`;

let listProduct = [
  {
    name: "HOUSE ROAST DECAF",
    src: "/assets/image/products/item-1.png",
    desc: desc,
    price: 100000,
  },
  {
    name: "FAMOUS ROAST DECAF",
    src: "/assets/image/products/item-2.png",
    desc: desc,
    price: 110000,
  },
  {
    name: "CHARACTER ROAST DECAF",
    src: "/assets/image/products/item-3.png",
    desc: desc,
    price: 120000,
  },
  {
    name: "CHARACTER ROAST",
    src: "/assets/image/products/item-4.png",
    desc: desc,
    price: 130000,
  },
  {
    name: "FAMOUS ROAST",
    src: "/assets/image/products/item-5.png",
    desc: desc,
    price: 140000,
  },
  {
    name: "HOUSE ROAST",
    src: "/assets/image/products/item-6.png",
    desc: desc,
    price: 150000,
  },
];

console.log(listProduct);

let list = document.querySelector(".products-body .container");

render();
function render() {
  let html = listProduct.map((e, i) => {
    return `<div class="item">
              <img src=${e.src} alt="item 1" class="thumb">
              <h2 class="sub-title">${e.name}</h2>
              <p class="sub-desc">
                ${e.desc}
              </p>
              <div class="body">
                <p>${e.price.toLocaleString()}</p>
                <a href="#!" data-id="${i}" class="btn">Add To Cart</a>
              </div>
            </div>`;
  });
  list.innerHTML = html.join("");
}
