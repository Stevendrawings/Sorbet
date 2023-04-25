// var texte = document.querySelector('p');  
// var noticeAlert = document.querySelector('.notice'); 
// var parentTag = document.querySelector('.inputBackground'); 
// var btnHundle = document.querySelector('#hundleClick');
// var inputHideTags = document.querySelector('#inputTags');
// var tabsTxt = texte.innerHTML.toLowerCase().split(' ');

// function hundlehideTexte(){
// var valeur = inputHideTags.value 
//     for(var i = 0; i < tabsTxt.length; i = i + 1){
//         var result = tabsTxt.filter(function(els){
//                 if(valeur != ""){
//                     parentTag.style.borderColor = "#2ecc71";
//                     noticeAlert.style.color = "#2ecc71";
//                     noticeAlert.textContent = 'Le texte à été trouvé.'
//                     return els.indexOf(valeur) != -1
//                 } if(valeur == ""){
//                     parentTag.style.borderColor = "#e84118";
//                     noticeAlert.style.color = "#e84118";
//                     noticeAlert.textContent = 'Il n\'y a aucun texte dans le champ !'
//                 }
//             })
//         } 
//         console.log(createTags(result))
//     }

// function createTags(paramText){
//     var newDiv = document.createElement("span");
//     var newContent = document.createTextNode(paramText);
//         newDiv.appendChild(newContent);
//         parentTag.appendChild(newDiv)
//         return paramText;
// }

// btnHundle.addEventListener('click', hundlehideTexte)

// -------------------------------------------------------------------------

// var texte = document.querySelector('p');  
// var noticeAlert = document.querySelector('.notice'); 
// var parentTag = document.querySelector('.inputBackground'); 
// var btnHundle = document.querySelector('#hundleClick');
// var inputHideTags = document.querySelector('#inputTags');
// var tabsTxt = texte.innerHTML.toLowerCase().split(' ');
// var emptys = texte.innerHTML.toLowerCase().split(' ');
// var emptysTabs = emptys.fill('', 0, emptys.length);

// function hundlehideTexte(){
// var valeur = inputHideTags.value 
// var index = retrieve(tabsTxt, valeur)
//     if(valeur == ''){
//         parentTag.style.borderColor = "#e84118";
//         noticeAlert.style.color = "#e84118";
//         noticeAlert.textContent = 'Il n\'y a aucun texte dans le champ !'
//     } else if(valeur != ''){
//         emptysTabs.splice(index, 1, tabsTxt.at(index)) 
//     } 
    // var result = foo(tabsTxt, emptys[index])
    // createTags(result)
//     console.log(emptys)
// }

// function foo(arr, val){
//     if(arr.includes(val) !== val){
//         console.log('Le nouveau tableau est : ' + val);
//     } else if(arr.includes(val) === val){
//         console.log(val + ' existe déjà dans le tableau.');
//         return false
//     }
// }

// function createTags(paramText){
//     var newDiv = document.createElement("span");
//     var newContent = document.createTextNode(paramText);
//         newDiv.appendChild(newContent);
//         parentTag.appendChild(newDiv)
//         return paramText;
// }

// function retrieve(arr, val){
//     return arr.indexOf(val)
// }

// btnHundle.addEventListener('click', hundlehideTexte)

// ---------------------------------------------------------------------------

// var texte = document.querySelector('p');  
// var noticeAlert = document.querySelector('.notice'); 
// var parentTag = document.querySelector('.inputBackground'); 
// var btnHundle = document.querySelector('#hundleClick');
// var inputHideTags = document.querySelector('#inputTags');
// var tabsTxt = texte.innerHTML.toLowerCase().split(' ');
// var emptys = texte.innerHTML.toLowerCase().split(' ');
// for (var i = 0; i < emptys.length; emptys[i++] = '');


// function hundlehideTexte(){
//     var valeur = inputHideTags.value 
//     var index = emptys.indexOf(valeur)
//     emptys.splice(index, 1, tabsTxt.at(index))
//     console.log(emptys)
// }

// btnHundle.addEventListener('click', hundlehideTexte)

// ---------------------------------------------------------------------------

// var texte = document.querySelector('p');  
// var noticeAlert = document.querySelector('.notice'); 
// var parentTag = document.querySelector('.inputBackground'); 
// var btnHundle = document.querySelector('#hundleClick');
// var inputHideTags = document.querySelector('#inputTags');
// var tabsTxt = texte.innerHTML.toLowerCase().split(' ');
// var emptys = texte.innerHTML.toLowerCase().split(' ');
// var arr = Array(emptys.length);

// function hundlehideTexte(){
//     var valeur = inputHideTags.value 
//     var index = retrieve(tabsTxt, valeur)
//     arr.splice(index, 1, tabsTxt.at(index))
//     console.log(arr)
// }

// function retrieve(arr, val){
//     return arr.indexOf(val)
// }

// btnHundle.addEventListener('click', hundlehideTexte)

// -----------------------------------------------------------------------------

var texte = document.querySelector('p');  
var noticeAlert = document.querySelector('.notice'); 
var parentTag = document.querySelector('.inputBackground'); 
var btnHundle = document.querySelector('#hundleClick');
var inputHideTags = document.querySelector('#inputTags');
var tabsTxt = texte.innerHTML.toLowerCase().split(' ');
var tableau = Array(tabsTxt.length)

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

function retrieve(arr, val){ 
    return arr.indexOf(val) 
}

btnHundle.addEventListener('click', hundlehideTexte)