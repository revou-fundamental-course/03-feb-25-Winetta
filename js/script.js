//File JS








function konversi(event) {
    event.preventDefault();
    var celsius = document.getElementById("main-input").value;
    var hasil = (celsius * 9 / 5) + 32;
        if (celsius ==""){
            alert("Masukkan angka terlebih dahulu!"); return;
        }
      
    
    document.getElementById("main-result").value = hasil.toFixed(2);

    document.getElementById("how-result").value = celsius + " × (9 : 5) + 32 = " + hasil.toFixed(2);

    console.log("Berhasil memasukkan angka!", "Hasilnya ", hasil.toFixed(2));
        
} 



function resetForm(event) {
    event.preventDefault(); 
    document.getElementById("main-input").value = "";
    document.getElementById("main-result").value = "";
    document.getElementById("how-result").value = "";
    
    console.log("Clear")
}





function reverse(event) {
    event.preventDefault();
    var fahrenheit = document.getElementById("main-input").value;
    var hasilRe = 5 / 9 * (fahrenheit - 32);
    if (fahrenheit ==""){
        alert("Masukkan angka terlebih dahulu!"); return;
    }

    document.getElementById("main-result").value = hasilRe.toFixed(2);

    document.getElementById("how-result").value = "(5 / 9) x " + fahrenheit + " - 3) = " + hasilRe.toFixed(2);
    
    console.log("Fahrenheit ke Celsius.", "Hasilnya ", hasilRe.toFixed(2));

    
}


function swap(event) {
        event.preventDefault();
            
            let y = document.getElementById("m-input");
            let x = document.getElementById("m-result");

            if (y.textContent === "Celsius °C:") {
                y.textContent = "Fahrenheit °F:";
            } else {
                y.textContent = "Celsius °C:";
            }
            
            if (x.textContent === "Fahrenheit °F:") {
                x.textContent = "Celsius °C:";
            } else {
                x.textContent = "Fahrenheit °F:";
            }
 
}


