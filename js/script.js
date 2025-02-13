//File JS


//Fungsi untuk konversi C ke F

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

//Fungsi reverse F ke C

function swap(event) {
        event.preventDefault();
            
            let x = document.getElementById("label-input");
            let y = document.getElementById("label-result");
            var input = document.getElementById("main-input").value;
            let rumusF = 5 / 9 * (input - 32);
            let rumusC = (input * 9 / 5) + 32;
            
        
            if (y.textContent === "Celsius °C:") {
                y.textContent = "Fahrenheit °F:";
                document.getElementById("main-result").value = rumusF.toFixed(2);
                document.getElementById("how-result").value = "((5 / 9) x 1 - 32) = " + rumusF.toFixed(2);
            } else {
                y.textContent = "Celsius °C:";
                
            }

            if (x.textContent === "Fahrenheit °F:") {
                x.textContent = "Celsius °C:";
                document.getElementById("main-result").value = rumusC.toFixed(2);
                document.getElementById("how-result").value = "1 × (9 : 5) + 32 = " + rumusC.toFixed(2);
            } else {
                x.textContent = "Fahrenheit °F:";
                
            }
}

function reverse(event) {
    event.preventDefault();
    var fahrenheit = document.getElementById("main-input").value;
    var hasilRe = 5 / 9 * (fahrenheit - 32);
    var celsius = document.getElementById("main-input").value;
    var hasil = (celsius * 9 / 5) + 32;
    
        if (fahrenheit ==""){
            alert("Masukkan angka terlebih dahulu!"); return;
        }

    document.getElementById("main-result").value = hasilRe.toFixed(2);
    document.getElementById("how-result").value = "((5 / 9) x " + fahrenheit + " - 32) = " + hasilRe.toFixed(2);
    console.log("Fahrenheit ke Celsius.", "Hasilnya ", hasilRe.toFixed(2));
    
}


//Fungsi untuk reset

function resetForm(event) {
    event.preventDefault(); 
    let x = document.getElementById("label-input");
    let y = document.getElementById("label-result");
    if (y.textContent === "Celsius °C:") {
        y.textContent = "Fahrenheit °F:";}
    
    if (x.textContent === "Fahrenheit °F:") {
        x.textContent = "Celsius °C:";}
    
    document.getElementById("main-input").value = "";
    document.getElementById("main-result").value = "";
    document.getElementById("how-result").value = "";
    
    console.log("Clear")
}
    


