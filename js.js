
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


