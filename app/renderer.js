const newLinkUrl = document.querySelector('#new-link-url');
const newLinkSubmit = document.querySelector('.new-link-form--submit');
const newLinkForm = document.querySelector('.new-link-form');
const linkTemplate = document.querySelector('#link-template');
const linksSection = document.querySelector('.links');

newLinkUrl.addEventListener('keyup', () =>{
     newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});

const addToPage = ({title, url}) => {
    const newLink = linkTemplate.content.cloneNode(true);
    const titleElement = newLink.querySelector('.link--title');
    const urlElement = newLink.querySelector('.link--url');
    
    titleElement.textContent = title;
    urlElement.href = url;
    urlElement.textContent = title;

    linksSection.appendChild(newLink);
    return { title, url };

};

const parser = new DOMParser();
const parseResponse = (text) => parser.parseFromString(text, 'text/html');
const findTitle = (nodes) => nodes.querySelector('title').textContent;

newLinkForm.addEventListener('submit', () =>{
     event.preventDefault();

     const url = newLinkUrl.value;

     fetch(url)
        .then(response => response.text())
        .then(parseResponse)
        .then(findTitle)
        .then(title => ({ title, url}))
        .then(addToPage)
        .then(title => console.log(title))
        .catch(error => console.error(error));
});