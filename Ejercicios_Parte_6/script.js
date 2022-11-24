// 1.- Función para convertir capitalizar una cadena de caracteres
function capitalizar(cadena) {
   let arr = cadena.split(" ");
   let res = "";
   for (const index in arr) {
      res += arr[index].charAt(0).toUpperCase() + arr[index].slice(1) + " ";
   }
   return res;
}

console.log(capitalizar("hola a todos"));

// 2.- Función para verificar si los atributos de un objeto esta completos
function verify_object(object) {
   for (const key in object) {
      if (object[key] === "") {
         return true;
      }
   }
   return false;
}

console.log(verify_object({ nombre: "Juan", apellido: "", edad: 20 }));
console.log(verify_object({ nombre: "", apellido: "Perez", edad: "" }));
console.log(verify_object({ nombre: "Juan", apellido: "Perez", edad: 20 }));

// 3.- Función que muestra un prompt para completar los atributos vacios de un objeto
function complete_object(object) {
   for (const key in object) {
      if (object[key] === "") {
         object[key] = prompt(`El campo ${key} esta vacio, ingrese un valor`);
      }
   }
   return object;
}

let obj = { nombre: "Juan", apellido: "", edad: 20 };
obj = complete_object(obj);
console.log(obj);

// 4.-
let users = [
   { nombre: "", apellido: "Pacheco", edad: 38, profesion: "" },
   { nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor" },
   { nombre: "Julia", apellido: "", edad: 32, profesion: "musico" },
   { nombre: "", apellido: "Martinez", edad: 29, profesion: "programador" },
   { nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "" },
   {
      nombre: "Mercedes",
      apellido: "Sanchez",
      edad: 35,
      profesion: "veterinario",
   },
];

for (const index in users) {
   users[index] = complete_object(users[index]);
}

// 5.- Función para ordenar los usuarios por edad
function sort_users(users) {
   users.sort((a, b) => {
      return a.edad - b.edad;
   });
   return users;
}

console.log(sort_users(users));

let users2 = [
   { nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer" },
   { nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor" },
   { nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico" },
   {
      nombre: "Samuel",
      apellido: "Martinez",
      edad: 29,
      profesion: "programador",
   },
   { nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef" },
   {
      nombre: "Mercedes",
      apellido: "Sanchez",
      edad: 35,
      profesion: "veterinario",
   },
];

// 6.- Mostrar en el navegador el objeto de usuarios2
function show_users(users) {
   let res = "";
   for (const index in users) {
      res += `${users[index].nombre} ${users[index].apellido} tiene ${users[index].edad} años y es ${users[index].profesion}<br>`;
   }
   document.write(res);
}

show_users(users2);

// 7.- Ordenar la lista de usuarios de acuerdo a un atributo
function sort_users_by_attribute(users, attribute) {
   users.sort((a, b) => {
      if (typeof a[attribute] === "number") {
         return a[attribute] - b[attribute];
      } else {
         return a[attribute].localeCompare(b[attribute]);
      }
   });
   return users;
}

// 8.- Crear un botón Aceptar que cuando haga se haga click mande una alerta que diga "De acuerdo!"
function create_button() {
   let btn = document.createElement("button");
   btn.textContent = "Aceptar";
   btn.addEventListener("click", () => {
      alert("De acuerdo!");
   });
   document.body.appendChild(btn);
}

create_button();

// 9.- Crear un botón que desaparezca cuando el usuario pase encima
function create_button2() {
   let btn = document.createElement("button");
   btn.textContent = "Aceptar";
   btn.addEventListener("mouseover", () => {
      btn.style.display = "none";
   });
   document.body.appendChild(btn);
}

create_button2();
