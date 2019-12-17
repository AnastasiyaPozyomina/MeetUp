
 // яндекс карта

  let mapElem = document.getElementById('map');
  let btnElem = mapElem.querySelector('.btn-map');
  let paneElem = document.getElementById('view-map');
  let rembtnElem = paneElem.querySelector('.remove-button');

// открытие карты через обработчик события и display:block

btnElem.onclick = function() {
  mapElem.classList.toggle('open');
};

  
rembtnElem.onclick = function() {
 mapElem.classList.toggle('open');
};



// Past Event show/hide button

let pasteventBtn = document.querySelector('.past-events-btn');
let griditemsOpen = document.querySelector('.grid-items');

pasteventBtn.onclick = function() {
  if(griditemsOpen.style.display === "grid") {
     griditemsOpen.style.display="none";
     pasteventBtn.innerHTML="View More";
  } else {
    griditemsOpen.style.display="grid";
    pasteventBtn.innerHTML="Hide Images";
  }

}

pasteventBtn();

