const checkbox = document.querySelector('.input');
const themeToggle = document.getElementById('themeToggle');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.style.setProperty('--bg-color', '#fefefe');
        document.documentElement.style.setProperty('--text-color', '#000000');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#333333');
        document.documentElement.style.setProperty('--text-color', '#CCCCCC');
    }
});
