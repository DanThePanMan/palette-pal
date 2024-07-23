function convertStyleText(code) {
    return {
        color: `rgb(${code[0]}, ${code[1]}, ${code[2]})`,
    };
}

function convertStyleDiv(code) {
    return {
        backgroundColor: `rgb(${code[0]}, ${code[1]}, ${code[2]})`,
    };
}

export {convertStyleDiv}
export {convertStyleText}