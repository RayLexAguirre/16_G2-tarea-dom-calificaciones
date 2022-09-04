export default class Grades{
    constructor(id, name, year, math, spanish, geography){
        this._id = id;
        this._name = name.toUpperCase(); 
        this._year = year;
        this._math = this._condicionesMath(math);
        this._spanish = this._condicionesSpanish(spanish);
        this._geography = this._condicionesGeography(geography);
    }

    getId(){
        return this._id;
    }

    getName(){
        return this._name;
    }

    getYear(){
        return this._year;
    }

    getMath() {
        return this._math;
    }

    getSpanish() {
        return this._spanish;
    }

    getGeography() {
        return this._geography;
    }

    _condicionesMath(math){
        if(math > 10 || math < 0){
              return false;
        } else {
            return math
        } 
    }

    _condicionesSpanish(spanish){
        if(spanish > 10 || spanish < 0){
              return false;
        } else {
            return spanish
        } 
    }

    _condicionesGeography(geography){ 
        if(geography > 10 || geography < 0){
              return false;
        } else {
            return geography
        } 
    }

    getAverage(){
        let suma =this._math + this._spanish + this._geography;

        let calificacion = suma / 3
        
        return calificacion;
    }

    static readForm(){
        let inpId = document.querySelector("#id");
        let inpName = document.querySelector("#name");
        let inpYear = document.querySelector("#year");
        let inpMath = document.querySelector("#math");
        let inpSpanish = document.querySelector("#spanish");
        let inpGeography = document.querySelector("#geography");

        let id = inpId.value;
        let name = inpName.value;
        let year = inpYear.value;
        let math = Number(inpMath.value);
        let spanish = Number(inpSpanish.value);
        let geography = Number(inpGeography.value);
 
        if(id && name && year && math && spanish && geography){
            let students = new Grades(id, name, year, math, spanish, geography);

            inpId.value = '';
            inpName.value = '';
            inpYear.value = '';
            inpMath.value = '';
            inpSpanish.value = '';
            inpGeography.value = '';

            return students;

        } 

        Swal.fire(
            'Error',
            'Todos los campos son requeridos',
            'error'
          );
          return false;
    }
}