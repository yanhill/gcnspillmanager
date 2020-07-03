let simaBt = document.getElementById('simaBt');
let simaMatrixContainer = document.getElementById('simaMatrixContainer');
let simaDisplay = false;
let simaMatrix = document.getElementById('simaMatrix');

simaBt.addEventListener('click', closeEverythingElseTwo);
simaBt.addEventListener('click', toggleSimaMatrix);

function closeEverythingElseTwo(){
  if(maremDisplay){
    maremDisplay = false;
    
    maremContainer.style.display="none";
    maremContainer.style.visibility="hidden";
    consultMaremLink.textContent="Consult Marem";
    containerProposito.style.display="none";
    console.log(simaDisplay);
  }
}

function toggleSimaMatrix(){
    if(simaDisplay){
        simaDisplay = false;
        simaMatrixContainer.style.visibility="hidden";
        simaMatrixContainer.style.display="none";
      //  consultMaremLink.textContent="Consult Marem";
        console.log("off");
    }
    else{
      console.log("cliquei")
        simaDisplay = true;
        simaMatrixContainer.style.visibility="visible";
        simaMatrixContainer.style.display="block";
      //  consultMaremLink.textContent="Close Marem";
        containerProposito.style.display="none";
    }
}



(function resizeSima(){
    let toolBarHeight = toolBar.offsetHeight;
    let descriptionHeight = appDescriptionContainer.offsetHeight;
    console.log(toolBarHeight);
    simaMatrix.style.height= h-(toolBarHeight+descriptionHeight);
    simaMatrix.style.width="100%";
})();