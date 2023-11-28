function sayiuret() {

    
    var sayiGir = $("#sayiGir").val();
        
    document.getElementById("random2").innerHTML = Math.floor((Math.random() * 10) + 1);
    
    var randomDeger = document.getElementById("random2").innerHTML;


        if (sayiGir === randomDeger) {

            document.getElementById("result").textContent = "Sayilar Ayni KAZANDiN.";
        } else {
            document.getElementById("result").textContent = "Sayilar Farkli KAYBETTiN.";
        }
} 


