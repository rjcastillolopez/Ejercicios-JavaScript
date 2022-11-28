function label(form, name, value, style) {
   var label = document.createElement("label");
   label.setAttribute("for", name);
   label.innerHTML = value;
   label.classList.add(style);
   form.appendChild(label);
}

function input(form, type, id, name, value, style) {
   var input = document.createElement("input");
   input.setAttribute("type", type);
   input.setAttribute("id", id);
   input.setAttribute("name", name);
   input.setAttribute("value", value);
   input.classList.add(style);
   form.appendChild(input);
}

function select(form, values, style) {
   // Etiqueta
   var tag = document.createElement("label");
   tag.setAttribute("for", "select");
   form.appendChild(tag);
   // Elemento select
   var select = document.createElement("select");
   select.setAttribute("id", "select");
   select.setAttribute("name", "select");
   select.classList.add("select");
   for (var i = 0; i < values.length; i++) {
      var option = document.createElement("option");
      option.setAttribute("value", values[i]);
      option.innerHTML = values[i];
      select.appendChild(option);
   }
   select.classList.add(style);
   form.appendChild(select);
}

function calculate() {
   var nombre = document.getElementById("nombre").value;
   var apellidos = document.getElementById("apellidos").value;
   var horasTrabajo = parseInt(document.getElementById("horasTrabajo").value);
   var sueldoBasico = parseInt(document.getElementById("sueldoBasico").value);
   var categoria = document.getElementById("select").value;
   var tarifa = 0;
   if (categoria == "A") {
      tarifa = 40;
   } else if (categoria == "B") {
      tarifa = 35;
   } else if (categoria == "C") {
      tarifa = 30;
   } else {
      alert("Categoria no valida");
   }
   var aniosServicio = parseInt(document.getElementById("aniosServicio").value);
   var bonificacion = 0;
   if (aniosServicio >= 1 && aniosServicio <= 3) {
      bonificacion = 0.15 * sueldoBasico;
   } else if (aniosServicio >= 4 && aniosServicio <= 7) {
      bonificacion = 0.2 * sueldoBasico;
   } else if (aniosServicio >= 8 && aniosServicio <= 12) {
      bonificacion = 0.3 * sueldoBasico;
   } else {
      bonificacion = 0.35 * sueldoBasico;
   }
   var sueldoTotal = sueldoBasico + horasTrabajo * tarifa + bonificacion;
   var div = document.createElement("div");
   div.innerHTML = ""; // clear
   div.innerHTML = `<br>Nombre: ${nombre} ${apellidos} <br>
   Bonificacion: S/ ${bonificacion.toFixed(2)} <br>
   Sueldo total: S/ ${sueldoTotal.toFixed(2)} <br>`;
   document.getElementById("form").appendChild(div);
}

function form() {
   var form = document.createElement("form");
   form.setAttribute("id", "form");
   form.setAttribute("name", "form");
   form.setAttribute("onsubmit", "calculate(); return false;");
   // Nombre
   label(form, "nombre", "Nombre:", "label");
   input(form, "text", "nombre", "nombre", "", "input");
   // Apellidos
   label(form, "apellidos", "Apellidos:", "label");
   input(form, "text", "apellidos", "apellidos", "", "input");
   // Años de servicio
   label(form, "aniosServicio", "Años de servicio:", "label");
   input(form, "number", "aniosServicio", "aniosServicio", "", "input");
   // Sueldo basico
   label(form, "sueldoBasico", "Sueldo basico:", "label");
   input(form, "text", "sueldoBasico", "sueldoBasico", "", "input");
   // Horas de trabajo
   label(form, "horasTrabajo", "Horas de trabajo:", "label");
   input(form, "number", "horasTrabajo", "horasTrabajo", "", "input");
   // Categoria
   label(form, "select", "Categoria:", "label");
   select(form, ["A", "B", "C"], "select");
   // Calcular
   var space = document.createElement("br");
   form.appendChild(space);
   input(form, "submit", "submit", "submit", "Calcular", "button");
   return form;
}

function main() {
   const root = document.getElementById("form");
   root.append(form());
}

main();
