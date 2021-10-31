const divPage = document.createElement("div");
document.body.appendChild(divPage);
const svgPicture = createSvg("svg",{"width":500, "height":500, "fill":"white", "stroke":"black", "stroke-width":"4"});
divPage.appendChild(svgPicture);

let picParts = [];

fetch ("butterfly.json")
    .then (response => {return response.json()})
        .then (parts => {
            
            for (part of parts) {
                const picPart = createSvg(part[0],part[1]);
                svgPicture.appendChild(picPart);
                picPart.onclick = () => {picPart.setAttribute("fill", "red")};
                picParts.push(picPart);
            }

            // picParts[7].setAttribute("fill","red");
            
        })
