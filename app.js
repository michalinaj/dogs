const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let dogImageUrl = 'https://dog.ceo/api/breed/bulldog/images';
const allBreedsList = document.getElementById('doggie-list');
const dogImageList = document.getElementById('doggie-images');

const getDataFromUrl = (url, processData) => {
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    processData(request.response);
  }
}

const displayBreeds = (jsonObj) => {
  const breeds = jsonObj.message;
  let breedList = [];
  for (breedName in breeds) {
    breedList += '<option value="' + breedName + '">';
  }
  allBreedsList.innerHTML = breedList;
}

const displayDogPics = (jsonObj) => {
  const dogs = jsonObj.message;
  const nineDogImgs = dogs.slice(0, 6);
  dogImageList.innerHTML = ""; // remove "old" doggies
  for (dog of nineDogImgs) {
    const dogPic = document.createElement('li');
    dogPic.className = 'doggie-images-list__item';
    dogPic.innerHTML += `<img src="${dog}" onclick=displayImage("${dog}") />`;
    dogImageList.append(dogPic);
  }
}

const chooseBreed = () => {
  const value = document.getElementById('breed-list').value;
  dogImageUrl = `https://dog.ceo/api/breed/${value}/images`;
  console.log(dogImageUrl);
  getDataFromUrl(dogImageUrl, displayDogPics);

  let input = document.getElementById('breed-list');
}

const clearList = (list) => {
  list.value = "";
}

const displayImage = (url) => {
  const largeDogPic = document.getElementsByClassName('doggie-image__large')[0];
  largeDogPic.innerHTML = `<img src="${url}" />`;
}

const setLargeImg = () => {
  const largeDogPic = document.querySelector('.doggie-image__item');
  const previewPics = document.querySelectorAll('doggie-images-list__item');

  for (pic of previewPics) {
    // pic.addEventListener("click", function() {
    //   const picSrc = this.src;
      console.log('hi');
    // })
  }
//   const smallDogPics = dogImageList.getElementsByTagName('img');
//   let largeDogPic = document.getElementById('doggie-image__item').value;

//   largeDogPic.src = smallDogPics[0].src;
//   const setLargePic = function(largeDogPic.src.split("?"[1]));

//   setLargePic(src) {
//     largeDogPic.src = ''
//   }
}

getDataFromUrl(breedUrl, displayBreeds);
setLargeImg();