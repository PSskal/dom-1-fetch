//URL API
const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app")

/*Web API Fetch

La utilizamos para traer recursos desde cualquier otro sitio web

Lo unico que tenemos que pasarle es nuestra url

1. Nos conectaremos al servidor

*/

window
   .fetch(`${baseUrl}/api/avo`)
/*2. Procesar la respuesta y despues la convertimos en JSON
   Fetch es algo que nos devuelve una promesa asi que
   trabajaremos con promesas para obtener la respuesta
   y transformarla en JSON

*/
   .then(respuesta => respuesta.json())

/*3.
Luego de que convirtamos la respuesta en JSON lo que obtenemos
ahora es informacion y la obtenemos concatenando otra promesa


Cuando tengamos el JSON  tendremos esa informacion que
nos servira para renderizar esa info en nuestro navegador*/
   .then(responseJson =>{

       const todosLosItems = [];
       /*recorremos cada uno de los elementos que estan en arrays
       con un forEach
       
       */

       responseJson.data.forEach(item => {
       /*atraves del parametro de la funcion del forEach accedemos
       a los elementos de la respuesta json*/

   //creamos nuestros elementos
       const image = document.createElement('img');
       image.src = `${baseUrl}${item.image}`

   
       const tittle = document.createElement('h2');
       tittle.textContent = item.name
       tittle.className = "text-lg"
      
       const price = document.createElement('div');
       price.textContent = item.price   
       price.className = "text-gray-400"
     
   // cremos el contenedor donde vamos a poner nuestros elementos

       const container = document.createElement('div');

   /*agregamos los elementos a un contenedor
   
       container.appendChild(imagen);
       container.appendChild(titulo);
       container.appendChild(precio);
   
   */

       container.append(image,tittle,price);
       
   //agregamos el contenedor en nuestro body
       //document.body.appendChild(container);
       todosLosItems.push(container);
       
           console.log(item.name);
           
       });

       appNode.append(...todosLosItems)

   });

/*RESUMEN: NOS CONECTAMOS A UNA API QUE ES UN PUENTE CON LA INFORMACION 
 DE UN SERVIDOR Y ESE SERVIDOR NOS DEVUELVE ESA INFORMACION, Y UTILIZAMOS
 UN CICLO POR CADA UNO DE LOS ELEMENTOS QUE NOS DEVUELVE ESE SERVIDOR
 CREAMOS NODOS Y SE LOS AGREGAMOS AL FINAL A NUESTRO HTML*/

/*RETO PARA MEJORAR ESTE CODIGO  Y ES HACERLO CON ASYNC Y AWAIT EN VES 
 DE PROMESAS */
 