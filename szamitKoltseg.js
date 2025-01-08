function szamitKoltseg(obj) {
    let biztositasKoltseg
    let autoTipusKoltseg 
    if(obj.autoTipus=='gazdaságos'){
        autoTipusKoltseg = 3000
    }
    else if(obj.autoTipus=='családi'){
        autoTipusKoltseg = 5000
    }
    else{
        autoTipusKoltseg = 10000
    }
    if(obj.extraBiztositas==true){
        biztositasKoltseg = 1000
    }
    else{
        biztositasKoltseg = 0
    }
    let osszeg = (autoTipusKoltseg+biztositasKoltseg) * obj.kolcsonzesiIdo
    if(obj.kolcsonzesiIdo >= 7){
        osszeg=osszeg * 0.9
    }
    return osszeg
}

/*
const kolcsonzes = {   
      kolcsonzesiIdo: 5, 
      autoTipus: "családi", 
      extraBiztositas: true,  
      osszesKoltseg: 0, 
    };

console.log(szamitKoltseg(kolcsonzes));
*/