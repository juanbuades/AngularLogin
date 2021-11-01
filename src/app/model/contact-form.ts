export class ContactForm {
    private _nombre: string;
    private _apellido: string;
    private _telefono: string;
    private _correo: string;
    private _direccion: string;
    private _localidad: string;
    private _provincia: string;
    private _contrasena: string;
    private _confirmContrasena: string;
    private _condiciones: boolean;

constructor(nombre: string, apellido: string, telefono: string, correo: string, 
    direccion: string, localidad: string, provincia: string, contrasena: string,
    confirmContrasena: string, condiciones: boolean) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this._correo = correo;
        this._direccion = direccion;
        this._localidad = localidad;
        this._provincia = provincia;
        this._contrasena = contrasena;
        this._confirmContrasena = confirmContrasena;
        this._condiciones = condiciones;
    }

    get nombre():string{
        return this._nombre;
    }
    set nombre(value:string){
        this._nombre = value 
    }

    get apellido():string{
        return this._apellido;
    }
    set apellido(value:string){
        this._apellido = value 

    }get telefono():string{
        return this._telefono;
    }
    set telefono(value:string){
        this._telefono = value 

    }get correo():string{
        return this._correo;
    }
    set correo(value:string){
        this._correo = value 

    }get direccion():string{
        return this._direccion;
    }
    set direccion(value:string){
        this._direccion = value 

    }
    get localidad():string{
        return this._localidad;
    }
    set localidad(value:string){
        this._localidad = value 

    }
    get provincia():string{
        return this._provincia;
    }
    set provincia(value:string){
        this._provincia = value 

    }
    get contrasena():string{
        return this._contrasena;
    }
    set contrasena(value:string){
        this._contrasena = value 
    }
    get confirmContrasena():string{
        return this._confirmContrasena;
    }
    set confirmContrasena(value:string){
        this._confirmContrasena = value 
    }
    get condiciones():boolean{
        return this._condiciones;
    }
    set condiciones(value:boolean){
        this._condiciones = value 
}
}