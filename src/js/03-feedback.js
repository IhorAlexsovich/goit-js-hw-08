import throttle from 'lodash/throttle';
const fieldDatas = document.querySelector('.feedback-form');



const STORAGE_KEY = 'feedback-form-state';
fieldDatas.addEventListener('input', throttle(onInputText, 500));

function checkingStorageForDatas() {

  const savedDatas = localStorage.getItem(STORAGE_KEY);
  if (savedDatas) {
    const parsedSavedDatas = JSON.parse(savedDatas);

    fieldDatas.email.value = parsedSavedDatas.email;
    fieldDatas.message.value = parsedSavedDatas.message;
    return parsedSavedDatas;
  } 
}
checkingStorageForDatas();

let inputDatas = checkingStorageForDatas() || { email: '', message: '' };

function onInputText(event) {
  inputDatas[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputDatas));
}

fieldDatas.addEventListener('submit', onFormSubmit)
function onFormSubmit(event){
  event.preventDefault()
   
  if (localStorage.length) {
    const getSavedDatas = localStorage.getItem(STORAGE_KEY);
    const parsedSubmitData = JSON.parse(getSavedDatas);
    console.log(parsedSubmitData);
    
  } else {
    return;
  }
  event.currentTarget.reset()
   localStorage.removeItem(STORAGE_KEY);
  inputDatas.email = '';
  inputDatas.message = '';
}