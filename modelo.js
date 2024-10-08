function Sistema() {
    this.usuarios = {};

    this.obtenerUsuarios = function() {
        return this.usuarios;
    };

    this.agregarUsuario = function(nick) {
        let res = { "nick": -1 };
        if (!this.usuarios[nick]) {
            this.usuarios[nick] = new Usuario(nick);
            res.nick = nick;
        } else {
            console.log("El nick " + nick + " está en uso");
        }
        return res;
    };

    this.eliminarUsuario = function(nick) {
        let res = false;
        if (this.usuarios[nick]) {
            delete this.usuarios[nick];
            res = true;
        }
        return res;
    };

    this.usuarioActivo = function(nick) {
        return !!this.usuarios[nick];  // Devolver true si existe el usuario
    };

    this.numeroUsuarios = function() {
        return Object.keys(this.usuarios).length;
    };
}

function Usuario(nick) {
    this.nick = nick;
}

// Exportar la clase Sistema
module.exports = Sistema;
