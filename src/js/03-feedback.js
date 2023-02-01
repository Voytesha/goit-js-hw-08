
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
};

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { email: '', message: '' };
console.log(formData);


refs.form.addEventListener('input', throttle(onDataInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

savedDataform();

function onDataInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
}


function onFormSubmit(evt) {
    evt.preventDefault();
    console.clear;
    evt.target.reset();
    console.log('Storage:', JSON.parse(localStorage.getItem(STORAGE_KEY)));
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { email: '', message: '' };
}


function savedDataform() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if(savedData) {
        refs.email.value = savedData.email;
        refs.message.value = savedData.message;
    }
}

refs.email.setAttribute('required', "");
refs.message.setAttribute('required', "");