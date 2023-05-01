var noticeAlert = document.querySelector('.notice'); 
var textateaGenerate = document.querySelector('#story'); 
var parentFocus = document.querySelector('.input-background')  
var btnHundle = document.querySelector('#hundleClick');
var btnGenerate = document.querySelector('#generateTxt');
var inputHideTags = document.querySelector('#inputTags');
var parentP = document.querySelector('.wrapper-sorbet p') 
var text = document.querySelector('p')

function createP(){  
        parentP.innerHTML = '<div>' + textateaGenerate.value + '</div>'
        var selectDATAtext = document.querySelector('.wrapper-sorbet p div')
        text.style.color = "#ceb40c"
        tabsTxt = parentP.innerText.split(' ')
        tableau = Array(tabsTxt.length)
        for(var i = 0; i < tabsTxt.length; i = i + 1){
            selectDATAtext.style.display = 'none'
            var span = document.createElement("span")
            listSpan = parentP.appendChild(span)
            listSpan.className = "spanTags"
            listSpan.innerHTML = " " + tabsTxt[i] + " ";
        }
    }

function hundlehideTexte(){
    var valeur = inputHideTags.value;
    var index = retrieve(tabsTxt, valeur);
        if(tabsTxt.at(index) == valeur){
            noticeAlert.textContent = "Vous avez entré le mot '" 
            + valeur + "' dans le tableau.";
            noticeAlert.style.color = "rgb(97 243 74)";
            parentFocus.style.border = "2px solid rgb(97 243 74)";
            parentFocus.style.boxShadow = "rgb(67 255 98 / 25%) 0px 0px 0px 0.2rem";
        if(tableau.indexOf(valeur) === -1){
            var spans = document.querySelectorAll('.spanTags')
                for(var j = 0; j < spans.length; j = j + 1){ 
                    spans[index].style.textDecorationColor = '#fbea5b';
                    spans[index].style.textDecorationThickness = '1rem';
                    spans[index].style.textDecorationLine = 'line-through'           
            function hundleRemove(){
                divs = document.querySelector('.sorbetTags')
                console.log(divs.remove(divs))
                spans[index].style.textDecorationLine = 'none' } }
            console.log('Le nouveau tableau est : ' + createTags(valeur));
            var boutton = document.querySelector('.circleCroix')
                boutton.addEventListener('click', hundleRemove)
        } if(tableau.indexOf(valeur) > -1){
            noticeAlert.textContent = "Vous avez deja entré le mot '" 
            + valeur + "' dans le tableau !";
            noticeAlert.style.color = "#00cbff";
            parentFocus.style.border = "2px solid #00cbff";
            parentFocus.style.boxShadow = "rgb(0 196 255 / 25%) 0px 0px 0px 0.2rem";
            console.log(valeur + ' existe déjà dans le tableau.');
            return false }
            tableau.splice(index, 1, tabsTxt.at(index))
            } if(tabsTxt.at(index) != valeur){
            noticeAlert.style.color = "red";
            noticeAlert.textContent = "Vous avez entré aucun mot dans le champ !";
            parentFocus.style.border = "2px solid red";
            parentFocus.style.boxShadow = "0 0 0 0.2rem rgb(255 0 0 / 25%)";
            console.log(tableau.splice(0, 0))
            return false
        }
    }

function createTags(paramText){
        divs = document.createElement("div");
        divs.className = "circleCroix";
    var newDiv = document.createElement("span");
    var newContent = document.createTextNode(paramText);
        newDiv.appendChild(newContent);
        parentFocus.appendChild(newDiv)
        newDiv.appendChild(divs)
        newDiv.className = "sorbetTags";
        parentFocus.insertAdjacentElement('afterbegin', newDiv);
        return paramText
    }

function retrieve(arr, val){  return arr.indexOf(val) }

btnHundle.addEventListener('click', hundlehideTexte)
btnGenerate.addEventListener('click', createP)
