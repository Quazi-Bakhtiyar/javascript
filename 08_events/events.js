// study
// type, timestamp, defaulprevent, 
// target , toElement , sourceElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey ,ctrlKey , shiftKey, keyCode , code

document.querySelector("#images").addEventListener("click",function(){
    console.log("ul was clicked")
},false)

document.querySelector('#owl').addEventListener("click",function(e){
    //console.log('owl was clicked! ')
    console.log("owl was clicked!")
    console.log(e.timeStamp)
    e.stopPropagation()
},true)

document.querySelector("#google").addEventListener("click",function(e){
    e.preventDefault()
    console.log("google clicked")
    e.stopPropagation()
},false)
// false is default so can be not written but need to know it.
// attachEvent were also used earlier. 

document.querySelector("#images").addEventListener("click",function(e){
    if(e.target.tagName === 'IMG'){
        console.log(e.target.parentNode.remove())
    }
    
})