

//main

    _getAverage(type){
        type = type.toLowerCase(); 

        let sum = 0;

        this._record.forEach((g) => {
            if(type === "math"){
                sum += g._getMath();
            } else if (type === "spanish"){
                sum += g._getSpanish();
            } else if (type === "geography"){
                sum += g._getGeography();
            } else if (type === "overall"){
                sum += g._getAverage();
            } else {
                return -1;
            }
        });

        return sum / this._record.length;
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

    colId.innerHTML = grades._getId();
    colName.innerHTML = grades._getName();
    colYear.innerHTML = grades._getYear();
    colMath.innerHTML = grades._getMath();
    colSpanish.innerHTML = grades._getSpanish();
    colGeography.innerHTML = grades._getGeography();
    colAverage.innerHTML = grades.getAverage().toFixed(1);

    /*
    document.querySelector('#avgMath').tnnerHTML = this._getAverage("math").toFixed(1);
    document.querySelector('#avgSpanish').innerHTML =  this._getAverage("spanish").toFixed(1);
    document.querySelector('#avgGeography').innerHTML = this._getAverage("geography").toFixed(1);
    document.querySelector('#avg').innerHTML =  this._getAverage("overall").toFixed(1);
    */
}