// Triangle Perimeter Assignment Start Code

//input 

function bttn() {
    let xA = document.getElementById("Ax").Value;
    let yA = document.getElementById("Ay").Value;
    let xB = document.getElementById("Bx").value;
    let yB = document.getElementById("By").value;
    let xC = document.getElementById("Cx").value;
    let yC = document.getElementById("Cy").value;


//trust the process
let AB = dist(xA,xB,yA,yB)
let BC = dist(xB,xC,yB,yC)
let AC = dist(xA,xC,yA,yC)
//output 
document.getElementById("AB").innerHTML = AB;
document.getElementById("BC").innerHTML = BC;
document.getElementById("AC").innerHTML = AC;
}

//function
function dist(x1,x2,y1,y2){
    let rise= x2-x1
    let run = y2-y1
    return Math.sqrt(rise ** 2 + run ** 2);
}