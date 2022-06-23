const letter = ['1', '2', '3'];

/* Recorro elementos con meodo común for */
for (let index = 0; index < letter.length; index++) {
  const char = letter[index];
  console.log(char);
}

/* Recorro elementos con metodo forEach */
letter.forEach((element) =>
  console.log(`El resultado de: ${element} * 2 es ${element * 2}`)
);

/* Recorrer productos y sus precios y mostrar por pantalla */

const products = [
  { tittle: 'Burger', price: 1000 },
  { tittle: 'Coffee', price: 500 },
  { tittle: 'Tarta', price: 1500 },
];

const app = document.getElementById('app');
products.forEach((product) => {
  app.innerHTML += `<li>${product.tittle} - ${product.price}</li> <hr />`;
});

/* Crear elementos tipo input donde algunos ya esten hechos y otros no */
const tasks = [
  { title: 'Comprar comida gatita', hecho: false },
  { title: 'Estudiar JS', hecho: true },
  { title: 'Almorzar', hecho: true },
  { title: 'Ver serie pendiente', hecho: false },
  { title: 'Ejercicio', hecho: true },
];

/* Desestructuración de elementos */
tasks.forEach(({ title, hecho }) => {
  const element = `
       <li>
           <input 
                   type='checkbox' 
                   id='${title}' 
                   name='${title}' 
               
                   ${hecho === true ? 'checked' : ''}
                   <label for='${title}' >${title} </label>   
       </li>`;
  app.innerHTML += `<br /><div>  ${element} <hr></div>`;
});
