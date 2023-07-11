const toggleSwitch = document.getElementById('toggle-switch');
const body = document.body;

toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('active');
        body.classList.remove('inactive');
    } else {
        body.classList.remove('active');
        body.classList.add('inactive');
    }
});
