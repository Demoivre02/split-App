const Bill= document.querySelector("#bill")
const People = document.querySelector("#number")
const five= document.querySelector(".five")
const ten= document.querySelector(".ten")
const fifteen= document.querySelector(".fifteen")
const twenty5= document.querySelector(".twenty-five")
const fifty= document.querySelector(".fifty")
const custom= document.querySelector(".custom")
const tip= document.querySelector(".tip")
const total= document.querySelector(".total") 
const Reset= document.querySelector(".lite")

function handleInput(){
    var p= People.value
    var n = Bill.value  
    var x;
}
function fivepercent(){
    var p= People.value
    x= Bill.value 
    var n = Bill.value
    if(People.value == ""){
        alert("Please input the number of people before selecting Tip")
    }else{
       
        tip.innerHTML= Math.round( (((5/100)*n)/p))
        let ToatlAmount= Math.round( (+((5/100)*n) + +x))
        total.innerHTML=Math.round( ToatlAmount/p)
    }
}


function tenpercent(){
    var p=  People.value
    x= Bill.value
    var n = Bill.value  
    if(People.value == ""){
        alert("Please input the number of people before selecting Tip")
    }else{
       
        tip.innerHTML= Math.round( (((10/100)*n)/p))
        let ToatlAmount=Math.round( (+((10/100)*n) + +x))
        total.innerHTML= Math.round( ToatlAmount/p)
    }
}
function fifteenpercent(){
    var p=  People.value
    x= Bill.value
    var n = Bill.value  
    if(People.value == ""){
        alert("Please input the number of people before selecting Tip")
    }else{
       
        tip.innerHTML= Math.round( (((15/100)*n)/p))
        let ToatlAmount=Math.round( (+((15/100)*n) + +x))
        total.innerHTML=Math.round( ToatlAmount/p)
    }
   
}
function twentyfivepercent(){
    var p=  People.value
    x= Bill.value
    var n = Bill.value  
    if(People.value == ""){
        alert("Please input the number of people before selecting Tip")
    }else{
       
        tip.innerHTML=Math.round( (((25/100)*n)/p))
        let ToatlAmount=Math.round( (+((25/100)*n) + +x))
        total.innerHTML=Math.round( ToatlAmount/p)
    }
}
function fiftypercent(){
    var p=  People.value  
    x= Bill.value
    var n = Bill.value  
    if(People.value == ""){
        alert("Please input the number of people before selecting Tip")
    }else{
       
        tip.innerHTML=Math.round( (((50/100)*n)/p))
        let ToatlAmount=Math.round( (+((50/100)*n) + +x))
        total.innerHTML=Math.round( ToatlAmount/p)
    }
}

function toogleTheme(){
  let envelope=  document.querySelector(".firstchild")
  let Conainer= document.querySelector(".envelope")
  let basket= document.querySelector(".container")
  envelope.classList.toggle("themeChanger")
  Conainer.classList.toggle("themeChanger")
  basket.classList.toggle("themeChanger")

}

function Reload(){
    document.location.reload()
}












