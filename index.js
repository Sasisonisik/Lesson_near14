// const spis = [32, 44, 108, 99];
// spis[3] = 28;
// console.log(spis);

// const obj = {
//   fruit: "apple",
//   number: 99,
//   ar: [100, 56],
//   year: 2026,
//   me = {
//     rate: 14,
//     fav: lolo
//   }
// };

// console.log(obj.fruit);
// console.log(obj.me.lolo)

// const spi = ["Python", "is", "sosika,", "html", "super", "iriska"];

// const obj = [
//   {
//     name: "Ivan",
//     age: 20,
//     ut: "age",
//   },
//   {
//     name: "Sasha",
//     age: 14,
//     ut: "age",
//   },

//   {
//     name: "Dania",
//     age: 16,
//     ut: "age",
//   },

//   {
//     name: "JavaScript",
//     age: 10,
//     ut: "age",
//   },
// ];

// function createtd(value) {
//   const td = document.createElement("td");
//   td.textContent = value;
//   return td;
// }

// spi.forEach(function (item) {
//   const div = document.createElement("div");
//   div.textContent = item;
//   document.body.append(div);
// });

// const table = document.createElement("table");

// obj.forEach(function (item) {
//   const tr = document.createElement("tr");
//   tr.append(createtd(item.name));
//   tr.append(createtd(item.age));
//   tr.append(createtd(item.ut));
//   table.append(tr);
// });

// document.body.append(table);

const table = document.createElement("table");
table.classList.add("tab");

function createtd(item, tag = "td") {
  const td = document.createElement(tag);
  td.textContent = item;
  return td;
}

function createh2(obj) {
  const th = document.createElement("tr");
  th.append(createtd("Name", "th"));
  th.append(createtd("Height", "th"));
  th.append(createtd("Mass", "th"));
  th.append(createtd("Hair_color", "th"));
  th.append(createtd("Gender", "th"));
  return th;
}

function createraw(obj) {
  const tr = document.createElement("tr");
  tr.append(createtd(obj.name));
  tr.append(createtd(obj.height));
  tr.append(createtd(obj.mass));
  tr.append(createtd(obj.hair_color));
  tr.append(createtd(obj.gender));
  return tr;
}

async function request() {
  const data = await fetch("https://swapi.info/api/people");
  const people = await data.json();
  table.append(createh2());
  people.forEach(function (item) {
    table.append(createraw(item));
  });
  document.body.append(table);
}
request();
