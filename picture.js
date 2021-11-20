function newPicture () {

    const svgPicture = document.getElementById("picture");
    
    let picParts = [];
    
    fetch ("snowman.json")
        .then (response => {return response.json()})
            .then (parts => {
                
                for (part of parts) {
                    const picPart = createSvg(part[0],part[1]);
                    svgPicture.appendChild(picPart);
                    picPart.onclick = () => {picPart.setAttribute("fill", chosenColor)};
                    picParts.push(picPart);
                }
                
            })


}

