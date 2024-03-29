const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');

noBtn.addEventListener('mouseover', () => {
    noBtn.style.left = Math.floor(Math.random() * (window.innerWidth) - noBtn.clientWidth) + "px";
    noBtn.style.top = Math.floor(Math.random() * (window.innerHeight) - noBtn.clientHeight) + "px";
});

yesBtn.addEventListener('click', () => {
    message.innerHTML = 'TE AMO MIBIDA';
    buttons.style.display = 'none';
});