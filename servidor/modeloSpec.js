const modelo = require('./modelo.js'); // Importa el modelo que contiene Sistema y Usuario

describe('El sistema', function() {
  let sistema;
  beforeEach(function() {
    sistema = new modelo.Sistema(); // Usamos modelo.Sistema porque está exportado como parte del objeto modelo
  });
  
  it('inicialmente no hay usuarios', function() {
    expect(sistema.numeroUsuarios()).toEqual(0); // Verifica que el número de usuarios sea 0
  });
  
  it('puede agregar un usuario', function() {
    sistema.agregarUsuario('pepe');
    expect(sistema.numeroUsuarios()).toEqual(1); // Verifica que al agregar un usuario el total sea 1
  });
  
  it('puede eliminar un usuario', function() {
    sistema.agregarUsuario('pepe');
    sistema.eliminarUsuario('pepe');
    expect(sistema.numeroUsuarios()).toEqual(0); // Verifica que al eliminar el usuario el total vuelva a ser 0
  });
  
  it('puede obtener usuarios', function() {
    sistema.agregarUsuario('pepe');
    sistema.agregarUsuario('juan');
    expect(sistema.obtenerUsuarios()).toEqual({pepe: {nick: "pepe"}, juan: {nick:"juan"}}); // Verifica que los usuarios agregados sean los correctos
   });
  
  it('puede saber si un usuario está activo', function() {
    sistema.agregarUsuario('pepe');
    expect(sistema.usuarioActivo('pepe')).toBe(true); // Verifica que el usuario agregado está activo
  });
});
