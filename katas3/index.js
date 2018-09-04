let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]; 

// numbers 1-20
function k1() {
    let destination = document.getElementById("k1");
    let newk1 = document.createElement("p");
    for (let i=1; i<=20; i++) {
        newk1.appendChild(document.createTextNode(i + ", " ));
    }
    
    //newk1.innerHTML = ;
    removeTrailingComma(newk1);
    destination.appendChild(newk1);

}
k1()

function removeTrailingComma(paragraph) {
    paragraph.textContent = paragraph.textContent.slice(0,paragraph.textContent.length -2);
}

// even numbers through 20
function k2() {
    let destination = document.getElementById("k2");
    let newk1 = document.createElement("p");
    for (let i=2; i <=20; i++) {
        if ((i % 2) == 0)newk1.appendChild(document.createTextNode(i + ", "));

    }
    removeTrailingComma(newk1);
    destination.appendChild(newk1);
}
k2()

//Odd numbers from 1-20
function k3() {
    let destination = document.getElementById("k3");
    let newk1 = document.createElement("p");
    for (let i=1; i<=20; i++) {
        if((i % 2) !== 0)newk1.appendChild(document.createTextNode(i + ", "));

    }
    removeTrailingComma(newk1);
    destination.appendChild(newk1);
}
k3()

// multiples of 5 up to 100
function k4() {
    let destination = document.getElementById("k4");
    let newk1 = document.createElement("p");
    for (let i=0; i<=100; i++) {
        if((i % 5) == 0)newk1.appendChild(document.createTextNode(i + ", "));

    }
    removeTrailingComma(newk1);
    destination.appendChild(newk1);
}
k4()
// square numbers up to 100
function k5() {
    let destination = document.getElementById("k5");
    let newk1 = document.createElement("p");
    for (let i=1; i<=10; i++) {
        newk1.appendChild(document.createTextNode((i*i) + ", "));

    }
    removeTrailingComma(newk1);
    destination.appendChild(newk1);
}
k5()

// numbers counting backwards from 20
function k6() {
    let destination = document.getElementById("k6");
    let newk1 = document.createElement("p");
    for (let i=20; i>0; i--) {
        newk1.appendChild(document.createTextNode(i + ", "));

    }
    removeTrailingComma(newk1);
    destination.appendChild(newk1);
}
k6()

// even numbers counting backward from 20
function k7() {
    let destination = document.getElementById("k7");
    let newk1 = document.createElement("p");
    for (let i=20; i>0; i--) {
        if((i % 2) == 0)newk1.appendChild(document.createTextNode(i + ", "));

    }
    removeTrailingComma(newk1);
    destination.appendChild(newk1);
}
k7()

// odd number from 20 to 1, counting backwards
function k8() {
    let destination = document.getElementById("k8");
    let newk1 = document.createElement("p");
    for (let i=20; i>0; i--) {
        if((i % 2) !== 0)newk1.appendChild(document.createTextNode(i + ", "));

    }
    removeTrailingComma(newk1);
    destination.appendChild(newk1);
}
k8()

// multiples of 5, counting down from 100
function k9() {
    let destination = document.getElementById("k9");
    let newk1 = document.createElement("p");
    for (let i=100; i>0; i--) {
        if((i % 5) == 0)newk1.appendChild(document.createTextNode(i + ", "));

    }
    removeTrailingComma(newk1);
    destination.appendChild(newk1);
}
k9()

// square numbers, counting down from 100
function k10() {
    let destination = document.getElementById("k10");
    let newk1 = document.createElement("p");
    for (let i=10; i>0; i--) {
        newk1.appendChild(document.createTextNode((i*i) + ", "));

    }
    removeTrailingComma(newk1);
    destination.appendChild(newk1);
}
k10()

// 20 elements of the array
function k11() {
    let destination = document.getElementById("k11");
    let newk1 = document.createElement("p");
    for (let i=0; i<=19; i++) {
        newk1.appendChild(document.createTextNode(sampleArray[i] + ", " ));
    }
    
    //newk1.innerHTML = ;
    removeTrailingComma(newk1);
    destination.appendChild(newk1);

}
k11()

// even number contained in an array
function k12() {
    let destination = document.getElementById("k12");
    let newk1 = document.createElement("p");
    for (let i=0; i<=19; i++) {
        if ((sampleArray[i] % 2) == 0)newk1.appendChild(document.createTextNode(sampleArray[i] + ", "));
    }
    
    //newk1.innerHTML = ;
    removeTrailingComma(newk1);
    destination.appendChild(newk1);

}
k12()

// odd numbers contained in array
function k13() {
    let destination = document.getElementById("k13");
    let newk1 = document.createElement("p");
    for (let i=0; i<=19; i++) {
        if ((sampleArray[i] % 2) !== 0)newk1.appendChild(document.createTextNode(sampleArray[i] + ", "));
    }
    
    //newk1.innerHTML = ;
    removeTrailingComma(newk1);
    destination.appendChild(newk1);

}
k13()

// square each element in an array
function k14() {
    let destination = document.getElementById("k14");
    let newk1 = document.createElement("p");
    for (let i=0; i<=19; i++) {
        newk1.appendChild(document.createTextNode(sampleArray[i] * sampleArray[i] + ", "));
    }
    
    //newk1.innerHTML = ;
    removeTrailingComma(newk1);
    destination.appendChild(newk1);

}
k14()

// Sum of all numbers from 1 - 20
function k15() {
    let destination = document.getElementById("k15");
    let newk1 = document.createElement("p");
    let sum = 0;
    for (let i=0; i<=20; i++) {
        sum += i;
    }

    newk1.appendChild(document.createTextNode(sum));
    

    // removeTrailingComma(newk1);
    destination.appendChild(newk1);

}
k15()

// Sum of all elements in the array
function k16() {
    let destination = document.getElementById("k16");
    let newk1 = document.createElement("p");
    let sum = 0;
    for (let i=0; i<sampleArray.length; i++) {
        sum += sampleArray[i];
    }

    newk1.appendChild(document.createTextNode(sum));
    

    // removeTrailingComma(newk1);
    destination.appendChild(newk1);

}
k16()


// smallest number in the array
function k17() {
    let destination = document.getElementById("k17");
    let newk1 = document.createElement("p");
    let min = Math.min.apply(Math, sampleArray);
    for (let i=0; i<sampleArray.length; i++) {
         
    }

    newk1.appendChild(document.createTextNode(min));
    

    // removeTrailingComma(newk1);
    destination.appendChild(newk1);

}
k17()

// smallest number in the array
function k18() {
    let destination = document.getElementById("k18");
    let newk1 = document.createElement("p");
    let max = Math.max.apply(Math, sampleArray);
    for (let i=0; i<sampleArray.length; i++) {
         
    }

    newk1.appendChild(document.createTextNode(max));
    

    // removeTrailingComma(newk1);
    destination.appendChild(newk1);

}
k18()

// 20 solid gray rectangles, each 20px high and 100px wide.
function k19() {
    let destination = document.getElementById("k19");
    for (let i=0; i<=20; i++) {
        let newk1 = document.createElement("div");
        newk1.style.width = 100 + "px";
        newk1.style.height = 20 + "px";
        newk1.style.backgroundColor = "gray";
        destination.appendChild(newk1);
        destination.appendChild(document.createElement("br"));
        //newk1.appendChild("div");
     
    }

    

    // removeTrailingComma(newk1);
    //destination.appendChild(newk1);

}
k19()










 









