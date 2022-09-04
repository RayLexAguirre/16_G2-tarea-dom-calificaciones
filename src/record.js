export default class Record{
 
    constructor(){
        this._record = new Array();
    }
 
    getAvgMath(){
        let sum = 0;

        for(let i = 0; i < this._record.length; i++){
            sum = sum + this._record[i].getMath();
        }

        return sum / this._record.length;
    }

    getAvgSpanish(){
        let sum = 0;

        for(let i = 0; i < this._record.length; i++){
            sum = sum + this._record[i].getSpanish();
        }

        return sum / this._record.length;
    }

    getAvgGeography(){
        let sum = 0;

        for(let i = 0; i < this._record.length; i++){
            sum = sum + this._record[i].getGeography();
        }

        return sum / this._record.length;
    }

    getAvg(){
        let sum = 0;

        for(let i = 0; i < this._record.length; i++){
            sum = sum + this._record[i].getAverage();
        }

        return sum / this._record.length;
    }

    add(grades){
        let vec = this._findGrades(grades);

        if(vec >= 0){
            return false;
        }
 
        this._record.push(grades);
        console.log(this._record)

        return true;
    }

    _findGrades(grades){
        let vec = this._record.findIndex( (p) => {
            if(p.getId() === grades.getId()){
                return true;
            } else {
                return false;
            }
        });

        return vec;
    }
}