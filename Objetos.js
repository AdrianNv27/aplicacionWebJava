const persona = {
    nombre: 'Adrian',
    edad: 19,
    genero: 'masculino',
    correo: 'Adriananv@gmail.com',
    tipoSangre: 'A+',
    Estadocivil: 'Soltero'
}
const {nombre,edad,genero,correo,tipoSangre,Estadocivil} = persona;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años de edad, soy de genero ${genero}, mi 
correo escolar es ${correo} y mi tipo de sangre es ${tipoSangre}, actualmente soy ${Estadocivil} `);