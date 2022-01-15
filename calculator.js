let display = document.querySelector('#input')
let num = document.querySelectorAll('.number')
let clear = document.querySelector('#clear');
let del = document.querySelector('#del');
let prop = document.querySelectorAll('.prop')
let dot = document.querySelector('#dot');
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
        if (display.innerHTML == result ) {
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

dot.addEventListener('click', () => {
    for (let i = 0; i<ans.length; i++) {
        if(ans[ans.length-1] == dot.value) {
            ans.pop();
            display.innerHTML = display.innerHTML.slice(0,-1);
        }
    }
    ans.push(dot.value)
    display.append(dot.innerHTML)
})
clear.addEventListener('click', remove)

del.addEventListener('click', dlt)

prop.forEach(props => {
    props.addEventListener('click', () => {
        for (let i = 0; i<ans.length; i++) {
            if(ans[ans.length-1] == props.value) {
                ans.pop();
                display.innerHTML = display.innerHTML.slice(0,-1);
            }
        }
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
    if (display.innerHTML == 'cannot divide') {
        display.innerHTML = '';
        ans = []
    }
    else {
        display.innerHTML = display.innerHTML.slice(0,-1);
        ans.pop()
    }
    
}

function show() {
    result = eval(ans.join('')).toFixed(3);
    if (result == 'Infinity') {
        result = 'cannot divide'
        alert('Numbers Cannot Be Divided By Zero')
    }
    display.innerHTML = result
    console.log(result)
}


