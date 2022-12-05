class Alumno {
   constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
      this._codigo = codigo;
      this._nombre = nombre;
      this._nota1 = nota1;
      this._nota2 = nota2;
      this._nota3 = nota3;
      this._nota4 = nota4;
   }

   // Setters
   set codigo(codigo) {
      this._codigo = codigo;
   }
   set nombre(nombre) {
      this._nombre = nombre;
   }
   set notas(notas) {
      this._nota1 = notas[0];
      this._nota2 = notas[1];
      this._nota3 = notas[2];
      this._nota4 = notas[3];
   }

   // Getters
   get codigo() {
      return this._codigo;
   }
   get nombre() {
      return this._nombre;
   }
   get notas() {
      return [this._nota1, this._nota2, this._nota3, this._nota4];
   }

   // Métodos

   // Método para calcular el promedio de las notas
   promedio = function () {
      return (
         this._nota1 * 0.15 +
         this._nota2 * 0.2 +
         this._nota3 * 0.25 +
         this._nota4 * 0.4
      ).toFixed(2);
   };

   // Método para mostrar la condición del alumno
   condicion = function () {
      if (this.promedio() >= 12) {
         return "Aprobado";
      } else {
         return "Desaprobado";
      }
   };

   // Metodo para mostrar los datos del alumno
   mostrar = function () {
      let html = `
      <p><b>Código:</b> ${this._codigo}</p>
      <p><b>Nombre:</b> ${this._nombre}</p>
      <p><b>Notas:</b> ${this._nota1}, ${this._nota2}, ${this._nota3}, ${this._nota4}</p>
      `;
      return html;
   };
}

function render(alumno) {
   function Obsequiar(promedio) {
      if (promedio >= 17) {
         return true;
      } else {
         return false;
      }
   }
   let promedio = alumno.promedio();
   let condicion = alumno.condicion();
   let obsequio = Obsequiar(promedio);
   const root = document.getElementById("root");
   const child = document.createElement("div");
   child.innerHTML = alumno.mostrar();
   child.innerHTML += `<p><b>Promedio:</b> ${promedio}</p>`;
   if (condicion == "Aprobado") {
      child.innerHTML += `<p><b>Condición:</b> <span style="color: blue">${condicion}</span></p>`;
   } else {
      child.innerHTML += `<p><b>Condición:</b> <span style="color: red">${condicion}</span></p>`;
   }
   if (obsequio) {
      child.innerHTML += `<p style="color: green">Obsequio Mochila</p>`;
   } else {
      child.innerHTML += `<p style="color: red">Sin obsequio</p>`;
   }
   child.innerHTML += `<br>`;
   root.appendChild(child);
}

// Ejemplos
let alumno1 = new Alumno();
alumno1.codigo = 1;
alumno1.nombre = "Juan";
alumno1.notas = [15, 16, 17, 18];
render(alumno1);

let alumno2 = new Alumno(2, "Pedro", 10, 11, 12, 13);
render(alumno2);

let alumno4 = new Alumno(4, "Ana", 18, 19, 20, 21);
render(alumno4);

let alumno3 = new Alumno(3, "Maria", 14, 15, 16, 17);
render(alumno3);
