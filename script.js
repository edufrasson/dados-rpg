function girarDadoD20(resD20){    
        resD20 = Math.floor(Math.random() * 20) + 1     
        document.getElementById("box-res-20").innerHTML = resD20
}

function girarDadoD100(resD100){
    resD100 = Math.floor(Math.random() * 100) + 1
    document.getElementById("box-res-100").innerHTML = resD100
}

function girarDadoD4(resD4){
    resD4 = Math.floor(Math.random() * 4) + 1
    document.getElementById("box-res-4").innerHTML = resD4
}

function girarDadoD10(resD10){
    resD10 = Math.floor(Math.random() * 10) + 1
    document.getElementById("box-res-10").innerHTML = resD10
}

function girarDadoD12(resD12){
    resD12 = Math.floor(Math.random() * 12) + 1
    document.getElementById("box-res-12").innerHTML = resD12
}

function girarDadoD6(resD6){
    resD6 = Math.floor(Math.random() * 6) + 1
    document.getElementById("box-res-6").innerHTML = resD6
}

function Limpar(){    
    document.getElementById("box-res-20").innerHTML = " "
    document.getElementById("box-res-100").innerHTML = " "
    document.getElementById("box-res-4").innerHTML = " "
    document.getElementById("box-res-10").innerHTML = " "
    document.getElementById("box-res-12").innerHTML = " "
    document.getElementById("box-res-6").innerHTML = " "
}




































