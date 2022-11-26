let users = [
   {
      id: 1,
      nombre: "Andres",
      apellido: "Pacheco",
      edad: 38,
      profesion: "developer",
      created_at: "2022-09-26T06:25:21.118Z",
      modified_at: "",
   },
   {
      id: 2,
      nombre: "Andrea",
      apellido: "Sanchez",
      edad: 25,
      profesion: "profesor",
      created_at: "2022-04-18T14:14:32.879Z",
      modified_at: "",
   },
   {
      id: 3,
      nombre: "Julia",
      apellido: "Ochoa",
      edad: 32,
      profesion: "musico",
      created_at: "2021-12-14T11:53:38.279Z",
      modified_at: "",
   },
   {
      id: 4,
      nombre: "Samuel",
      apellido: "Martinez",
      edad: 29,
      profesion: "programador",
      created_at: "2022-01-26T03:31:15.202Z",
      modified_at: "",
   },
   {
      id: 5,
      nombre: "Roberto",
      apellido: "Mattos",
      edad: 40,
      profesion: "chef",
      created_at: "2022-07-27T02:06:22.760Z",
      modified_at: "",
   },
   {
      id: 6,
      nombre: "Mercedes",
      apellido: "Sanchez",
      edad: 35,
      profesion: "veterinario",
      created_at: "2022-05-01T22:06:35.864Z",
      modified_at: "",
   },
];

// Tabla de usuarios
function users_table(users) {
   const tableUsers = document.getElementById("table-users");
   tableUsers.innerHTML = ""; // Limpiar tabla
   // leer encabezados
   const keys = Object.keys(users[0]);
   console.log(keys);
   // crear tabla
   const table = document.createElement("table");
   table.classList.add("table");
   // crear encabezados de la tabla
   const thead = document.createElement("thead");
   table.append(thead);
   const tr = document.createElement("tr");
   thead.append(tr);
   keys.forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key;
      tr.append(th);
   });
   // crear cuerpo de la tabla
   const tbody = document.createElement("tbody");
   table.append(tbody);
   users.forEach((user) => {
      const tr = document.createElement("tr");
      tbody.append(tr);
      keys.forEach((key) => {
         const td = document.createElement("td");
         td.textContent = user[key];
         tr.append(td);
      });
   });
   tableUsers.append(table);
   const br = document.createElement("br");
   tableUsers.append(br);
}

// Funcion para leer usuarios
function read(users) {
   users_table(users);
}

// Funcion para crear usuarios
function create() {
   const newUser = {
      id: 0,
      nombre: "",
      apellido: "",
      edad: 0,
      profesion: "",
      created_at: "",
   };
   for (const prop in newUser) {
      if (prop === "id") {
         newUser[prop] = users[users.length - 1].id + 1;
      } else if (prop === "edad") {
         newUser[prop] = +prompt(`Ingrese ${[prop]} por favor: `);
      } else if (prop === "created_at") {
         newUser[prop] = new Date().toISOString();
      } else {
         newUser[prop] = prompt(`Ingrese ${[prop]} por favor: `);
      }
   }
   users.push(newUser);
   read(users);
}

// Actualizar usuarios
function update() {
   const id = +prompt("Ingrese id del usuario a actualizar");
   const user = users.find((user) => user.id === id);
   console.log(user);
   if (user) {
      for (const prop in user) {
         if (prop === "id" || prop === "created_at") {
            continue;
         } else if (prop === "edad") {
            user[prop] = +prompt(`Ingrese ${[prop]} por favor: `);
         } else if (prop === "modified_at") {
            user[prop] = new Date().toISOString();
         } else {
            user[prop] = prompt(`Ingrese ${[prop]} por favor: `);
         }
      }
   } else {
      alert("Usuario no existe");
   }
   read(users);
}

// Eliminar usuario
function del() {
   const indice = +prompt("Ingrese el id del usuario a eliminar: ");
   const seguro = prompt("Esta usted seguro? Si/No");
   if (seguro.toLowerCase() === "si") {
      users.splice(indice - 1, 1);
      alert("Usuario eliminado");
   } else if (seguro.toLowerCase() === "no") {
      alert("No se elimino ningun usuario");
   } else {
      alert("Ingrese una respuesta valida");
   }
   read(users);
}

// Ordenar por fecha
function sort_by_date(reverse = false) {
   if (reverse) {
      users.sort((a, b) => {
         const dateA = new Date(a.created_at);
         const dateB = new Date(b.created_at);
         return dateB - dateA;
      });
   } else {
      users.sort((a, b) => {
         const dateA = new Date(a.created_at);
         const dateB = new Date(b.created_at);
         return dateA - dateB;
      });
   }
   read(users);
}

// Ordenas haciendo click en encabezados.
function sort_by_headers(opt) {
   const ths = document.querySelectorAll("th");
   ths.forEach((th) => {
      th.addEventListener("click", (e) => {
         sort_by_date(opt);
         read(users);
      });
   });
}

// Filtrar por fecha. Formato: yyyy-mm-dd
function filter_by_date() {
   const date = prompt("Ingrese fecha a filtrar. Formato yyyy-mm-dd: ");
   const filtered = users.filter((user) => {
      const userDateStr = user.created_at.split("T")[0];
      return userDateStr === date;
   });
   read(filtered);
}

// Funcion para crear botones
function button(name, color_over, color_out, event, params = null) {
   const btn = document.createElement("button");
   btn.textContent = name;
   btn.classList.add("button");
   btn.style.backgroundColor = color_out;
   btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = color_over;
   });
   btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = color_out;
   });
   btn.addEventListener("click", () => {
      event(params);
   });
   document.getElementById("buttons").append(btn);
}

function main() {
   const root = document.getElementById("root");
   root.classList.add("container");
   // Agregar titulo
   const h1 = document.createElement("h1");
   h1.textContent = "CRUD";
   root.append(h1);
   // Agregar tabla
   const table = document.createElement("div");
   table.id = "table-users";
   root.append(table);
   read(users);
   sort_by_headers(true);
   // Agregar botones
   const buttons = document.createElement("div");
   buttons.classList.add("buttons-container");
   buttons.id = "buttons";
   root.append(buttons);
   // create
   button("Crear", "green", "darkgreen", create);
   // read
   button("Leer", "blue", "darkblue", read, users);
   // update
   button("Actualizar", "orange", "darkorange", update);
   // delete
   button("Borrar", "red", "darkred", del);
   // filter by date
   button("Filtrar", "gray", "black", filter_by_date);
}

main();
