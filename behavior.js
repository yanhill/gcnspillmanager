let maremWindow = document.getElementById('maremWindow');
let consultMaremBt = document.getElementById('consultMaremBt');
let maremContainer = document.getElementById('maremContainer');
let consultMaremLink = document.getElementById('consultMaremLink')
let toolBar = document.getElementById('toolBar');
let appDescriptionContainer = document.getElementById('appDescriptionContainer');
let containerProposito = document.getElementById('containerProposito');

let h = innerHeight;
let w = innerWidth;

let maremDisplay = false;

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

consultMaremBt.addEventListener('click', openMarem);
consultMaremBt.addEventListener('click', closeEverythingElse);
