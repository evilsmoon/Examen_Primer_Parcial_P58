const argv   = require('./config/yargs').argv;
const  {mostrar} = require('./buscador/buscar');

const  command = argv._[0];

switch(command){
    case 'mostrar':
        mostrar(argv.country, argv.year,argv.file).catch(resp=>{
            console.log(resp);
        });
        break;
    default:
        console.log('Error');

}