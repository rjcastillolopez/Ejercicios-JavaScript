// create check mark or cross mark
function mark(valid, id) {
   const input = document.getElementById(`input-${id}`);
   // remove previous mark
   if (input.querySelector(".symbol")) {
      input.querySelector(".symbol").remove();
   }
   // create div element
   const div = document.createElement("div");
   div.id = "mark";
   div.classList.add("symbol");
   // add new mark
   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   svg.setAttribute("viewBox", "0 0 100 100");
   const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
   );
   circle.setAttribute("cx", "50");
   circle.setAttribute("cy", "50");
   circle.setAttribute("r", "50");
   const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
   path.setAttribute("stroke", "#FFF");
   path.setAttribute("stroke-width", "10");
   if (valid) {
      // check mark
      circle.setAttribute("fill", "#6BBE66");
      path.setAttribute(
         "d",
         "M 25.0 50.0 L 40.0 65.0 M 36.465 68.535 L 75.0 30.0"
      );
   } else {
      // cross mark
      circle.setAttribute("fill", "#FF4141");
      path.setAttribute("d", "M 25.0 25.0 L 75.0 75.0 M 25.0 75.0 L 75.0 25.0");
   }
   svg.appendChild(circle);
   svg.appendChild(path);
   div.appendChild(svg);
   input.appendChild(div);
}

// reset input styles and remove marks
function resetInput(id) {
   const container = document.getElementById(`input-${id}`);
   if (container.querySelector(".symbol")) {
      // change label color
      document.getElementById(`label-${id}`).style.color = "black";
      // change border style
      document.getElementById(id).style.border = "1px solid #ccc";
      // remove mark
      container.querySelector(".symbol").remove();
      // remove error message
      const element = document.getElementById(`${id}-container`);
      if (element.querySelector(".err-msg")) {
         element.querySelector(".err-msg").remove();
      }
   }
}

// check if inputs are changed and remove marks
function checkInputs() {
   const ids = [
      "username",
      "name",
      "phone",
      "email",
      "password",
      "repeat-password",
   ];
   ids.forEach((id) => {
      const input = document.getElementById(id);
      input.addEventListener("input", () => {
         resetInput(id);
      });
   });
}

// clear inputs
function clearInputs(id_button) {
   const ids = [
      "username",
      "name",
      "phone",
      "email",
      "password",
      "repeat-password",
   ];
   ids.forEach((id) => {
      const btn = document.getElementById(id_button);
      btn.addEventListener("click", () => {
         resetInput(id);
      });
   });
}

// compare passwords and return true if they are equal
function comparePasswords() {
   const password = document.getElementById("password");
   const repeat_password = document.getElementById("repeat-password");
   if (password.value === "" || repeat_password.value === "") {
      return false;
   } else if (password.value === repeat_password.value) {
      return true;
   } else {
      return false;
   }
}

// validate input using a regular expression
function validateInput(id, regex, err_msg, border_color = false) {
   const element = document.getElementById(`${id}-container`);
   // remove previous error message
   if (element.querySelector(".err-msg")) {
      element.querySelector(".err-msg").remove();
   }
   // check if input is valid
   const value = document.getElementById(id).value;
   var result = false;
   if (id === "repeat-password") {
      result = comparePasswords();
   } else {
      result = regex.test(value);
   }
   console.log(value, result);
   if (result) {
      // change label color
      document.getElementById(`label-${id}`).style.color = "black";
      // change border style
      if (border_color) {
         document.getElementById(id).style.border = "2px solid skyblue";
      } else {
         document.getElementById(id).style.border = "1px solid #ccc";
      }
      // add check mark
      mark(true, id);
   } else {
      // change label color
      document.getElementById(`label-${id}`).style.color = "red";
      // change border style
      document.getElementById(id).style.border = "2px solid red";
      // create error message
      const p = document.createElement("p");
      p.classList.add("err-msg");
      if (value === "") {
         p.textContent = "Debe llenar este campo";
      } else {
         p.textContent = err_msg;
         // add cross mark
         mark(false, id);
      }
      element.appendChild(p);
      return false;
   }
   return true;
}

const regex = {
   username: /^[a-zA-Z0-9_]{4,16}$/,
   name: /^[a-zA-Z]{2,30}$/,
   phone: /^[9][0-9]{2}-[0-9]{6}$/,
   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
   check_password: /.*/, // dummy regex
};

// send form using a "send" button
function send() {
   const btn = document.getElementById("send");
   var valid = true;
   btn.addEventListener("click", () => {
      validateInput(
         "username",
         regex.username,
         "El usuario tiene que tener entre 4 y 16 caracteres y solo puede contener letras, números y guiones bajos."
      );
      validateInput("name", regex.name, "Nombre no válido");
      validateInput("phone", regex.phone, "Teléfono no válido. Ej: 999-999999");
      validateInput("email", regex.email, "Email no válido");
      validateInput(
         "password",
         regex.password,
         "Contraseña no válida. Debe tener al menos 8 caracteres, una mayúscula y un número",
         true
      );
      validateInput(
         "repeat-password",
         null,
         "Las contraseñas no coinciden",
         true
      );
   });
   /* if (valid) {
      clearInputs("send");
      const container = document.getElementById(`send-container`);
      const p = document.createElement("p");
      p.classList.add("send-msg");
      p.id = "send-msg";
      p.textContent = "Formulario enviado correctamente";
      container.appendChild(p);
   } */
}

// main function
function main() {
   checkInputs();
   send();
}

main();
