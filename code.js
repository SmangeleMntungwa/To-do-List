



document.querySelector('#sorting').addEventListener('click', ()=> {
    todoz.sort( (a, b)=> {
        return (a.item < b.item) ? -1: 0;
    });
    // Save new data to the localstorage
    localStorage.setItem('items', JSON.stringify(todoz));
    readItems();
});