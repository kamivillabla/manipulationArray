/* Map es un método inmutable y tiene mismo números de elementos */

const num = [1, 2, 3, 4, 5, 6, 7, 8];

const elementDiv = document.getElementById('app');
/* Método con for */

const newNum = [];
for (let index = 0; index < num.length; index++) {
  const element = num[index];
  newNum.push(`${element}++`);
}

elementDiv.innerHTML = `Elemento original: ${num.join(
  ''
)}<br /> elemento cambiado con for: ${newNum.join('')}`;

/* Método map */
const newNumMap = num.map((item) => item + 5);

elementDiv.innerHTML += `<br /> elemento cambiado con map: ${newNumMap.join(
  ' '
)}`;

app.innerHTML += '<br> <h2> Lista de juegos  </h2>';

const games = [
  {
    name: 'Pokemon',
    price: 5000,
    description: 'Juego de pokemon para GameBoy advance',
  },
  {
    name: 'Golden Sun',
    price: 6000,
    description: 'Juego de aventura para GameBoy advance',
  },
];

const listGames = games.map((product) => {
  return `<li>Nombre: ${product.name}</li> <li>Precio: ${product.price} <li> Descripción: ${product.description}</li> <hr />`;
});

app.innerHTML += listGames.join('');
