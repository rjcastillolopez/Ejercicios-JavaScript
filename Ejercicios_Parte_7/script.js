import { users } from "./users.js";

// Prompts y alerts
function prompt_alerts(msg = null, prop, type, fun_val = null, msg_val = "") {
   while (true) {
      const value = msg ? prompt(msg) : prompt(`Ingrese un valor para ${prop}`);
      if (value === null) {
         // Cancelar
         return;
      } else if (value === "") {
         // Vacío
         alert(`Debe ingresar un valor`);
         continue;
      }
      if (type === "number") {
         if (isNaN(value)) {
            // No es un número
            alert(`El valor ingresado no es un número`);
            continue;
         }
      } else if (type === "date") {
         // No es una fecha
         const date = new Date(value);
         if (isNaN(date.getTime())) {
            alert(`El valor ingresado no es una fecha válida`);
            continue;
         }
      } else if (type === "string") {
         // No es un string
         if (!/^[a-zA-Z]+$/.test(value)) {
            alert(`El valor ingresado debe contener solo letras`);
            continue;
         }
      }
      if (fun_val !== null) {
         let new_value = value;
         if (type === "number") {
            new_value = parseInt(value);
         }
         if (!fun_val(new_value)) {
            alert(msg_val);
            continue;
         } else {
            return new_value;
         }
      } else {
         return value;
      }
   }
}

// Tabla de usuarios
function users_table(users) {
   const tableUsers = document.getElementById("table-users");
   tableUsers.innerHTML = ""; // Limpiar tabla
   // leer encabezados
   const keys = Object.keys(users[0]);
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
         const edad = prompt_alerts(
            null,
            prop,
            "number",
            (value) => value > 0 && value < 100,
            "La edad debe estar entre 0 y 100"
         );
         if (edad === undefined) {
            return;
         } else {
            newUser[prop] = edad;
         }
      } else if (prop === "created_at") {
         newUser[prop] = new Date().toISOString();
      } else {
         const value = prompt_alerts(null, prop, "string", null, null);
         console.log(value);
         if (value === undefined) {
            return;
         } else {
            newUser[prop] = value;
         }
      }
   }
   users.push(newUser);
   read(users);
}

// Actualizar usuarios
function update() {
   const id = prompt_alerts(
      null,
      "id",
      "number",
      (value) => value > 0,
      "Ingrese un id valido"
   );
   if (id === undefined) {
      return;
   }
   const user = users.find((user) => user.id === id);
   console.log(user);
   if (user) {
      for (const prop in user) {
         if (prop === "id" || prop === "created_at") {
            continue;
         } else if (prop === "edad") {
            const edad = prompt_alerts(
               null,
               prop,
               "number",
               (value) => value > 0 && value < 100,
               "La edad debe estar entre 0 y 100"
            );
            if (edad === undefined) {
               return;
            } else {
               user[prop] = edad;
            }
         } else if (prop === "modified_at") {
            user[prop] = new Date().toISOString();
         } else {
            const value = prompt_alerts(null, prop, "string", null, null);
            if (value === undefined) {
               return;
            } else {
               user[prop] = value;
            }
         }
      }
   } else {
      alert("Usuario no existe");
   }
   read(users);
}

// Eliminar usuario
function del() {
   const indice = prompt_alerts(
      null,
      "id",
      "number",
      (value) => value > 0,
      "Ingrese un id valido"
   );
   if (indice === undefined) {
      return;
   }
   const opt = prompt_alerts(
      "¿Esta usted seguro que desea eliminar el usuario? Si/No",
      null,
      "string",
      (value) => ["si", "no"].includes(value.toLowerCase()),
      "Ingrese Si o No"
   );
   if (opt === "si") {
      // remove user from user given the id
      const user = users.find((user) => user.id === indice);
      if (user) {
         const index = users.indexOf(user);
         users.splice(index, 1);
         alert("Usuario eliminado");
      } else {
         alert("Usuario no existe");
      }
   }
   if (opt === "no") {
      alert("No se elimino ningun usuario");
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
   const date = prompt_alerts(
      "Ingrese una fecha. Formato: yyyy-mm-dd: ",
      null,
      "date",
      null,
      null
   );
   if (date === undefined) {
      return;
   }
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
   button("Eliminar", "red", "darkred", del);
   // filter by date
   button("Filtrar", "gray", "black", filter_by_date);
}

main();
