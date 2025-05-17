const f = 32;

function farenhight() {
  let c = document.getElementById("farenhight").value;
  let ans = c / f;
  alert(ans + " °Celcius");
}

function celcius() {
  let c = document.getElementById("celcius").value;
  let ans = f * c;
  alert(ans + " °Farenhight");
}
