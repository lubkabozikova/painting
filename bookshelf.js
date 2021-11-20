// vytvori svg element typu Type s vlastnostami MyObject
// Type je "svg/circle/polygon/..."
// MyObject musi mat tvar {"nazov": "hodnota",
//                         "cx": "50", "fill": "red", ...}}
// svg ulozi do MyObject.svgElement
// ak vadi pomlcka, napriklad stroke-width, staci strcit do uvodzoviek
function createSvg (Type,ParamObject) {
    const svgNS = "http://www.w3.org/2000/svg";
    const SvgElement = document.createElementNS(svgNS,Type);
    for (key in ParamObject) {
        SvgElement.setAttribute(key,ParamObject[key]);
    }
    return SvgElement
}

// vytvori kopiu A
function copy (A) {
    let B = null;
    if (typeof A === "object") {
        B = {};
        for (const key in A) {
            B[key] = copy(A[key]);
        }
    }
    else {
        B = A;
    }
    return B;
}