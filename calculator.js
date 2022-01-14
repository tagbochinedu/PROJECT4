let display = document.querySelector('#input')
let num = document.querySelectorAll('.number')
let clear = document.querySelector('#clear');
let del = document.querySelector('#del');
let prop = document.querySelectorAll('.prop')
let tog = document.querySelector('.tog');
let addit = document.querySelector('#addition');
let percent = document.querySelector('#percent');
let divis = document.querySelector('#division');
let multip = document.querySelector('#multiplier');
let subt = document.querySelector('#subtract');
let equals = document.querySelector('.equal');
let ans = [];
let result; 

//--------EventListeners--------
num.forEach(nums => {
    nums.addEventListener('click', () => {
        if (display.innerHTML == eval(result) ) {
            ans = [];
            display.innerHTML = '';
            display.append(nums.innerHTML);
            ans.push(nums.value);
            console.log(ans);
            console.log(display);
        }
        else {
            display.append(nums.innerHTML);
            ans.push(nums.value);
            console.log(ans);
            console.log(display);
        }
    })
    nums.addEventListener('mousedown', () => {
        nums.classList.add('colordown')
        nums.parentElement.classList.add('colordown')
    })
    nums.addEventListener('mouseup', () => {
        nums.classList.remove('colordown')
        nums.parentElement.classList.remove('colordown')
    })
})

clear.addEventListener('click', remove)

del.addEventListener('click', dlt)

prop.forEach(props => {
    props.addEventListener('click', () => {
        display.append(props.innerHTML)
        ans.push(props.value)
    })
})

equals.addEventListener('click', show)

//--------Functions--------
function remove() {
    display.innerHTML = '';
    ans = []
} 

function dlt() {
    display.innerHTML = display.innerHTML.slice(0,-1);
    ans.pop()
}

function show() {
    result = ans.join('');
    display.innerHTML = eval(result) 
}


