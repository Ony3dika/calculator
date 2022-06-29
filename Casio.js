let value=document.querySelector(".inn")

let display=document.querySelector(".mad")

let button=Array.from( document.querySelectorAll("#calc"))

// button.forEach(run, addEventListener("click", run))

// function run(e){
//    button.value=button.innerText

//    console.log(run.value)
// }

button.map( button =>{
    button.addEventListener("click", (e) =>{
        switch(e.target.innerText){

            case "AC":
                value.innerText = "";
                display.innerText="";
                break;
        
            case "M+":
                value.innerText = "";
                display.innerText="";
                break;
            
            case "S>D":
                display.innerText=value.innerText.toFixed(1);
                break;

            case "X":
                value.innerText +="*"
                break;

            case "=":
                display.innerText=eval(value.innerText)
                break;

            case "DEL":
                value.innerText=value.innerText.slice(0, -1)
                break;

            case "log":
                display.innerText=value.innerText/10
                break;
            
            case "sqr":
                display.innerText =Math.sqrt(value.innerText)  
                break;  
                 
            case "x2":
                display.innerText=Math.pow(value.innerText,2)
                break;

            case "sin":
                value.innerText=Math.sin(value.innerText,2)
                break;

            case "cos":
                value.innerText=Math.cos(value.innerText,2)
                break;

            case "tan":
                value.innerText=Math.tan(value.innerText,2)
                break; 

            case "in":
                display.innerText=parseInt(value.innerText)
                break;

            case "x-1":
                display.innerText = 1/value.innerText
                break;

            default:
                value.innerText += e.target.innerText
        }
    });
});
