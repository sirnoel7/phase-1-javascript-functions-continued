function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`;
}

function mondayWork(job = "go to the office") {
    return `This Monday, I will ${job}.`;
}

function wrapAdjective(bold = "*") {
    return function(word = "special") {
        return `You are ${bold}${word}${bold}!`;
    }
}
