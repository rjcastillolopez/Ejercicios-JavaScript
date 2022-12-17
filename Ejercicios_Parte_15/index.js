// get list of clients
async function getClients() {
   await fetch("http://localhost:3000/api/clients")
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
      })
      .catch((err) => {
         console.log(err);
      });
}

// create client
async function createClient(
   name,
   phone,
   city,
   street,
   number,
   state,
   birthdate
) {
   await fetch("http://localhost:3000/api/clients", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         name,
         phone,
         city,
         street,
         number,
         state,
         birthdate,
      }),
   })
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
      })
      .catch((err) => {
         console.log(err);
      });
}

// get client by id
async function getClientById(id) {
   await fetch(`http://localhost:3000/api/clients/${id}`)
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
      })
      .catch((err) => {
         console.log(err);
      });
}

// update client by id
async function updateClientById(
   id,
   name,
   phone,
   city,
   street,
   number,
   state,
   birthdate
) {
   await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         name,
         phone,
         city,
         street,
         number,
         state,
         birthdate,
      }),
   })
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
      })
      .catch((err) => {
         console.log(err);
      });
}

// delete client by id
async function deleteClientById(id) {
   await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: "DELETE",
   })
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
      })
      .catch((err) => {
         console.log(err);
      });
}

/* 
createClient(
   "Juan",
   "123-456-7890",
   "Bogotá",
   "Zapata",
   123,
   "Cundinamarca",
   "01-01-2000"
);
getClients();
getClientById("639cdf5236db667d2d32cf54");
updateClientById(
   "639cdf5236db667d2d32cf54",
   "Juliana Rojas",
   "123-456-7890",
   "Mexico City",
   "Concepcion",
   1230,
   "Mexico",
   "27-12-2000"
);
deleteClient("639cdf5236db667d2d32cf50"); 
*/
