const btn = document.getElementById('darkmode-btn');
const icon = btn.querySelector('i');

if(localStorage.getItem('darkmode') === 'true') {
    document.body.classList.add('dark');
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkmode', isDark);
});