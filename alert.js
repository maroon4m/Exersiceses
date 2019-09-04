/*var answer = prompt('Якт тебе звати', '');
alert('Мене звати ' + answer);
var clientAge=prompt('Скільки Вам років','');
if (clientAge == '0') {
    alert( 'Привіт' );
}

var answer = prompt('Ви знаєте яка компанія розробилп JS', '');
if (answer =='ECMAScript') {
    alert('Так точно');
}
else {
    alert('Незнаєте, це компанія ECMAScript');
}


var rideNumber=prompt('Введіть значення', '');
if (rideNumber > 0) {
    alert(1);
}
if (rideNumber < 0 ) {
    alert(-1)
}
else {
    alert(0)
}


var a = prompt('Введіть значення а', ''), b = prompt('Введіть значення b',''), result;
var result = a + b;
     result = (a + b < 4)? 'Мало': 'Много';
 alert(result); */
/*var userName=prompt('Всведіть імя користувача', '');
 if (userName == 'Admin') {
     var pass = prompt('Введіть пароль', '');
     if (pass = 'Дрова') {
         alert('Вхід дозволено');
     } else if (pass = null) {
         alert('Введення скасовано');
     } else {
         alert('Пароль не вірний')
     }
 } else if (userName == null) {
    alert('Вхід відмінено');
  } else {
    alert('Невірний логін');

  }

var myNumber;

do { myNumber = prompt('Введіть значення', '0');
} while (myNumber <= 100 && myNumber != null);
*/
// var myBrowser = prompt('Введіть значення', '');
//  if (myBrowser === 'IE') {
//      alert ('Так, у нас ІЕ');
//  } else if (myBrowser === 'Chrome'
//     || myBrowser === 'Safare'
//     || myBrowser === 'Mozila') {
//        alert('No');
//  } else {
//       alert ('undefined');
//  }
//  var a = +prompt('Question', '');
//  switch (a) {
//      case 0:
//          alert(0);
//          break;
//      case 1:
//          alert(1);
//          break;
//      case 2:
//      case 3:
//          alert ('2,3');
//          break;
//      default:
//          alert('Значення не входить в діапазон')
//  }
// function min(a,b) {
//     a = prompt('Введіть значення а', '');
//     b = prompt('Введіть значення b', '');
//     if (a > b) {
//         alert (b);
//     }   else {
//         alert (a);
//     }    
// } 
//  Возводит x в степень n (комментарий JSDoc)
// 
// @param {number} x число, которое возводится в степень
// @param {number} n степень, должна быть целым числом больше 1
//
//  @return {number} x в степени n
// function pow(x,n) {
//   var result = x;
//   for (var i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// } 
//   var x = prompt ('Введіть значення x', '');
//   var n = prompt ('Введіть значення n', ''); 
//     if (n <= 1) {
//       alert ('Введіть значення n більше 1');
//     } else {
//         alert(pow(x,n));
//     }
// function sumTo(n) {
//     if (n == 1) 
//         return 1;
//      else 
//         return n + sumTo(n-1);
// }  
// var x = +prompt ('?', '')
// n = x;
// alert (sumTo(x));
// function sumTo(n) {
//     var sum = 0;
//     for (var i = 1; i <= n; i++) {
//     sum += i;
//     }
//     return sum;
//     }
//     var x = prompt('?','') 
//     n = x;
//     alert (sumTo (x));
//  function sumTo(n) {
//      return n*(n+1)/2;
//  } 
//  var x = +prompt('?', '')
//  n = x;
//  alert (sumTo(x));
// function factorial(n) {
//    if (n == 1) return 1;
//    else {
//        return n * factorial(n - 1);
//    } 
// } 
// var x = +prompt('?', '')
// n = x;
// alert (factorial (x));
// function fib(a, n) {
//     var n;
//     for (var i = 1; i <= n; i++) {
//         sum += i  
//     }
//     if (a == 1) return 1;
//     else 
//     return a + fib(a);
// } 
// var x = +prompt('?', '')
// a = x;
// alert ( fib() );
// var sum = new Function(' aa,bb ', ' return aa+bb; ');
// var writeA = +prompt('!', ''), writeB = +prompt('?', '')
// aa = writeA, bb = writeB;
// var result = sum(writeA, writeB);
// alert( result.toFixed(2) );
// var myNewF = function (a, b, c) {
//     if (a <= 0 || b <= 0 || c <= 0 ) { 
//       alert ( 'undefined' );
//     } else {
//       alert ((a + b) + c) }
//     } 
//     var writeA = +prompt('?', ''), writeB = +prompt('?', ''), writeC = +prompt('?', '')
//     writeA = a, writeB = b, writeC = c;
//     myNewF(writeA, writeB, writeC);
// var myNewF = function (a, b, c) {
//     if (a <= 0 || b <= 0 || c <= 0 ) { 
//       alert ( 'undefined' );
//     } else {
//         var writeA = +prompt('?', '');
//         var writeB = +prompt('?', '');
//         var writeC = +prompt('?', '');
//           a = writeA, b = writeB, c = writeC;
//         var result =  (a + b); 
//         alert ( Math.pow(result, c) )
//      }
//     } 
//     myNewF();

// function upValue(str) {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// } var myValue = prompt('?', '');
// str = myValue;
// alert ( upValue(myValue) );

// function checkSpam(str) {
//     var lowerStr = str.toLowerCase();
//     // https://toster.ru/q/412629 розяснення до наступного рядка 
//     // Для этого используются побитовое НЕ ~ и логическое НЕ !
//     // ~ обладает замечательным свойством: только из –1 получается 0 (а из нуля –1): ~(-1) === 0
//     // ! является логическим оператором и его результат – true или false. Например, !5 === false, а !0 === true.
//     // Это почти то, что нужно, с точностью до наоборот – в случае 0 нужен false, а не-нуля true. Поэтому добавляем ещё одно логическое НЕ. Вот и получается !!~:    
//     return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
// } var myString = prompt('?', "");
// str = myString; 
// alert (checkSpam(myString));

// function truncate(str, maxlength) {
//    if (str.length > maxlength) {
//     return str.slice(0, maxlength - 3) + '...';
//    } return str;
//  } var myNumber = prompt('?', '')
//   var maxLengthValue = prompt('?', '')
//    str = myNumber;
//    maxlength = maxLengthValue;
// alert (truncate(myNumber, maxLengthValue));

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// } var myValue = prompt('?', '');
// str = myValue;
// alert (myValue);

// let calculator = {
//     sum() {
//        return this.a + this.b;
//     },
//     mul() {
//        return this.a * this.b;
//     },
//     read() {
//         this.a = 5;
//         this.b = 5;
//         // this.a = +prompt('a?', 0);
//         // this.b = +prompt('b?', 0);
//     }
// };
// calculator.read();
//  console.log ( calculator.sum() );
//  console.log ( calculator.mul() );

//  let ladder = {};
//  ladder.step = 0;
//  ladder.up() =  function() { this.step++ };
//  ladder.down() = function() { this.step-- };
//  ladder.showStep() = function() {
//      alert (this.step);
//  };
 
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() {
//         alert( this.step );
//         return this;
//     }
// };
// ladder.up().down().up().up().showStep();

// let styles = ["Джаз", "Блюз"];
// styles.push('Рок-н-Рол');
// alert (styles);
// styles[Math.floor((styles.length - 1) / 2)] = 'Класика';
// alert (styles);
// styles.shift();
// styles.unshift('Тверк', 'Рекбі');
// alert (styles);


// function sumInput() {

//     let numbers = [];
  
//     while (true) {
  
//       let value = prompt("Введите число", 0);
  
//       // Прекращаем ввод?
//       if (value === "" || value === null || !isFinite(value)) break;
  
//       numbers.push(+value);
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   alert( sumInput() );

// Не працює break при введенні не числового значення 
// function sumInput() {
//     let numbers = [];
//     while (true) {
//         let value = prompt("?", 0);
//         if (value === "" || value === null || value === !isFinite(value) ) break;

//         numbers.push(+value);
//     }
//      let sum = 0;
//      for (let number of numbers) {
//         sum += number;
//     }
//      return sum;
    
// } 
//    alert (sumInput ());

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
  
//     for (let item of arr) { // для каждого элемента массива
//       partialSum += item; // добавляем значение элемента к partialSum
//       maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//       if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//     }
  
//     return maxSum;
//   }
  
//   alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
//   alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
//   alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
//   alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
//   alert( getMaxSubSum([1, 2, 3]) ); // 6
//   alert( getMaxSubSum([-1, -2, -3]) ); // 0

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;

//     for (let item of arr) {
//         partialSum += item;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0;
//     }

//     return maxSum;
// }

// alert( getMaxSubSum([-1, 2, 3, -9]) );

// function Calculator() {
//     this.sum = function() {
//         return this.a + this.b;
//     };
//     this.mul = function() {
//         return this.a * this.b;
//     };
//    this.read = function() {
//         this.a = +prompt("?", "");
//         this.b = +prompt("?", "");
//     };
// }
// let calculator = new Calculator() 

// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
