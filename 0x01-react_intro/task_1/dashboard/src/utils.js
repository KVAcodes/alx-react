function getFullYear() {
    const currentDate  = new Date();
    return(currentDate.getFullYear());
}

function getFooterCopy(isIndex) {
    if (isIndex){
        return("Holberton School");
    }
    return("Holberton School main dashboard");
}

const functions = {
    getFullYear,
    getFooterCopy
};

export default functions;