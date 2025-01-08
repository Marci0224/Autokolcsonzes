const kolcsonzes = {  kolcsonzesiIdo: 5,   autoTipus: "családi",   extraBiztositas: true,   osszesKoltseg: 0, };

//Losonczi Marcell//

class SzamitKoltseget{
    constructor(kolcsonzesiIdo,autoTipus,extraBiztositas,osszesKoltseg){
        this.nap=kolcsonzesiIdo;
        this.tipus=autoTipus;
        this.biztositas=extraBiztositas;
        this.koltseg=osszesKoltseg;
    }
    autoTipus(){
        if(this.tipus=="gazdaságos"){
            return 3000;
        }
        if(this.tipus=="családi"){
            return 5000;
        }
        if(this.tipus=="luxus"){
            return 10000;
        }
    }
    vanBiztositas(){
        if(this.biztositas){
            return this.nap*1000;
        }
        else{
            return 0;
        }
    }
    fizetes(){
        if(this.nap>=7){
            this.koltseg=(this.autoTipus()*this.nap+this.vanBiztositas())*0.9;
        }
        else{
            this.koltseg=(this.autoTipus()*this.nap+this.vanBiztositas());
        }
        return this.koltseg;
    }

}