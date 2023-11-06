let buttons = Array.from(document.querySelectorAll('boton')); 
let display  = document.getElementById("pantalla"); 

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innterText = ''; 
                break;
            case '=':
                try{ 
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = 'Error'
                }
                break;
            case 'DEL':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0.-1);
                }
                break;
                default:
                    display.innerText += e.target.innerText;
        }
    });
});


//output.innerText = eval(output.innerText.replace(/[^-+/*\d]/g, ''));