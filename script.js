// FASE DI PREPARAZIONE
const portale = 'http://portale2.ov.ingv.it/segnali/';
const main = document.querySelector('main');
const header = document.querySelector('header');
const videoLive = document.querySelector('#video-live');
const OVO_HHZ = document.querySelector('#OVO_HHZ');
const VBKE_HHZ = document.querySelector('#VBKE_HHZ');
const VBKS_HHZ = document.querySelector('#VBKS_HHZ');
const CSTH_EHZ = document.querySelector('#CSTH_EHZ');
const CSOB_HHZ = document.querySelector('#CSOB_HHZ');
const CBAC_HHZ = document.querySelector('#CBAC_HHZ');
const CFMN_HHZ = document.querySelector('#CFMN_HHZ');
const IOCA_HHZ = document.querySelector('#IOCA_HHZ');
const SGG_EHZ = document.querySelector('#SGG_EHZ');
const SORR_HHZ = document.querySelector('#SORR_HHZ');
const STR1_EHE = document.querySelector('#STR1_EHE');
const STRA_EHE = document.querySelector('#STRA_EHE');






//FASE DI INTERAZIONE

OVO_HHZ.addEventListener('click', function(){
  window.open(portale+'OVO_HHZ_attuale.html', "_top");  
});

VBKE_HHZ.addEventListener('click', function(){
  window.open(portale+'VBKE_HHZ_attuale.html', "_top");  
});

VBKS_HHZ.addEventListener('click', function(){
  window.open(portale+'VBKS_HHZ_attuale.html', "_top");  
});

CSTH_EHZ.addEventListener('click', function(){
  window.open(portale+'CSTH_EHZ_attuale.html', "_top");  
});

CSOB_HHZ.addEventListener('click', function(){
  window.open(portale+'CSOB_HHZ_attuale.html', "_top");  
});

CBAC_HHZ.addEventListener('click', function(){
  window.open(portale+'CBAC_HHZ_attuale.html', "_top");  
});

CFMN_HHZ.addEventListener('click', function(){
  window.open(portale+'CFMN_HHZ_attuale.html', "_top");  
});

IOCA_HHZ.addEventListener('click', function(){
  window.open(portale+'IOCA_HHZ_attuale.html', "_top");  
});

SGG_EHZ.addEventListener('click', function(){
  window.open(portale+'SGG_EHZ_attuale.html', "_top");  
});

SORR_HHZ.addEventListener('click', function(){
  window.open(portale+'SORR_HHZ_attuale.html', "_top");  
});

STR1_EHE.addEventListener('click', function(){
  window.open(portale+'STR1_EHE_attuale.html', "_top");  
});

STRA_EHE.addEventListener('click', function(){
  window.open(portale+'STRA_EHE_attuale.html', "_top");  
});


loadPagina();


setTimeout(renderPagina, 4000);


//FUNZIONI

function loadPagina(){
  main.className='loading';
  header.style.display='none';
};

function renderPagina(){
 main.className='screen';
 header.style.display='block';
 
};




// FEED RSS
const feedUrl = encodeURIComponent("https://terremoti.ov.ingv.it/gossip/report.xml");
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`;

fetch(apiUrl)

  .then(response => response.json())
  .then(data => {
    const feedContainer = document.getElementById("rss-feed");

    data.items.slice(0, 5).forEach(item => {
      const div = document.createElement("div");
      div.className = "feed-item";

      div.innerHTML = `
        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
        <p>${item.pubDate}</p>
        <p>${item.description}</p>
      `;

      feedContainer.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Errore nel caricamento del feed RSS:", error);
  });





