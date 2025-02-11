//File JS


function konversi(event) {
    event.preventDefault(); // Mencegah halaman reload
    var celsius = document.getElementById("main-input").value;
    var o = 9;
    var i = 5
    var a = 32;
    var hasil = (celsius * o / i) + a;
    
document.getElementById("main-result").value = hasil.toFixed(2);

document.getElementById("how-result").value = celsius + " × (9 : 5) + 32 = " + hasil.toFixed(2);
}


function resetForm(event) {
    event.preventDefault(); 
    document.getElementById("main-input").value = "";
    document.getElementById("main-result").value = "";
    document.getElementById("how-result").value = "";
}