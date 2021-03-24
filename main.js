const myClear = document.querySelector('.clear');
const myValue = document.querySelector('.val');
const myBtn = document.getElementsByClassName('input'); // [ ]
const shekelToDolar = document.querySelector('.shekelToDolar');
const dolarToShekel = document.querySelector('.dolarToShekel');
const shekelToEuro = document.querySelector('.shekelToEuro');
const euroToShekel = document.querySelector('.euroToShekel');

myClear.onclick = () => {
  myValue.value = '';
};

const arrayOfOp = ['-', '+', '/', 'x', '='];
let opCunt = 0;

for (i = 0; i < myBtn.length; i++) {
  myBtn[i].onclick = function () {
    if (arrayOfOp.includes(this.value)) {
      opCunt++;
      if (opCunt > 1) {
        let thisOp = '';

        for (i = 0; i < arrayOfOp.length; i++) {
          if (myValue.value.indexOf(arrayOfOp[i]) !== -1) {
            thisOp = arrayOfOp[i];
            break;
          }
        }

        const arrayOfNam = myValue.value.split(thisOp); // ["",""]
        let resultForTowNum = 0;
        if (thisOp === '+') {
          resultForTowNum = parseInt(arrayOfNam[0]) + parseInt(arrayOfNam[1]);
        } else if (thisOp === '-') {
          resultForTowNum = parseInt(arrayOfNam[0]) - parseInt(arrayOfNam[1]);
        } else if (thisOp === 'x') {
          resultForTowNum = parseInt(arrayOfNam[0]) * parseInt(arrayOfNam[1]);
        } else if (thisOp === '/') {
          resultForTowNum = parseInt(arrayOfNam[0]) / parseInt(arrayOfNam[1]);
        }
        if (this.value === '=') {
          opCunt--;
        }
        myValue.value = resultForTowNum;
        opCunt--;
      }
    }

    if (this.value !== '=') {
      // result without equal
      myValue.value += this.value;
    }
  };
}

del.onclick = () => {
  myValue.value = myValue.value.substring(0, myValue.value.length - 1);
};

shekelToDolar.onclick = () => {
  myValue.value = parseFloat(myValue.value) / 3.3;
};

dolarToShekel.onclick = () => {
  myValue.value = parseFloat(myValue.value) * 3.3;
};

shekelToEuro.onclick = () => {
  myValue.value = parseFloat(myValue.value) / 3.94;
};

euroToShekel.onclick = () => {
  myValue.value = parseFloat(myValue.value) * 3.94;
};
