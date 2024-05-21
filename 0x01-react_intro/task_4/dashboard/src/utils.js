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

function getLatestNotification() {
    return("<strong>Urgent requirement</strong> - complete by EOD");
}

const functions = {
    getFullYear,
    getFooterCopy,
    getLatestNotification
};

export default functions;