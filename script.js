const seletor = document.querySelector('.seletor');
seletor.addEventListener('change', function() {
    this.style.backgroundColor = this.value;
    this.style.color = this.value;
});
