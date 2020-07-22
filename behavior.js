let maremWindow = document.getElementById('maremWindow');

let consultMaremBt = document.getElementById('consultMaremBt');
let consultRocBt = document.getElementById('consultRocBt');

let maremContainer = document.getElementById('maremContainer');
let consultMaremLink = document.getElementById('consultMaremLink')
let toolBar = document.getElementById('toolBar');
let appDescriptionContainer = document.getElementById('appDescriptionContainer');
let containerProposito = document.getElementById('containerProposito');

let h = innerHeight;
let w = innerWidth;

let maremDisplay = false;

window.addEventListener('resize', checkWindowSize);

function checkWindowSize(){
    h = innerHeight - (appDescriptionContainer.offsetHeight + toolBar.offsetHeight);
    w = innerWidth;
    consultGnomeWindow.style.height = h;

}

(function resizeMarem(){
    let toolBarHeight = toolBar.offsetHeight;
    let appDespriptionHeight = appDescriptionContainer.offsetHeight;

    console.log(toolBarHeight);
    maremWindow.style.height=h-(toolBarHeight+appDespriptionHeight);
    maremWindow.style.width="100%";
})();

function switchMarem(){
    maremDisplay = !maremDisplay;
}

(function resizeProposito(){
    let toolBarHeight = toolBar.offsetHeight;
    let appDespriptionHeight = appDescriptionContainer.offsetHeight;
    containerProposito.style.height=h-(toolBarHeight+appDespriptionHeight);
    
})();

function openMarem(){
    if(this.id == "consultMaremBt"){
        maremWindow.data="https://abep.maps.arcgis.com/apps/webappviewer/index.html?id=e1a7af33b5ec4c4a95db1f85079903ca";
    }else if(this.id == "consultRocBt"){
        maremWindow.data="https://www.genwest.com/resources/roc/roc.html";
    }

    if(maremDisplay){
        maremDisplay = false;
        maremContainer.style.display="none";
        maremContainer.style.visibility="hidden";
        consultMaremLink.textContent="Consult Marem";
        console.log("off");

        if(!simaDisplay){
        containerProposito.style.display="flex";
        }
    }
    else{
        maremDisplay = true;
        maremContainer.style.display="block";
        maremContainer.style.visibility="visible";
        consultMaremLink.textContent="Close Marem";

        containerProposito.style.display="none";

        console.log("cliquei")
    }
}

function closeEverythingElse(){
    if(simaDisplay){
        simaDisplay = false;
        simaMatrixContainer.style.visibility="hidden";
        simaMatrixContainer.style.display="none";
        console.log("off");
    }
};

consultRocBt.addEventListener('click', openMarem);
consultMaremBt.addEventListener('click', openMarem);
consultMaremBt.addEventListener('click', closeEverythingElse);
