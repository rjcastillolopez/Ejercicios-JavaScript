// create check mark or cross mark
function mark(valid, id) {
   // remove previous mark
   $(`#input-${id}`).find(".symbol").remove();
   // create div element
   const div = $("<div></div>");
   div.id = "mark";
   div.addClass("symbol");
   // add new mark
   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); // for svg elements this is the only way it works
   $(svg).attr("viewBox", "0 0 100 100");
   const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
   );
   $(circle).attr("cx", "50");
   $(circle).attr("cy", "50");
   $(circle).attr("r", "50");
   const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
   $(path).attr("stroke", "white");
   $(path).attr("stroke-width", "10");
   if (valid) {
      // check mark
      $(circle).attr("fill", "#6BBE66");
      $(path).attr("d", "M 25.0 50.0 L 40.0 65.0 M 36.465 68.535 L 75.0 30.0");
   } else {
      // cross mark
      $(circle).attr("fill", "#FF4141");
      $(path).attr("d", "M 25.0 25.0 L 75.0 75.0 M 25.0 75.0 L 75.0 25.0");
   }
   // append svg to div
   $(svg).append(circle);
   $(svg).append(path);
   div.append(svg);
   // append div to container
   $(`#input-${id}`).append(div);
}

const regex = {
   username: /^[a-zA-Z0-9_]{4,16}$/,
   name: /^[a-zA-Z]{2,30}$/,
   gender: /^male$|^female$/,
   birthdate: /^\d{4}-\d{2}-\d{2}$/,
   phone: /^[9][0-9]{2}-[0-9]{6}$/,
   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
   check_password: /.*/, // dummy regex
};

// compare passwords and return true if they are equal
function comparePasswords() {
   if ($("#password").val() === "" || $("#repeat-password").val() === "") {
      return false;
   } else if ($("#password").val() === $("#repeat-password").val()) {
      return true;
   } else {
      return false;
   }
}

// reset input element (remove error message and mark)
function resetInput(id, label_color = "black", border_color = "#ccc") {
   // change label color
   $(`#label-${id}`).css("color", label_color);
   // change border style
   $(`#${id}`).css("border", `1px solid ${border_color}`);
   // remove mark if exists
   $(`#input-${id}`).find(".symbol").remove();
   // remove error message if exists
   $(`#${id}-container`).find(".err-msg").remove();
}

// validate input using a regular expression
function validateInput(id, regex, err_msg, empty_msg, border_color = "#ccc") {
   // check if input is valid
   var result = false;
   if (id === "repeat-password") {
      result = comparePasswords();
   } else {
      result = regex.test($(`#${id}`).val());
   }
   if (result) {
      resetInput(id, "black", border_color);
      mark(true, id); // add check mark
   } else {
      resetInput(id, "red", "red");
      // create error message
      const p = $("<p></p>");
      p.addClass("err-msg");
      if ($(`#${id}`).val() === "") {
         p.text(empty_msg);
      } else {
         p.text(err_msg);
         mark(false, id); // add cross mark
      }
      $(`#${id}-container`).append(p);
   }
}

// submit form when user clicks on "Enviar" button (submit event) if all inputs are valid
function submit() {
   $("form").on("submit", (e) => {
      e.preventDefault();
      // validate inputs
      validateInput(
         "username",
         regex.username,
         "El usuario tiene que tener entre 4 y 16 caracteres y solo puede contener letras, números y guiones bajos.",
         "Debe llenar este campo"
      );
      validateInput(
         "name",
         regex.name,
         "Nombre no válido",
         "Debe llenar este campo"
      );
      validateInput(
         "gender",
         regex.gender,
         "Debe seleccionar un opción.",
         null
      );
      validateInput(
         "birthdate",
         regex.birthdate,
         "La fecha no es válida.",
         "Debe ingresar una fecha"
      );
      validateInput(
         "phone",
         regex.phone,
         "Teléfono no válido. Ej: 999-999999",
         "Debe llenar este campo"
      );
      validateInput(
         "email",
         regex.email,
         "Email no válido",
         "Debe llenar este campo"
      );
      validateInput(
         "password",
         regex.password,
         "Contraseña no válida. Debe tener al menos 8 caracteres, una mayúscula y un número",
         "Debe llenar este campo",
         "skyblue"
      );
      validateInput(
         "repeat-password",
         null,
         "Las contraseñas no coinciden",
         "Debe llenar este campo",
         "skyblue"
      );
      // check if all inputs are valid (no error messages)
      let valid = true;
      $("input").map(function () {
         if ($(`#${this.id}-container`).find(".err-msg").text() !== "") {
            valid = false;
         }
      });
      if ($("select").val() === "default") {
         valid = false;
      }
      if (valid) {
         alert("Formulario enviado");
         const values = {
            username: $("#username").val(),
            name: $("#name").val(),
            gender: $("select").val(),
            birthdate: $("#birthdate").val(),
            phone: $("#phone").val(),
            email: $("#email").val(),
            password: $("#password").val(),
         };
         console.log(values);
         resetForm();
      }
   });
}

// reset input elements if they are changed
function checkInputs() {
   $("input").map(function () {
      $(`#${this.id}`).on("input", () => {
         resetInput(this.id);
      });
   });
   $("select").on("change", () => {
      resetInput("gender");
   });
}

// reset all input elements
function resetForm() {
   $("input").map(function () {
      $(`#${this.id}`).val("");
      resetInput(this.id);
   });
   $("select").val("default");
   resetInput("gender");
}

// reset form when user clicks on "Borrar" button (reset event)
function reset() {
   $("form").on("reset", () => {
      resetForm();
   });
}

// main function
function main() {
   checkInputs();
   submit();
   reset();
}

main();
