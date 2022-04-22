/* Variables Kinds
String
Number
Array => Object (based on Java Script)
Object
Bollean
*/

let display = document.querySelector('.display .now');
let btns = document.querySelectorAll('.main span');
let history = document.querySelector('.display .history');
let dispArray = [];
let hisArray = [];

btns.forEach((e) => {
       e.addEventListener('click', () => {
              if (e.textContent === 'AC') {
                     display.innerHTML = '0';
                     dispArray = [];
                     hisArray = [];
                     history.innerHTML = '';
              } else if (e.textContent === 'DEL') {
                     dispArray.pop();
                     display.innerHTML = dispArray.join('');

                     if (display.textContent === '') {
                            display.textContent = '0';
                     }
              } else if (
                     e.textContent === '+' ||
                     e.textContent === '*' ||
                     e.textContent === '-'
              ) {
                     dispArray.push(e.innerHTML);
                     hisArray = dispArray;
                     dispArray = [];
                     history.innerHTML = hisArray.join('');

                     display.innerHTML = '';
              } else if (e.textContent === '÷') {
                     dispArray.push('/');
                     hisArray = dispArray;
                     dispArray = [];
                     history.innerHTML = hisArray.join('');

                     display.innerHTML = '';
              } else if (e.textContent === '=') {
                     display.innerHTML = eval(
                            `${hisArray.join('')}${dispArray.join('')}`
                     );
                     history.innerHTML = `${hisArray.join('')}${dispArray.join(
                            ''
                     )}=`;
                     hisArray = [];
                     dispArray = [];
              } else {
                     history.innerHTML = hisArray.join('');
                     dispArray.push(e.innerHTML);
                     display.innerHTML = dispArray.join('').toLocaleString();
              }
       });
});

let num = '8745897';
console.log(num.toLocaleString());
