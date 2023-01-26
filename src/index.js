//URL API
const url = "https://platzi-avo.vercel.app/api/avo";


/*Web API Fetch

La utilizamos para traer recursos desde cualquier otro sitio web

Lo unico que tenemos que pasarle es nuestra url

1. Nos conectaremos al servidor

*/

window
   .fetch(url)
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
       const imagen = document.createElement('img');
   
       const titulo = document.createElement('h2');
      
       const precio = document.createElement('div');
     
   // cremos el contenedor donde vamos a poner nuestros elementos

       const container = document.createElement('div');

   /*agregamos los elementos a un contenedor
   
       container.appendChild(imagen);
       container.appendChild(titulo);
       container.appendChild(precio);
   
   */

       container.append(imagen,titulo,precio);
       
   //agregamos el contenedor en nuestro body
       //document.body.appendChild(container);
       todosLosItems.push(container);
       
           console.log(item.name);
           
       });

       document.body.append(...todosLosItems)

   });

/*RESUMEN: NOS CONECTAMOS A UNA API QUE ES UN PUENTE CON LA INFORMACION 
 DE UN SERVIDOR Y ESE SERVIDOR NOS DEVUELVE ESA INFORMACION, Y UTILIZAMOS
 UN CICLO POR CADA UNO DE LOS ELEMENTOS QUE NOS DEVUELVE ESE SERVIDOR
 CREAMOS NODOS Y SE LOS AGREGAMOS AL FINAL A NUESTRO HTML*/

/*RETO PARA MEJORAR ESTE CODIGO  Y ES HACERLO CON ASYNC Y AWAIT EN VES 
 DE PROMESAS */