import Grades from "./grades.js";
import Record from "./record.js"

/*
console.log("Grades");
let g1 = new Grades(123, "Ramon Aguirre", 4, 8, 9.8, 10);
let r1 = new Record();
console.log(r1.add())

console.log(g1._getMath());
console.log(g1._getSpanish());
console.log(g1._getGeography());
console.log(g1.getAverage());

*/

class App{
    constructor(){ 
        this.btnAdd = document.querySelector("#btnAdd");
        btnAdd.addEventListener("click", this.readForm);
        this._table = document.querySelector('#tableGrades');
        this._record = new Record();
    }

    readForm = () => {
        let grades = Grades.readForm();
    
        if(grades === false){
            Swal.fire(
                'Error',
                'Debe capturar todos los campos',
                'error'
              );
              return;
        }

        let completado = this._record.add(grades);
        console.log(this._record);
        if(completado === false){
            
               swal.fire("Error", "El estudiante ya se encuentra registrado", "error");
            return; 
            
        }
        this._printInTable(grades);
            Swal.fire(
                'Bien!',
                'Calificaciones registradas',
                'success'
              )

    }

    _printInTable(grades){
        let row = this._table.insertRow(1);

        let colId = row.insertCell(0);
        let colName = row.insertCell(1);
        let colYear = row.insertCell(2);
        let colMath = row.insertCell(3);
        let colSpanish = row.insertCell(4);
        let colGeography = row.insertCell(5);
        let colAverage = row.insertCell(6);

        colId.innerHTML = grades.getId();
        colName.innerHTML = grades.getName();
        colYear.innerHTML = grades.getYear();
        colMath.innerHTML = grades.getMath();
        colSpanish.innerHTML = grades.getSpanish();
        colGeography.innerHTML = grades.getGeography();
        colAverage.innerHTML = grades.getAverage().toFixed(1);

        document.querySelector('#avgMath').innerHTML = this._record.getAvgMath();
        document.querySelector('#avgSpanish').innerHTML = this._record.getAvgSpanish();
        document.querySelector('#avgGeography').innerHTML = this._record.getAvgGeography();
        document.querySelector('#avg').innerHTML = this._record.getAvg();
    }

}

new App();