const fizz = () => {
  const angka = parseInt(document.getElementById("angka").value);
  let keluaran = 0;

  if (angka === undefined || angka === 0 || isNaN(angka)) {
    keluaran = "Invalid input!";
  } else if (angka % 15 === 0) {
    keluaran = "FizzBuzz!";
  } else if (angka % 5 === 0) {
    keluaran = "Buzz!";
  } else if (angka % 3 === 0) {
    keluaran = "Fizz!";
  } else {
    keluaran = angka;
  }

  //   document.getElementById("hasil").innerHTML = keluaran;
  const node = document.createElement("p");
  const textnode = document.createTextNode(keluaran);
  node.appendChild(textnode);
  document.getElementById("hasil").appendChild(node);
};
