const menupizze=[
    {nome:"Margherita", prezzo: 5.00},
    {nome:"Marinara", prezzo: 4.50},
    {nome:"Capricciosa", prezzo: 6.50},
    {nome:"Quattro Stagioni", prezzo: 7.00},
    {nome:"Diavola", prezzo: 6.00},
    {nome:"Funghi", prezzo: 5.50}
];

// Funzione per mostrare/nascondere il menu delle pizze
document.getElementById('toggleMenuButton').addEventListener('click', function () {
    const menuDiv = document.getElementById('menuPizze');
    if (menuDiv.style.display === 'none') {
        menuDiv.style.display = 'flex';
        menuDiv.innerHTML = menupizze.map(pizza => `<p>${pizza.nome}: €${pizza.prezzo.toFixed(2)}</p>`).join('');
        this.textContent = 'Nascondi';
    } else {
        menuDiv.style.display = 'none';
        this.textContent = 'Mostra di più';
    }
});
