function Starwars(app) {

  var droids = [
    { id: 1, name: 'R2-D2', avatar: 'http://localhost:9000/imgs/r2d2.jpg' },
    { id: 2, name: 'C-3PO', avatar: 'http://localhost:9000/imgs/c3po.jpg' },
    { id: 3, name: '2-1B', avatar: 'http://localhost:9000/imgs/21b.jpg' },
    { id: 4, name: 'Probe Droid', avatar: 'http://localhost:9000/imgs/probe_droid.jpg' },
  ];

  app.get('/v0/droids', function(request, response) {
    response.json(droids);
  });

}

module.exports = Starwars;
