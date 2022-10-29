const SolrNode = require('solr-node');
const deptos = require('./deptos.json');

var client = new SolrNode({
  host: '127.0.0.1',
  port: '8983',
  core: 'mycore',
  protocol: 'http'
});

// // agregamos todos lo de deptos.json
//deptos.forEach((departamento) => {
 //  client.update(departamento, function(err, result) {
 //    if (err) {
   //   console.log(err);
  //     return;
  //  }
  //   console.log('Response:', result.responseHeader);
 //  });
 //});


 // Busquedas

 const tituloQuery = {
    //titulo: 'amoblado'
    titulo: 'a estrenar'
    //titulo: '1 habitacion'
    //titulo: '2 habitacion'
    //titulo: '3 habitacion'
 };


//const barrioQuery = {
    //barrio: 'Nueva Cordoba'
    //barrio: 'Alta Codoba'
    //barrio: 'Barrio Jardin'
//};


//const descripcionQuery = {
    //descripcion: '3 hambientes'
    //descripcion: '4 hambientes'
    //descripcion: '5 hambientes'
    //descripcion: '9 hambientes'
 //};
  
  // Build a search query var
  const searchQuery = client.query()
    .q(tituloQuery)
    .addParams({
      wt: 'json',
      indent: true
    })
    // .start(1)
    // .rows(1)
  
  client.search(searchQuery, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
  
    const response = result.response;
    console.log(response);
  
    if (response && response.docs) {
      response.docs.forEach((doc) => {
        console.log(doc);
      })
    }
  });