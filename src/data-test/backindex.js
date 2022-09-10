import { isCompositeComponent } from 'react-dom/test-utils';
import cursosNetworking, { cursosDevelopment } from './data/cursos';

//variables y contantes 
const nombre = 'Carlos';
const apellido = 'Chiguichon';
let edad = 7;

if (edad >= 18) {
    console.log(`Bienvenido ${nombre} ${apellido} eres mayor de edad`);
} else {
    console.log(`Bienvenido ${nombre} ${apellido} no eres mayor de edad`);
}

//objetos

const persona = {
    nombres: 'Carlos Guillermo',
    apellidos: 'Chiguichon Perez',
    edad: 45
}

const direccion = {
    ciudad: 'Guatemala',
    departamento: 'Guatemala',
    municipio: 'Mixco',
    ubicacion: {
        lat: 14.2334456,
        lng: 25.3456678
    }
}

const persona_direccion = {
    ...persona,
    ...direccion,
    telefono: 52370558,
    dpi: 2209905220011
}

console.log(`Bienvenido ${persona.nombres} ${persona.apellidos} al desarrollo en react`);
console.log(persona_direccion);
console.log(JSON.stringify(persona_direccion));

// Utilizacion de arrays
const arreglo = new Array(5);
arreglo[0] = 10;
arreglo[1] = 20;
arreglo[2] = 30;
arreglo[3] = 40;
arreglo[4] = 50;

arreglo.forEach(elemento => {
    console.log(elemento * 100);
});

const encontrado = arreglo.find(elemento => elemento == 300);

if (encontrado == undefined) {
    console.log('Valor no encontrado');
} else {
    console.log(encontrado);
}

const arreglo2 = arreglo.map(elemento => { return elemento * -1 });
arreglo2.push(200);
arreglo2.push(100);

arreglo2.forEach(elemento => {
    console.log(elemento);
});

const arreglo3 = [...arreglo, ...arreglo2, 234, 1111];

console.table(arreglo3);

// funciones

// Sintaxis tradicional
const saludar = function (nombre) {
    console.log(`Bienvenido ${nombre} al manejo de las funciones`);
}

// funciones de flecha
const saludar_flecha = () => {
    console.log(`Bienvenido ${nombre} al manejo de las funciones`);
}

const saludar_version = (nombre) => console.log(`Bienvenido ${nombre} al manejo de la funcion de flecha`);

const getUser = (nombre, password) => ({ user: nombre, contrasena: password });

saludar('Edwin Tumax');
saludar('Maria Ximena');
saludar_version('Carlos Chiguichon');
console.log(getUser('Juan Perez', 'Guatemala.123'));

// desestructuracion

const personaParticular = {
    id: '123345',
    nombre: 'Ximena',
    apellido: 'Mancilla',
    email: 'ximenamancilla@demo.com.gt',
    password: 'abc123',
    phones: {
        casa: '12345678',
        trabajo: '87654321'
    }
}

const { email, password, phones: { casa } } = personaParticular;
console.log(`Credenciales para autenticar son ${email} y ${password} y contacto ${casa}`);

const marvel = ['Spiderman', 'Wolverine', 'Ironman', 'Hulk'];

const [, , m1] = marvel;
console.log(m1);

const buscarModulo3 = (id) => cursosNetworking.find((elemento) => elemento.id == id);
const buscarDevCurso = (id) => cursosDevelopment.find((elemento) => elemento.id == id);

// promesas

const buscarCurso = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const curso = buscarModulo3(id);
            if (curso) {
                resolve(curso);
            } else {
                reject('El curso no existe');
            }
        }, 5000)
    })
}

buscarCurso(3)
    .then(response => console.log(response))
    .catch(error => console.warn(error));

console.log(buscarModulo3(3));

console.log(buscarDevCurso(2));


const apiKey = 'TxoHcXtHnXpO9XTDISHkkoArbfFp2E8L';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


peticion
    .then(response => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const imagen = document.createElement('img');
        imagen.src = url;
        document.body.append(imagen);
    })
    .catch(error => console.warn(error));

// metodos asincronos async, await

const getImagen = async () => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();
        const { url } = data.images.original;
        const imagen = document.createElement('img');
        imagen.src = url;
        document.body.append(imagen);
    } catch (error) {
        console.log(error);
    }
}

getImagen();

const activo = true;

/*let mensaje = '';
if (activo === true){
    mensaje = 'Esta activo el canal';
} else {
    mensaje = 'No se encuentra activo el canal';
}
console.log(mensaje);*/

//const mensaje = (activo) ? 'Esta activo el canal': 'No se encuentra activo el canal';

const mensaje = activo && 'Esta activo el canal';

console.log(mensaje);