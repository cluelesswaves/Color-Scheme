const schemeColor = document.getElementById("schemeColor");
const schemeMode = document.getElementById("schemeMode");
const schemeGetBtn = document.getElementById("schemeGetBtn");
const schemePlaceholder = document.getElementById("schemePlaceholder");

function renderScheme(data) {
    html = "";
    for (color of data.colors) {
        html += `
            <div>
                <div class="color-img" style="background-color:${color.hex.value}"></div>
                <p>${color.hex.value}</p>
            </div>    
        `
    };
    schemePlaceholder.innerHTML = html;
}

schemeGetBtn.addEventListener("click", function(event) {
    event.preventDefault();
    fetch(`https://www.thecolorapi.com/scheme?hex=${schemeColor.value.slice(1)}&mode=${schemeMode.value.toLowerCase()}`)
        .then(res => res.json())
        .then(data => renderScheme(data));
});

