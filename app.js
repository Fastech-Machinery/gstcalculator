const cgst = document.querySelector('#cgst');
const sgst = document.querySelector('#sgst');
const igst = document.querySelector('#igst');
const button = document.querySelector('#btn');
const withoutgst = document.querySelector('#withoutgst');
const withgst = document.querySelector('#withgst');
const percentcgst = document.querySelector('#percentcgst');
const percentsgst = document.querySelector('#percentsgst');
const percentigst = document.querySelector('#percentigst');

button.addEventListener('click', ()=>{
    const other = document.querySelector('#other')
    other.style.display = 'flex';
    var price = document.querySelector('#price');
    var tax = document.querySelector('#tax').value;
    var amount = price.value;

    var valuecgst = amount*(tax/100)/2;
    var valuesgst = amount*(tax/100)/2;
    var valueigst = amount*tax/100;

    cgst.textContent = valuecgst;
    sgst.textContent = valuesgst;
    igst.textContent = valueigst;
    withoutgst.textContent = amount;
    withgst.textContent = parseInt(amount) + parseInt(valueigst);
    percentcgst.textContent = `${tax/2}%`;
    percentsgst.textContent = `${tax/2}%`;
    percentigst.textContent = `${tax}%`;
    console.log(cgst);
})