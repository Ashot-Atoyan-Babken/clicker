let button = document.querySelectorAll('button');
let time = document.querySelector('.timer>p');
let click_area = document.querySelector('.click_area');
let click = document.querySelector('.click>p');
let x = 0;
let m;
let count;
let isSolutionCalled = false;
let clicker = document.querySelectorAll('.name>p');
for (let i = 0; i < clicker.length; i++) {
  setInterval(() => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    clicker[i].style.color = `rgb(${r},${g},${b})`;
  }, 1000);
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    time.innerHTML = Number(button[i].value);
    m = time.innerHTML;
    count = m;
  });
}

click_area.addEventListener('click', () => {
  x++;
  click.innerHTML = x;
  if (!isSolutionCalled) {
    isSolutionCalled = true;
    solution();
  }
});

function solution() {
  if (count > 0) {
    let average = setInterval(() => {
      time.innerHTML = count;
      count--;
      if (count === 0 || count < 0) {
        time.innerHTML = 0;
        let y = click.innerHTML;
        alert(`вы кликайте среднем  ${y / m} раз`);
        clearInterval(average);
      }
    }, 1000);
  }
}
