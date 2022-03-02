const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const pauseBtn = document.getElementById('pause');
const heartBtn = document.getElementById('heart');
const counter = document.getElementById('counter');

let inc = 0;

// timer increments and pauses
function incTimer() {
    const intervalInc = () => {
        inc += 1;
        counter.textContent = inc;
    }

    let IntervalId = setInterval(intervalInc, 1000)

    let pauseInc = false;
    pauseBtn.addEventListener('click', () => {
        pauseInc = !pauseInc;

        pauseInc === false 
        ? IntervalId = setInterval(intervalInc, 1000)
        : clearInterval(IntervalId)
    })

}
incTimer()

// Increment and decrement buttons
function incDec() {
    minusBtn.addEventListener('click', () => {
        inc -= 1;
        counter.textContent = inc;
    });
    plusBtn.addEventListener('click', () => {
        inc += 1;
        counter.textContent = inc;
    });
}
incDec()

function likeNum() {
    const likeList = document.querySelector('ul');

    const makeList = () => {
        const li = document.createElement('li');
        li.textContent = counter.textContent;
        likeList.append(li);
    }
    heartBtn.addEventListener('click', makeList);

}
likeNum()

function commentList() {
    const list = document.querySelector('div > div');
    const form = document.querySelector('form');
    let comment = document.querySelector('input');
    ;

    const makeComment = (e) => {
        e.preventDefault()
        const li = document.createElement('li');
        li.textContent = comment.value;
        comment.value = '';
        list.append(li);
    }
    form.addEventListener('submit', makeComment);
}
commentList()