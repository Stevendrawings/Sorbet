var texte = document.querySelector('p');  
var noticeAlert = document.querySelector('.notice'); 
var parentTag = document.querySelector('.inputBackground') 
var parentFocus = document.querySelector('.input-background')
var btnHundle = document.querySelector('#hundleClick');
var inputHideTags = document.querySelector('#inputTags');
var tabsTxt = texte.innerHTML.toLowerCase().split(' ');
var tableau = Array(tabsTxt.length)

function eventListetterFocus(){
    parentFocus.style.borderColor = "#e84118";
    parentFocus.style.boxShadow = "rgba(255, 0, 0, 0.353)";
}

function hundlehideTexte(){
    var valeur = inputHideTags.value   
    var index = retrieve(tabsTxt, valeur);
        if(tabsTxt.at(index) == valeur){
            if(tableau.indexOf(valeur) === -1){
                console.log('Le nouveau tableau est : ' 
                + createTags(valeur));
            } if(tableau.indexOf(valeur) > -1){
                console.log(valeur 
                + ' existe déjà dans le tableau.');
                return false
            }
            tableau.splice(index, 1, tabsTxt.at(index))
            console.log(tableau)
        } if(tabsTxt.at(index) != valeur){
            parentFocus.style.border = "2px solid red";
            parentFocus.style.boxShadow = "0 0 0 0.2rem rgb(255 0 0 / 25%)";
            parentFocus.style.backgroundColor = "#ffebeb";
            console.log(tableau.splice(0, 0))
            return false
        }
    }

function createTags(paramText){
    var newDiv = document.createElement("span");
    var newContent = document.createTextNode(paramText);
        newDiv.appendChild(newContent);
        parentTag.appendChild(newDiv)
        return paramText;
    }

function retrieve(arr, val){ return arr.indexOf(val) }

btnHundle.addEventListener('click', hundlehideTexte)
inputHideTags.addEventListener('click', eventListetterFocus)