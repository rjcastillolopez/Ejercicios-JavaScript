let pokemons = [
   {
      id: 1,
      name: "charmander",
      type: "fire",
      base_damage: 10,
      base_hp: 12,
      speed: 30,
   },
   {
      id: 2,
      name: "squirtle",
      type: "water",
      base_damage: 9,
      base_hp: 14,
      speed: 26,
   },
   {
      id: 3,
      name: "bulbasaur",
      type: "leaf",
      base_damage: 8,
      base_hp: 16,
      speed: 26,
   },
   {
      id: 4,
      name: "pikachu",
      type: "electric",
      base_damage: 12,
      base_hp: 8,
      speed: 32,
   },
   {
      id: 5,
      name: "pidgey",
      type: "air",
      base_damage: 10,
      base_hp: 10,
      speed: 35,
   },
   {
      id: 6,
      name: "goldeen",
      type: "water",
      base_damage: 9,
      base_hp: 12,
      speed: 32,
   },
   {
      id: 7,
      name: "bellsproud",
      type: "leaf",
      base_damage: 10,
      base_hp: 12,
      speed: 30,
   },
   {
      id: 8,
      name: "magnemite",
      type: "electric",
      base_damage: 9,
      base_hp: 14,
      speed: 30,
   },
   {
      id: 9,
      name: "ponyta",
      type: "fire",
      base_damage: 12,
      base_hp: 18,
      speed: 36,
   },
   {
      id: 10,
      name: "evee",
      type: "normal",
      base_damage: 10,
      base_hp: 12,
      speed: 30,
   },
];

// 1.- Ordenar los pokemons por su base_damage de mayor a menor
console.log(pokemons.sort((a, b) => a.base_damage - b.base_damage));

// 2.- Ordenar los pokemons dependiendo del argumento que se le pase a la función: type, base_damage, base_hp, speed
function sortBy(pokemons, prop) {
   const values = ["type", "base_damage", "base_hp", "speed"];
   if (values.includes(prop)) {
      if (prop === "type") {
         return pokemons.sort((a, b) => a[prop].localeCompare(b[prop]));
      } else {
         return pokemons.sort((a, b) => a[prop] - b[prop]);
      }
   } else {
      console.log("Error: argumento no válido");
   }
}
// Ejemplo:
let sorted = sortBy(pokemons, "base_damage");
console.log(sorted);

// 3.- Filtrar los pokemons por su tipo
function filterByType(pokemons, type) {
   const values = ["fire", "water", "leaf", "electric", "air", "normal"];
   if (values.includes(type)) {
      return pokemons.filter((pokemon) => pokemon.type === type);
   } else {
      console.log("Error: argumento no válido");
   }
}
// Ejemplo:
let filtered = filterByType(pokemons, "fire");
console.log(filtered);

// 4.- Objeto pokemon Master
let pokemonMaster = {
   id: 1,
   name: "Ash",
   // created at today format dd/mm/yyyy
   created_at: new Date().toLocaleDateString(),
   pokemons: [],
};

console.log(pokemonMaster);

// 5.- Función que de manera aleatoria agrega un pokemon al atributo pokemon que no se encuentre en la lista
function addPokemon(pokemonMaster) {
   let random = Math.floor(Math.random() * pokemons.length);
   let pokemon = pokemons[random];
   if (!pokemonMaster.pokemons.includes(pokemon)) {
      pokemonMaster.pokemons.push(pokemon);
   } else {
      addPokemon(pokemonMaster);
   }
}

addPokemon(pokemonMaster);
addPokemon(pokemonMaster);
addPokemon(pokemonMaster);
addPokemon(pokemonMaster);
addPokemon(pokemonMaster);
console.log(pokemonMaster);

// 6.- Función que de manera aleatoria agregar los atributos min_damage y max_damage a cada pokemon del atributo pokemons: min_damage entre 1 y 2 y max_damage entre 3 y 5
function addDamage(pokemonMaster) {
   pokemonMaster.pokemons.forEach((pokemon) => {
      pokemon.min_damage = Math.floor(Math.random() * 2) + 1;
      pokemon.max_damage = Math.floor(Math.random() * 3) + 3;
   });
}

addDamage(pokemonMaster);
console.log(pokemonMaster);

// 7.- Función para calcular el daño de un pokemon elegido de la lista de pokemons: damage = base_damage + (aleatorio entre min_damage y max_damage)
function calculateDamage(pokemonMaster, name) {
   let pokemon = pokemonMaster.pokemons.find(
      (pokemon) => pokemon.name === name
   );
   if (pokemon) {
      let damage =
         pokemon.base_damage +
         Math.floor(
            Math.random() * (pokemon.max_damage - pokemon.min_damage + 1)
         ) +
         pokemon.min_damage;
      return damage;
   } else {
      console.log("Error: El pokemon no existe");
   }
}

// Ejemplo:
let damage = calculateDamage(pokemonMaster, "charmander");
console.log("Daño: " + damage);

// 8.- Funcion para ordenar los pokemons de manera descendente considerando base_damage + max_damage
function sortByDamage(pokemonMaster) {
   return pokemonMaster.pokemons.sort(
      (a, b) => b.base_damage + b.max_damage - (a.base_damage + a.max_damage)
   );
}

let pokemons_sorted = sortByDamage(pokemonMaster);
console.log(pokemons_sorted);
