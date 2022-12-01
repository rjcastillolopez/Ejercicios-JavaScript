const regex = {
   name: /^[a-zA-Z]{3,16}$/,
   lastname: /^[a-zA-Z]{3,16}$/,
   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   phone: /^[9][0-9]{2}-[0-9]{6}$/,
};

// validate input using a regular expression
function validateInput(id, regex, err_msg) {
   const input = document.getElementById(id);
   // remove previous child if exists (err msg)
   if (input.nextElementSibling) {
      input.nextElementSibling.remove();
   }
   if (input.value) {
      if (regex.test(input.value)) {
         input.classList.remove("is-invalid");
         input.classList.add("is-valid");
      } else {
         input.classList.remove("is-valid");
         input.classList.add("is-invalid");
         // create error message
         const small = document.createElement("small");
         small.classList.add("text-danger");
         small.style.fontSize = "0.8rem";
         small.textContent = err_msg;
         input.parentElement.appendChild(small);
      }
   }
}

// validate form when user clicks on submit button
function validateForm() {
   const btn = document.getElementById("send");
   btn.addEventListener("click", () => {
      validateInput(
         "name",
         regex.name,
         "El nombre debe tener entre 3 y 16 caracteres y solo puede contener letras, números y guiones bajos."
      );
      validateInput(
         "lastname",
         regex.lastname,
         "El apellido debe tener entre 3 y 16 caracteres"
      );
      validateInput("email", regex.email, "El email no es válido");
      validateInput(
         "phone",
         regex.phone,
         "El teléfono no es válido. Debe tener el formato 9XX-XXXXXX"
      );
   });
}

// check if inputs change
function changeInputs() {
   const inputs = document.querySelectorAll(["input", "textarea"]);
   inputs.forEach((input) => {
      input.addEventListener("input", () => {
         input.classList.remove("is-valid");
         input.classList.remove("is-invalid");
         // remove previous child if exists (err msg)
         if (input.nextElementSibling) {
            input.nextElementSibling.remove();
         }
      });
   });
}

// reset inputs after form is sent
function resetInputs() {
   const inputs = document.querySelectorAll(["input", "textarea"]);
   inputs.forEach((input) => {
      input.classList.remove("is-valid");
      input.classList.remove("is-invalid");
      input.value = "";
      // remove previous child if exists (err msg)
      if (input.nextElementSibling) {
         input.nextElementSibling.remove();
      }
   });
}

// submit form
function submit() {
   const form = document.querySelector("form");
   form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      const inputs = document.querySelectorAll(["input", "textarea"]);
      inputs.forEach((input) => {
         if (input.classList.contains("is-invalid")) {
            valid = false;
         }
      });
      if (valid) {
         alert("Formulario enviado correctamente");
         resetInputs();
      }
   });
}

// reset form
function reset() {
   const form = document.querySelector("form");
   form.addEventListener("reset", () => {
      resetInputs();
   });
}

function main() {
   changeInputs();
   validateForm();
   submit();
   reset();
}

main();
