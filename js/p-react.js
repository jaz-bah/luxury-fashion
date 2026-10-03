// import { h, render } from 'https://esm.sh/preact';
// import htm from 'https://esm.sh/htm';

// const links = document.querySelectorAll('a');

// links.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();

        
        
//         const href = link.getAttribute('href');
//         const url = new URL(href, window.location.origin);
//         const path = url.pathname;
        
//         fetch(path)
//         .then(response => response.text())
//         .then(html => {
//                 const htmlBind = htm.bind(h);
//                 const parser = new DOMParser();
//                 const doc = parser.parseFromString(html, 'text/html');
//                 const content = doc.body.innerHTML;
                
//                 document.body.innerHTML = content;
    
//                 // render(app, document.body);
//                 console.log(doc.body.innerHTML);
//             })
//             .catch(error => {
//                 console.error('Error fetching page:', error);
//             });
//     });
// });

