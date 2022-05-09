
class Keyboard {
    constructor(){
        this.heading= null;
        this.textarea= null;
        this.main= null;
        this.keysContainer= null;
        this.key= [];
        
    }
        
    init (){
        this.heading = document.createElement("h1");
        this.textarea = document.createElement("textarea");
        this.main = document.createElement("div");
        this.keysContainer = document.createElement("div");

        this.main.classList.add("keyboard");
        this.keysContainer.classList.add("keyboard-keys");
        
        document.body.appendChild(this.heading);
        document.body.appendChild(this.textarea)
        document.body.appendChild(this.main);
        this.main.appendChild(this.keysContainer);
        this.keysContainer.appendChild(this._createKeys());

        this.heading.innerHTML = "Virtual keyboard";
        this.textarea.value = "";

        
        document.addEventListener("keydown", function(event)  {
            document.querySelector("textarea").focus();            
            document.querySelector(`.${event.code.toLowerCase()}`).classList.add("key-animate");      
            
            })

        document.addEventListener("keyup", function(event)  {
            document.querySelector(`.${event.code.toLowerCase()}`).classList.remove("key-animate");
            
            
            })
        document.querySelectorAll(".key").forEach(el=>el.addEventListener("click", function(){
            el.classList.add("key-animate");
            
        }))
        document.querySelectorAll(".key").forEach(el=>el.addEventListener("mouseup", function(){
            el.classList.remove("key-animate")
        }))


        
            
    }

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keysArr = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=", "Backspace",
            "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[", "]", "Del",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
            "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "&#9650;", "Shift",
            "Ctrl", "Win", "Alt", "Space", "Alt", "&#9664;", "&#9660;", "&#9654;", "Ctrl"
        ];
      
        
        keysArr.forEach(key => {
            const keyElement = document.createElement("button");             
        
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("key");
            keyElement.innerHTML = `<span class = "key-icon">${key}</span>`;

              // const obj= new Map ([["`", "Backquote"],
        //             ["Tab", "Tab"], ["CapsLock", "CapsLock"], ["Enter", "Enter"], ["Del","Del"], ["Backspace", "Backspace"], [",","Comma"], ["=", "Equal"],["-", "Minus"], ["&#9664;","ArrowLeft"], ["&#9660;", "ArrowDown"], ["&#9654;","ArrowRight"], ["&#9650;","ArrowUp"]
        // //         ]) ;
        //     if(obj[key]){key.classList.add(obj.get(key))}

            if(key >= 0 && key <=9){
                keyElement.classList.add("digit"+key)
            }

            keyElement.addEventListener("click", function(){keyElement.classList.toggle("key-animate")})
            

            switch(key){
                case "Backspace":
                    keyElement.classList.add("button", "button-dark", "button-wide");                   
                    break;

                case "Tab":
                    keyElement.classList.add("button", "button-dark", "button-medium");
                    keyElement.addEventListener("click", () => {this.textarea.value += " ";
                    this.textarea.focus();});                    
                    break;0
                
                case "Del":
                    keyElement.classList.add("button", "button-dark", "button-medium");
                    keyElement.addEventListener("click", () => this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length-1));                    
                    break;

                case "CapsLock":
                    keyElement.classList.add("button", "button-dark", "button-wide"); 
                    keyElement.addEventListener("click", () => {
                        keyElement.classList.toggle("caps-lock-active", this.textarea.capsLock);
                        this.textarea.capsLock = !this.textarea.capsLock;
                       
                    } )                   
                    break;
                
                case "Shift":
                    keyElement.classList.add("button", "button-dark", "button-wide");
                    break;

                case "Ctrl":
                    keyElement.classList.add("button", "button-dark");
                    break;

                case "Win":
                    keyElement.classList.add("button", "button-dark");                    
                    break;

                case "Alt":
                    keyElement.classList.add("button", "button-dark");                    
                    break;

                case "Space":
                    keyElement.classList.add("button",  "space"); 
                    keyElement.addEventListener("click", () => {this.textarea.value += " ";
                    this.textarea.focus();});
                    break;

                case "Enter":
                    keyElement.classList.add("button", "button-dark", "button-wide"); 
                    keyElement.addEventListener("click", () => {
                        this.textarea.focus();
                        this.textarea.value += "\n"});
                    break;

                case "&#9650;":
                    keyElement.classList.add("button", "button-dark");                    
                    break;

                case "&#9660;":
                    keyElement.classList.add("button", "button-dark");                    
                    break;

                case "&#9654;":
                    keyElement.classList.add("button", "button-dark");                    
                    break;
                
                case "&#9664;":
                    keyElement.classList.add("button", "button-dark");                    
                    break;
                

                default:
                    keyElement.classList.add("button", "button-normal", "key"+key);
                    keyElement.addEventListener("click", () => { this.textarea.focus(); this.textarea.value += key;});
                    break;

            }

            fragment.appendChild(keyElement);
            if(["Backspace", "Del", "Enter"].includes(key)){
                fragment.appendChild(document.createElement("br"));
            }

        })

        return fragment;
           
        }

        
}

    const keyboard = new Keyboard;
window.addEventListener('DOMContentLoaded', function(){
    keyboard.init()})


