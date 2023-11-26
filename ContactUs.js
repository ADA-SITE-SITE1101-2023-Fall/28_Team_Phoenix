document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', function() {
        alert('You clicked on ' + this.querySelector('h2').innerText);
    });
});
