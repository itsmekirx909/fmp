var modBod = document.getElementById('modBod')
var logBtnn = document.getElementById('logBtnn')
var logInn = document.getElementById('logInn')
var sigInp = document.getElementById('sigInp')
var logSig = document.getElementById('logSig')


function logBtn(e){
var par = e.parentNode.childNodes
console.log(par)
par[1].remove()
par[4].remove()

logInn.className = 'show'
logBtnn.className = 'show'
logBtnn.setAttribute('data-dismiss' , "modal")
 
}

function signBtn(e){
    var par = e.parentNode.childNodes
console.log(par)
par[1].remove()
par[4].remove()

logInn.className = 'show'
logBtnn.className = 'show'
logBtnn.setAttribute('data-dismiss' , "modal")
sigInp.className = 'form-group'

}

function sub(){
    logSig.className += ' hide'
}



function submitFeed(){
    
}

