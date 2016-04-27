function printLcdDogits(input){
    var digits = buildDigits(input);
    var lcdDigits = buildLcdDigits(digits);
    var lcdDigitsText = buildLcdDigitsText(lcdDigits);
    console.log(lcdDigitsText);
}

function buildDigits(input){
    return input.toString().split('');
}

function buildLcdDigits(digits){
    var lcdDigits = [];
    var allLcddigits = loadAllLcdDigits();
    digits.forEach(function(digit){
        var getLcdDigit = findInAllLcdDigtis(digit,allLcddigits);
        if(getLcdDigit){
            lcdDigits.push(getLcdDigit);
        }
    });
    return lcdDigits;
}

function findInAllLcdDigtis(digit,allLcddigits){
    for (i = 0; i < allLcddigits.length; i++){
        if (allLcddigits[i].digit == digit){
            return allLcddigits[i];
        }
    }
    return false;
}

function buildLcdDigitsText(lcdDigits){
    var lcdDigitsText = '';
    var firstLine = '\n';
    var secendLine = '\n';
    var thirdLine = '\n';
    lcdDigits.forEach(function(lcdDigit){
        firstLine += lcdDigit.lcdDigit[0] + ' ';
        secendLine += lcdDigit.lcdDigit[1] + ' ';
        thirdLine += lcdDigit.lcdDigit[2] + ' ';
    });
    lcdDigitsText += firstLine + secendLine + thirdLine;
    return lcdDigitsText;
}