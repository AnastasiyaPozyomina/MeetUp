
 // яндекс карта

  let mapElem = document.getElementById('map');
  let btnElem = mapElem.querySelector('.btn-map');
  let paneElem = document.getElementById('pane');
  let rembtnElem = paneElem.querySelector('.remove-button');

// открытие карты через обработчик события и display:block

btnElem.onclick = function() {
  mapElem.classList.toggle('open');

};

  


// удалениие карты и автоматическая перезагрузка страницы
rembtnElem.onclick = function() {
 mapElem.classList.toggle('open');
};


 
  
     
	
	
