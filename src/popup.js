'use strict';

import './popup.css';

let siteDetails;
const root = document.querySelector('.app');
const header = document.createElement('h1');
header.innerText = 'Email Credit Control?';
const yesButton = document.createElement('button');
yesButton.title = 'Yes Please';
yesButton.innerText = 'Yes please!'
yes

root.appendChild(header);
root.appendChild(yesButton);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
if(request.type === 'SITE') {
    siteDetails = request.payload.name
    console.log(siteDetails)
  }
  console.log(request)
});