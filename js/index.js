(function() {
    const link = document.querySelector('a');
    link.textContent = 'YouTube';
    link.href = 'https://youtube.com';

    const sect = document.querySelector('section');
    const para = document.createElement('p');
    para.textContent = 'We hope you enjoyed the ride.';
    sect.appendChild(para);
    const text = document.createTextNode(' — the premier source for web development knowledge.');
    para.appendChild(text);

    const linkPara = document.querySelector('p');
    linkPara.appendChild(text);
    const textClone = text.cloneNode(true);
    sect.appendChild(textClone);

    linkPara.removeChild(text);

    // textClone.parentElement.removeChild(textClone);
    textClone.remove();

    para.style.color = 'white';
    para.style.backgroundColor = 'black';
    para.style.padding = '10px';
    para.style.width = '250px';
    para.style.textAlign = 'center';

    para.classList.add('chosen');

    const clockElement = document.querySelector('.clock');
    setInterval( () => clockElement.innerText = (new Date()).toLocaleTimeString(), 1000 );

    const infoBlock = document.querySelector('.info-block');

    for ( let i = 0; i < 10; i++) {
        let info = document.createElement('p');
        info.innerText = 'Item no: ' + i;
        infoBlock.appendChild(info);
        info.style.color = 'white';
        info.style.background = 'black';
        info.style.textAlign = 'center';
        info.style.padding = '15px';
        info.style.border = '3px solid';
        info.style.borderColor = 'yellow';
        }


    const counterContainer = document.querySelector('.click-count');
    let counter = 0;
    function count() {
        counterContainer.textContent = counter++;
    }

    document.querySelector('.counter-button').addEventListener('click', count);

//jQuery Sample


$('.jq-sample').click( () => $('p').toggle('slow') );

// Calculator

const nums = document.querySelectorAll('.calc .nums button');
const display = document.querySelector('.calc .display');
const opers = document.querySelector('.calc .opers button');
const equal = document.querySelector('.calc')
nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed));
function numPressed(ev) {
    const num = ev.target.innerText;
    display.value += num;
}
opers.forEach( buttonOper => buttonOper.addEventListener('click', operPressed));
function operPressed(ev) {
    const oper = ev.target.innerText;
    display.value += oper;
}
})();