function Sistema() {
    this.usuarios = {};

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
}  
function Usuario(nick) {
    this.nick = nick;
}