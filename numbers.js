/*Hadde eksamen i UIN i 2022, dette er inspirert av koden vi jobbet med da
Fikk ikke sorter-funksjonen til å funke helt denne gangen. */
 
 function addNumbers () {
    
    one= Math.floor(Math.random()* 9)+1;
    two= Math.floor(Math.random()* 9)+1;
    three= Math.floor(Math.random()* 9)+1;
    four= Math.floor(Math.random()* 9)+1;

    document.getElementById("number1").innerHTML = one;
    document.getElementById("number2").innerHTML = two;
    document.getElementById("number3").innerHTML = three;
    document.getElementById("number4").innerHTML = four;
}

document.getElementById("add").addEventListener("click",addNumbers);  

function sortList() {
    let list, i, switching, b, shouldSwitch;
    list = document.getElementById("ul");
    switching = true;
    
    while (switching) {
     
      switching = false;
      b = list.getElementsByTagName("li");
     
      for (i = 0; i < (b.length - 1); i++) {
    
        shouldSwitch = false;
    
    
        if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
    
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
    
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
    }
     document.getElementById("sort").addEventListener("click",sortList);





//Kode fra timen

/* const lis = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const add = document.getElementById("add");
const sort = document.getElementById("sort");

const random = () => {
    return Math.floor(Math.random() * 9 + 1);
}

const addNumbers = () => {
    const numbers = Array.from(lis).map((li) => li.innerHTML);
    return numbers.sort((a,b) => a - b);
}

const updateView = () => {
    const sortedNumbers = sortNumbers();
    const listArray = Array.from(lis);
    //Fortsett her
}

document.getElementById("add").addEventListener("click",addNumbers) */