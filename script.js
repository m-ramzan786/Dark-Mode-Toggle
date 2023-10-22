const btn = document.getElementById('btn'); //dark mode button
const body = document.getElementsByTagName('body')[0];



btn.addEventListener('click', () => {
    // btn.classList.toggle(active);
    body.classList.toggle('dark');
})
