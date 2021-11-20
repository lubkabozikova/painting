function newControlPanel () {

    const divControls = document.getElementById("controlPanel");
    const colorPickers = [];

    fetch ("colors.json")
        .then (response => {return response.json()})
            .then (colors => {
                for (color of colors) {
                    const divColor = document.createElement("div");
                    divControls.appendChild(divColor);
                    divColor.className = "colorPicker";
                    divColor.style["background-color"] = color;

                    colorPickers.push({
                        dot: divColor,
                        color: color
                    })

                }

                colorPickers.forEach(colorPicker => {
                    
                    colorPicker.dot.onclick = () => {chosenColor = colorPicker.color;};
                });

                console.log(colorPickers);
            })


}

