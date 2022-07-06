let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/image/4ca39f0d-d487-40ed-8b71-543c65d2426d.jpg') {
      myImage.setAttribute('src','image/saiyou.png');
    } else {
      myImage.setAttribute('src','image/4ca39f0d-d487-40ed-8b71-543c65d2426d.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
    }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  