function book(title, author, price, cover) {
  this.title = title;
  this.author = author;
  this.price = price;
  this.cover = cover;
}
const book1 = new book("The king of drugs", "Nora Barret", 20, "book1.jpeg");
const book2 = new book("Divina Commedia", "Dante", 22, "book2.jpeg");
const book3 = new book("The Little Dog", "Various", 10, "book3.jpeg");
const novita = [book1, book2, book3];
function loadPage() {
  let shoptitle = document.getElementById("shoptitle");
  shoptitle.innerHTML = "Novità di oggi";
  let bookcontainer = document.createElement("div");
  bookcontainer.setAttribute("class", "bookContainer");
  bookcontainer.setAttribute("id", "bc");
  shoptitle.append(bookcontainer);
  for (let i = 0; i < novita.length; i++) {
    let bookinfo = document.createElement("div");
    bookinfo.setAttribute("class", "bookinfo");
    bookinfo.innerHTML =
      '<img src="' +
      novita[i].cover +
      '" class="bookimg" /><br>' +
      novita[i].title +
      "<br>" +
      novita[i].author +
      "<br>" +
      novita[i].price +
      "$<br>" +
      '<a onclick=addToCart("' +
      novita[i].title.split(" ").join("") +
      '",' +
      novita[i].price +
      ') class="buy">Compra</a><br>';
    bookcontainer.append(bookinfo);
  }
}
const book4 = new book("The Night", "Franzis", 12, "book4.jpeg");
const book5 = new book("Room 312", "hawkes", 16, "book5.jpeg");
const book6 = new book("House of secrets", "Ramsey", 9, "book6.jpeg");
const horror = [book4, book5, book6];
function loadHorror() {
  let shoptitle = document.getElementById("shoptitle");
  shoptitle.innerHTML = "Horror";
  let bookcontainer = document.createElement("div");
  bookcontainer.setAttribute("class", "bookContainer");
  shoptitle.append(bookcontainer);
  for (let i = 0; i < horror.length; i++) {
    let bookinfo = document.createElement("div");
    bookinfo.setAttribute("class", "bookinfo");
    bookinfo.innerHTML =
      '<img src="' +
      horror[i].cover +
      '" class="bookimg" /><br>' +
      horror[i].title +
      "<br>" +
      horror[i].author +
      "<br>" +
      horror[i].price +
      "$<br>" +
      '<a onclick=addToCart("' +
      horror[i].title.split(" ").join("") +
      '",' +
      horror[i].price +
      ') class="buy">Compra</a><br>';
    bookcontainer.append(bookinfo);
  }
}
const book7 = new book("Spark", "Wright", 2, "book7.jpeg");
const book8 = new book("Love more than ever", "Morales", 14, "book8.jpeg");
const book9 = new book("Love of My Life", "Maxwell", 29, "book9.jpeg");
const romanzi = [book7, book8, book9];
function loadRomanzi() {
  let shoptitle = document.getElementById("shoptitle");
  shoptitle.innerHTML = "Romanzi";
  let bookcontainer = document.createElement("div");
  bookcontainer.setAttribute("class", "bookContainer");
  shoptitle.append(bookcontainer);
  for (let i = 0; i < romanzi.length; i++) {
    let bookinfo = document.createElement("div");
    bookinfo.setAttribute("class", "bookinfo");
    bookinfo.innerHTML =
      '<img src="' +
      romanzi[i].cover +
      '" class="bookimg" /><br>' +
      romanzi[i].title +
      "<br>" +
      romanzi[i].author +
      "<br>" +
      romanzi[i].price +
      "$<br>" +
      '<a onclick=addToCart("' +
      romanzi[i].title.split(" ").join("") +
      '",' +
      romanzi[i].price +
      ') class="buy">Compra</a><br>';
    bookcontainer.append(bookinfo);
  }
}
const book10 = new book("Dragon Valley", "Augustus", 21, "book10.jpeg");
const book11 = new book("Metropolis", "Mendoza", 4, "book11.jpeg");
const book12 = new book("The Tempest", "Holland", 19, "book12.jpeg");
const fantasy = [book10, book11, book12];
function loadFantasy() {
  let shoptitle = document.getElementById("shoptitle");
  shoptitle.innerHTML = "Fantasy";
  let bookcontainer = document.createElement("div");
  bookcontainer.setAttribute("class", "bookContainer");
  shoptitle.append(bookcontainer);
  for (let i = 0; i < fantasy.length; i++) {
    let bookinfo = document.createElement("div");
    bookinfo.setAttribute("class", "bookinfo");
    bookinfo.innerHTML =
      '<img src="' +
      fantasy[i].cover +
      '" class="bookimg" /><br>' +
      fantasy[i].title +
      "<br>" +
      fantasy[i].author +
      "<br>" +
      fantasy[i].price +
      "$<br>" +
      '<a onclick=addToCart("' +
      fantasy[i].title.split(" ").join("") +
      '",' +
      fantasy[i].price +
      ') class="buy">Compra</a><br>';
    bookcontainer.append(bookinfo);
  }
}
function loadAll() {
  let shoptitle = document.getElementById("shoptitle");
  shoptitle.innerHTML = "Tutti";
  let bookcontainer = document.createElement("div");
  bookcontainer.setAttribute("class", "bookContainer");
  shoptitle.append(bookcontainer);
  for (let i = 0; i < novita.length; i++) {
    let bookinfo = document.createElement("div");
    bookinfo.setAttribute("class", "bookinfo");
    bookinfo.innerHTML =
      '<img src="' +
      novita[i].cover +
      '" class="bookimg" /><br>' +
      novita[i].title +
      "<br>" +
      novita[i].author +
      "<br>" +
      novita[i].price +
      "$<br>" +
      '<a onclick=addToCart("' +
      novita[i].title.split(" ").join("") +
      '",' +
      novita[i].price +
      ') class="buy">Compra</a><br>';
    bookcontainer.append(bookinfo);
  }
  let bookcontainer1 = document.createElement("div");
  bookcontainer1.setAttribute("class", "bookContainer");
  shoptitle.append(bookcontainer1);
  for (let i = 0; i < horror.length; i++) {
    let bookinfo = document.createElement("div");
    bookinfo.setAttribute("class", "bookinfo");
    bookinfo.innerHTML =
      '<img src="' +
      horror[i].cover +
      '" class="bookimg" /><br>' +
      horror[i].title +
      "<br>" +
      horror[i].author +
      "<br>" +
      horror[i].price +
      "$<br>" +
      '<a onclick=addToCart("' +
      horror[i].title.split(" ").join("") +
      '",' +
      horror[i].price +
      ') class="buy">Compra</a><br>';
    bookcontainer1.append(bookinfo);
  }
  let bookcontainer2 = document.createElement("div");
  bookcontainer2.setAttribute("class", "bookContainer");
  shoptitle.append(bookcontainer2);
  for (let i = 0; i < romanzi.length; i++) {
    let bookinfo = document.createElement("div");
    bookinfo.setAttribute("class", "bookinfo");
    bookinfo.innerHTML =
      '<img src="' +
      romanzi[i].cover +
      '" class="bookimg" /><br>' +
      romanzi[i].title +
      "<br>" +
      romanzi[i].author +
      "<br>" +
      romanzi[i].price +
      "$<br>" +
      '<a onclick=addToCart("' +
      romanzi[i].title.split(" ").join("") +
      '",' +
      romanzi[i].price +
      ') class="buy">Compra</a><br>';
    bookcontainer2.append(bookinfo);
  }
  let bookcontainer3 = document.createElement("div");
  bookcontainer3.setAttribute("class", "bookContainer");
  shoptitle.append(bookcontainer3);
  for (let i = 0; i < fantasy.length; i++) {
    let bookinfo = document.createElement("div");
    bookinfo.setAttribute("class", "bookinfo");
    bookinfo.innerHTML =
      '<img src="' +
      fantasy[i].cover +
      '" class="bookimg" /><br>' +
      fantasy[i].title +
      "<br>" +
      fantasy[i].author +
      "<br>" +
      fantasy[i].price +
      "$<br>" +
      '<a onclick=addToCart("' +
      fantasy[i].title.split(" ").join("") +
      '",' +
      fantasy[i].price +
      ') class="buy">Compra</a><br>';
    bookcontainer3.append(bookinfo);
  }
}
var cart = [];
var totale = 0;
function addToCart(libro, prezzo) {
  if (cart.includes(libro)) {
    alert("Non puoi aggiungere nuovamente questo libro");
  } else {
    cart.push(libro);
    totale += prezzo;
    alert("Aggiunto al carrello");
  }
}
function checkCart() {
  if (cart.length == 0) {
    alert("Non hai aggiunto libri al carrello!");
  } else {
    let libriComprati = "";
    for (let i = 0; i < cart.length; i++) {
      libriComprati += cart[i] + ",";
    }
    alert(
      "Libri acquistati : " +
        libriComprati.slice(0, -1) +
        "\nTotale da pagare: " +
        totale +
        "$"
    );
  }
}
