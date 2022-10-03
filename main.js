// Triangle Perimeter Assignment Start Code
document.getElementById("calc-btn").addEventListener("click", bttn);

//input

function bttn() {
  let xA = +document.getElementById("Ax").value;
  let yA = +document.getElementById("Ay").value;
  let xB = +document.getElementById("Bx").value;
  let yB = +document.getElementById("By").value;
  let xC = +document.getElementById("Cx").value;
  let yC = +document.getElementById("Cy").value;

  console.log(xA,yA,xB,yB,xC,yC)
  //trust the process
  let AB = dist(xA, xB, yA, yB);
  let BC = dist(xB, xC, yB, yC);
  let AC = dist(xA, xC, yA, yC);
  //output
  document.getElementById("AB").innerHTML = AB;
  document.getElementById("BC").innerHTML = BC;
  document.getElementById("AC").innerHTML = AC;
  document.getElementById(Perimeter).innerHTML = Perimeter;
}
let Perimeter = (AB + BC + AC)
//function
function dist(x1, x2, y1, y2) {
  let rise = x2 - x1;
  let run = y2 - y1;
  return Math.sqrt(rise ** 2 + run ** 2);
}
