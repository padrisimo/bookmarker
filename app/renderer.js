 const newLinkSubmit = document.querySelector('.new-link-form--submit');
 const newLinkForm = document.querySelector('.new-link-form');
 const newLinkUrl = document.querySelector('#new-link-url');

 newLinkUrl.addEventListener('keyup', () =>{
     newLinkSubmit.disabled = !newLinkUrl.validity.valid;
 });
 
 newLinkForm.addEventListener('submit', () =>{
     event.preventDefault();

     const url = newLinkUrl.value;

     fetch(url)
        .then(response => response.text())
        .then(response => console.log(response))
        .catch(error => console.error(error))
 });