function shout(string) {
 return string.toUpperCase();    
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const string2 = "Let's have dinner together!"
    const checkForLowerCase = string === string.toLowerCase();
    const checkForUpperCase = string === string.toUpperCase();
    const checkForEqual = string === string2; 

    
    console.log(checkForLowerCase);
    console.log(checkForUpperCase);
    console.log(checkForEqual);

    if (checkForLowerCase)
    {
    return "I can't hear you!"
    }
    else if (checkForUpperCase)
        {
            return "YES INDEED!"
        }
    else if (checkForEqual)
    {
        return "I would love to!"
    }


}