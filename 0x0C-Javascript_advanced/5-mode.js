function changeMode(size, weight, transform, background, color){
    return function(){
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.background = background;
        document.body.style.textTransform = transform;
        document.body.style.color = color;
    }   
}

function main(){
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    document.write("<p>Welcome Holberton!</p>");
    document.write("<button id=spooky>Spooky</button>");
    document.write("<button id=dark>Dark mode</button>");
    document.write("<button id=scream>Scream mode</button>");
    document.getElementById("spooky").addEventListener("click", spooky);
    document.getElementById("dark").addEventListener("click", darkMode);
    document.getElementById("scream").addEventListener("click", screamMode);

}



main();

