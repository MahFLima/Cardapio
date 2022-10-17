const products = [
  {
    title: "WAFFLE DOCE",
    subtitle:
      "Lorem ipsum dolor site amet, adipsicing elit, sed diam nonummy nibh.",
    price: "R$37.70",
    type: "BRUNCH",
  },
  {
    title: "ARROZ DOCE",
    subtitle:
      "Lorem ipsum dolor site amet, adipsicing elit, sed diam nonummy nibh.",
    price: "R$37.70",
    type: "BRUNCH",
  },
  {
    title: "MAÇA DOCE",
    subtitle:
      "Lorem ipsum dolor site amet, adipsicing elit, sed diam nonummy nibh.",
    price: "R$37.70",
    type: "BRUNCH",
  },
  {
    title: "SUCO DE ALFACE",
    subtitle:
      "Lorem ipsum dolor site amet, adipsicing elit, sed diam nonummy nibh.",
    price: "R$37.70",
    type: "BEBIDAS",
  },
  {
    title: "VINHO FINO",
    subtitle:
      "Lorem ipsum dolor site amet, adipsicing elit, sed diam nonummy nibh.",
    price: "R$37.70",
    type: "BEBIDAS",
  },
  {
    title: "CAFÉ",
    subtitle:
      "Lorem ipsum dolor site amet, adipsicing elit, sed diam nonummy nibh.",
    price: "R$37.70",
    type: "BEBIDAS",
  },
];

const bebidas = document.querySelector("#bebidas");
const comidas = document.querySelector("#comida");

products.map((item) => {
  if (item.type === "BEBIDAS") {
    var card = document.createElement("div");
    var price = document.createElement("p");
    price.innerText = item.price;
    card.classList.add("card");
    card.classList.add("price");

    var content = document.createElement("div");
    content.classList.add("content-card");

    var title = document.createElement("span");
    title.innerText = item.title;
    var subtitle = document.createElement("p");
    subtitle.innerText = item.subtitle;

    content.appendChild(title);
    content.appendChild(subtitle);

    card.appendChild(content);
    card.appendChild(price);

    bebidas.appendChild(card);
  }
});

products.map((item) => {
  if (item.type === "BRUNCH") {
    var card = document.createElement("div");
    var price = document.createElement("p");
    price.innerText = item.price;
    card.classList.add("card");
    card.classList.add("price");

    var content = document.createElement("div");
    content.classList.add("content-card");

    var title = document.createElement("span");
    title.innerText = item.title;
    var subtitle = document.createElement("p");
    subtitle.innerText = item.subtitle;

    content.appendChild(title);
    content.appendChild(subtitle);

    card.appendChild(content);
    card.appendChild(price);

    comidas.appendChild(card);
  }
});
