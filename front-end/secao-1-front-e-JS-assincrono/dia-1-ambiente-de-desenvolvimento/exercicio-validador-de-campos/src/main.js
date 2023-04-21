import validator from 'validator';

const form = document.getElementById('form-field');
const input = document.getElementById('value');
const btn = document.getElementById('btn');
const p = document.getElementById('paragraph');


btn.addEventListener('click', (event) => {
    event.preventDefault()
    const obj = {
        cpf: validator.isTaxID(input.value, 'pt-BR'),
        email: validator.isEmail(input.value),
    };
    p.innerHTML = `A verificação foi ${obj[form.value]}`
    // if(form.value === 'email'){
    //     const verify = validator.isEmail(`${forms.innerText}`)
    //     const text = document.createTextNode = `A verificação foi ${verify}`
    //     p.innerText = text
    // }
})

