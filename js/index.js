const showDest = document.getElementById('show-destinations');
const hideDest = document.getElementById('hide-destinations');
const selectedCity = document.getElementById('selected-City');
const section = document.getElementById('list-section');
const listElement = document.getElementById('city-list');
const entries = document.querySelectorAll('li');


showDest.addEventListener('click', event => {
    section.removeAttribute('hidden');
    showDest.style.display = 'none';

    // active class mit jedem click auf showDes resetten:
    entries.forEach((entry) => {
        if(entry.matches('.active')) {
            entry.classList.remove('active');
        }
    });
});

hideDest.addEventListener('click', event => {
    showDest.style.display = 'block';
    selectedCity.setAttribute('hidden', '');
    section.setAttribute('hidden', '');
})


listElement.addEventListener('click', (event) => {
    selectedCity.removeAttribute('hidden');
    selectedCity.innerText = `You selected ${event.target.innerText}`;
    
    
    entries.forEach((entry) => entry.classList.remove('active'));
    event.target.classList.toggle('active'); 
});
