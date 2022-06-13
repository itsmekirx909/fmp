var modBod = document.getElementById('modBod')
var logBtnn = document.getElementById('logBtnn')
var logInn = document.getElementById('logInn')
var sigInp = document.getElementById('sigInp')
var logSig = document.getElementById('logSig')
var form = document.getElementById('form')
var submit = document.getElementById('submit')

var loginBtn = document.getElementById('loginBtn')
var signUpBtn = document.getElementById('signUpBtn')


function logBtn(e){


loginBtn.className = 'hide'
signUpBtn.className = 'btn btn-outline-info logSi'


logInn.className = 'show'
logBtnn.className = 'show'
logBtnn.setAttribute('data-dismiss' , "modal")
sigInp.className = 'hide'
 
}

function signBtn(e){


    loginBtn.className = 'btn btn-outline-primary logSi'
    signUpBtn.className = 'hide'

logInn.className = 'show'
logBtnn.className = 'show'
logBtnn.setAttribute('data-dismiss' , "modal")
sigInp.className = 'form-group'

}

function sub(){
    logSig.className += ' hide'
}



function submitFeed(){
    form.className += ' hide'
    submit.className = ''
}

