var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

angka.forEach(function(element){
  if(isFinite(element)){
    console.log("Angka",String(element), "NOT Infinity");
  } else {
    console.log("Angka",String(element), "Infinity");
  }
})
