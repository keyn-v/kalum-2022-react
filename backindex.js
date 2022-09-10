import cursosNetWorking, {cursosDevelopment} from './data/cursos';

//Variables y constantes
const nombre = 'Edwin';
const apellido = 'Tumax';
let edad = 17;

if(edad >= 18){
    console.log(`Bienvenido ${apellido} ${nombre} eres mayor de edad`);
} else {
    console.log('Bienvenido' + apellido + ' ' + nombre + ' eres menor de edad');
}

// Objetos

const persona = {
    nombres: 'Juan alberto',
    apellidos: 'Perez Mancilla',
    edad: 45 
}

const direccion = {
    ciudad: 'Guatemala',
    departamento: 'Guatemala',
    municipio: 'Mixco',
    ubicacion: {
    lat: 14.2334456,
    lng: 25.3445534
    }
}

const persona_direccion = { //concatenar objetos
    ...persona,
    ...direccion,
    telefono: 12345678,
    dpi: 123456789123
}

console.log(`Bienvenido ${persona.nombres} ${persona.apellidos} al desarrollo con react`);
console.log(JSON.stringify(persona_direccion));
console.log(persona_direccion);


// Uso de arrays

const arreglo = new Array(5);
arreglo[0] = 10;
arreglo[1] = 20;
arreglo[2] = 30;
arreglo[3] = 40;
arreglo[4] = 50;

arreglo.forEach(elemento => {
    console.log(elemento * 100);
});

const encontrado = arreglo.find(elemento => elemento === 300);

if(encontrado === undefined) {
    console.log('valor no encontrado');
} else {
    console.log(encontrado);
}

const arreglo2 = arreglo.map(elemento => { return elemento * -1});
arreglo2.push(200);
arreglo2.push(100);


arreglo2.forEach(elemento => {
    console.log(elemento);
});

const arreglo3 = [...arreglo, ...arreglo2, 234, 0];

console.table(arreglo3);

// Funciones

// sintaxis tradicional
const saludar = function(nombre){
    console.log(`Bienvenido ${nombre} al manejo de las funciones`);
}

// funciones de flecha

const saludarflecha = (nombre) => {
    console.log(`Bienvenido ${nombre} al manejo de las funciones`);
}

const saludar_version = (nombre) => console.log(`Bienvenido ${nombre} al manejo de la funcion de flecha`);

const getUser = (nombre, password) => ({user:nombre, contrasenia: password});



saludar('Edwin Tumax')
saludarflecha('Maria Jimena')
saludar_version('kevyn duarte')
console.log(getUser('kevyn duarte','Guatemala.123'));

// Desestructuracion

const personaParticular = {
    id: '123',
    nombre: 'Ximena',
    apellido: 'Mancilla',
    email: "xmancilla@gmail.com",
    password: '123456',
    phones: {
        casa: '123456',
        trabajo: '987654'
    }
}

const {email,password, phones: {casa}} = personaParticular;

console.log(`Las credenciales para autenticar son ${email} & ${password} & contacto ${casa}`);

const marvel = ['Spiderman', 'Wolverine', 'Ironman', 'Hulk'];

const [m2,,m1,] = marvel;

console.log(m1,m2);

const buscarmodulo3 = (id) => cursosNetWorking.find((element) => element.id == id);
const buscarDevCurso = (id) => cursosDevelopment.find((element) => element.id == id);

// Promesas

const buscarCurso = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const curso = buscarmodulo3(id);
            if(curso) {
                resolve(curso);
            } else {
                reject('El curso no existe');
            }
        }, 5000);
    });
}

buscarCurso(5)
    .then(response => console.log(response))
    .catch(error => console.warn(error));




console.log(buscarmodulo3(3));
console.log(buscarDevCurso(2));

const apiKey = 'FRrAOS9XIOujwKFltaTOmqYKdsdO4blo';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(response => response.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const imagen = document.createElement('img');
        imagen.src = url;
        document.body.append(imagen);
    })
    .catch(error => console.warn(error));

// METODOS ASINCRONOS 'async, await'

const getImagen = async() => {
    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await response.json();
        const {url} = data.images.original;
        const imagen = document.createElement('img');
        imagen.src = url;
        document.body.append(imagen);
    }catch(error){
        console.log(error);
    }
}

getImagen();
const activo = true;
/*let mensaje = '';
if(activo === true){
    mensaje = 'esta activo el canal';
} else {
    mensaje = 'no se encuentro activo el canal';
}

console.log(mensaje);*/

//const mensaje = (activo) ? 'Esta activo el canal': 'No se encuentra activo el canal';

const mensaje = activo && 'Esta activo el canal';

console.log(mensaje); 
