function Sistema() {
    this.usuarios = {};
    this.obtenerUsuarios=function(){
        return this.usuarios;
    }
    this.agregarUsuario = function(nick) {
        if(!this.usuarios[nick]) {
            this.usuarios[nick] = new Usuario(nick);
        } 
    }
    this.eliminarUsuario = function(nick) {
        res=false;
        if(this.usuarios[nick]) {
            delete this.usuarios[nick];
            res=true;
        }
        return res;
    }

    this.usuarioActivo = function(nick) {
        res=false;
        if(this.usuarios[nick]) {
            res=true;
        }
        return res;
    }
    this.numeroUsuarios = function() {
        return Object.keys(this.usuarios).length;
    }
}  
function Usuario(nick) {
    this.nick = nick;
}