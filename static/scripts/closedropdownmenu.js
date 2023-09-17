function closedropdown() {
    const dropdown = document.querySelector('.dropdown');

    dropdown.style.animationName = 'slideOutRight';
    setTimeout(() => {
        dropdown.style.display = 'none';
    }, 500);
}