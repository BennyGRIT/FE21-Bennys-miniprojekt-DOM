const body = document.querySelector("body");
const p = document.createElement("p");
body.appendChild(p);

for (let i = 1; i < 6; i++) {
    const p = document.createElement("p");
    body.append(p);
    const colors = "#6e6ef7";
    p.innerText = "Rad " + i;
    p.style.textAlign = "center";
    p.style.color = colors;
    p.style.fontWeight = 'bold';

    const fonten = i * 10;
    p.style.fontSize = `${fonten}px`;
}

const allp = document.querySelectorAll('p');

for (let i = 1; i < allp.length; i++) {
    let hue = 177 - (i * 4);
    allp[i].style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}

//Containern
let div = document.createElement("div");
body.appendChild(div);
div.style.display = "flex";
div.style.border = "solid #5f5f5f 2px"
div.style.height = "200px"
div.style.justifyContent = "space-around";
div.style.padding = "50px"

const flexItem1 = document.createElement('div');
const flexItem2 = document.createElement('div');
const flexItem3 = document.createElement('div');
div.appendChild(flexItem1);
div.appendChild(flexItem2);
div.appendChild(flexItem3);

flexItem1.style.border = "solid #a8a8f0 10px"
flexItem2.style.border = "solid #a8a8f0 10px"
flexItem3.style.border = "solid #a8a8f0 10px"

//Vänstra rutan
for (let i = 0; i < 10; i++) {
    let articlen = document.createElement("article");
    flexItem1.appendChild(articlen);
    articlen.innerText = i
    articlen.style.paddingRight = "35px"

    if (i === 0 || i === 2 || i === 6 || i === 8) {
        articlen.style.backgroundColor = "black";
        articlen.style.color = "white";
    }

    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9) {
        articlen.style.backgroundColor = "white";
    }

    if (i === 4) {
        articlen.style.backgroundColor = "#a8a8f0"
        articlen.style.color = "white";
    }
}

// Mitten rutan
for (let i = 9; i >= 0; i--) {
    let articlen = document.createElement("article");
    flexItem2.appendChild(articlen);
    articlen.innerText = i;
    articlen.style.paddingRight = "20px"
    articlen.style.paddingLeft = "20px"

    if (i === 0 || i === 2 || i === 4 || i === 6) {
        articlen.style.backgroundColor = "black";
        articlen.style.color = "white";
    }

    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9) {
        articlen.style.backgroundColor = "white";
    }

    if (i === 8) {
        articlen.style.backgroundColor = "#a8a8f0"
        articlen.style.color = "white";
    }
}

// Höger rutan
let numbers = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

for (i = 0; i < numbers.length; i++) {
    let articlen = document.createElement("article");
    flexItem3.appendChild(articlen);
    articlen.innerText = numbers[i];
    articlen.style.paddingLeft = "25px"
    articlen.style.textAlign = "right"

    if (i === 0 || i === 2 || i === 4 || i === 6 || i === 8) {
        articlen.style.backgroundColor = "black";
        articlen.style.color = "white";
    }

    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9) {
        articlen.style.backgroundColor = "white";
    }

    if (i === 7) {
        articlen.style.backgroundColor = "#a8a8f0"
        articlen.style.color = "white";
    }
}