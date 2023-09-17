function opendropdown() {
    const dropdown = document.querySelector('.dropdown');

    dropdown.style.animationName = 'slideInLeft';
    setTimeout(() => {
        dropdown.style.display = 'block';
    }, 500);
}