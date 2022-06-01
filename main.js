var countriesDict = {
    AF: 'Afghanistan',
    AL: 'Albania',
    DZ: 'Algeria',
    AD: 'Andorra',
    AO: 'Angola',
    AG: 'Antigua and Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas',
    BH: 'Bahrain',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BT: 'Bhutan',
    BO: 'Bolivia',
    BA: 'Bosnia and Herzegovina',
    BW: 'Botswana',
    BR: 'Brazil',
    VG: 'British Virgin Islands',
    BN: 'Brunei Darussalam',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    CV: 'Cape Verde',
    CF: 'Central African Republic',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    CO: 'Colombia',
    KM: 'Comoros',
    CG: 'Congo',
    CR: 'Costa Rica',
    HR: 'Croatia',
    CU: 'Cuba',
    CW: 'Curaçao',
    CY: 'Cyprus',
    CZ: 'Czech Republic',
    CD: 'Democratic Republic of the Congo',
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    EE: 'Estonia',
    ET: 'Ethiopia',
    FM: 'Federated States of Micronesia',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    GF: 'French Guiana',
    GA: 'Gabon',
    GM: 'Gambia',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GT: 'Guatemala',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran',
    IQ: 'Iraq',
    IE: 'Ireland',
    IL: 'Israel',
    IT: 'Italy',
    CI: 'Ivory Coast',
    JM: 'Jamaica',
    JP: 'Japan',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    XK: 'Kosovo',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: 'Laos',
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MK: 'Macedonia',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Islands',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    MX: 'Mexico',
    MD: 'Moldova',
    MC: 'Monaco',
    MN: 'Mongolia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger',
    NG: 'Nigeria',
    NU: 'Niue',
    KP: 'North Korea',
    MP: 'Northern Mariana Islands',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestine',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines',
    PN: 'Pitcairn Islands',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    RO: 'Romania',
    RU: 'Russia',
    RW: 'Rwanda',
    KN: 'Saint Kitts and Nevis',
    LC: 'Saint Lucia',
    VC: 'Saint Vincent and the Grenadines',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'São Tomé and Príncipe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    ZA: 'South Africa',
    KR: 'South Korea',
    SS: 'South Sudan',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan',
    SR: 'Suriname',
    SZ: 'Eswatini',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syria',
    TW: 'Taiwan',
    TJ: 'Tajikistan',
    TZ: 'Tanzania',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad and Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks and Caicos Islands',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates',
    GB: 'United Kingdom',
    US: 'United States',
    VI: 'United States Virgin Islands',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VA: 'Vatican City',
    VE: 'Venezuela',
    VN: 'Vietnam',
    WF: 'Wallis and Futuna',
    EH: 'Western Sahara',
    YE: 'Yemen',
    ZM: 'Zambia',
    ZW: 'Zimbabwe'
};

//countries that were too small to be clicked normally and needed a dot
//countries that might need to be added: Aruba, Curacao, Liechtenstein, Andorra, Monaco, Vatican City, San Marino, Singapore, Hong Kong
countryCirclesDict = {
    MV: ['Maldives', 1375, 540],
    TV: ['Tuvalu', 1970, 625],
    NR: ['Nauru', 1902, 575],
    TK: ['Tokelau', 2030, 630],
    KI: ['Kiribati', 2080, 545],
    NU: ['Niue', 2040, 690],
    MP: ['Northern Mariana Islands', 1790, 470],
    FM: ['Federated States of Micronesia', 1860, 520],
    PW: ['Palau', 1725, 525],
    MH: ['Marshall Islands', 1920, 510],
    PN: ['Pitcairn Islands', 310, 725],
    TO: ['Tonga', 2010, 710],
    WS: ['Samoa', 2025, 660],
    WF: ['Wallis and Futuna', 1990, 665]
}

panhandlesDict = {
    AK: ['Alaska', 350, 190],
    FL: ['Florida', 510, 365],
    CP: ['Cibitoke Province', 1133, 588],
    SR: ['Southern Red Sea Region', 1200, 482],
    TP: ['Tete Province', 1150, 660],
    CN: ['Caprivi Strip', 1090, 680],
    FN: ['Far North Province', 1045, 490],
    CS: ['Casamance', 880, 482],
    OP: ['Ontario Peninsula', 550, 285],
    AC: ['Amazonas', 600, 550],
    PD: ['Petén Department', 468, 452],
    SS: ['Seven Sister States', 1475, 395],
    CB: ['Chittagong Division', 1475, 420],
    ST: ['Southern Thailand', 1523, 510],
    KR: ['Kamchatka', 1710, 210],
    DN: ['Dubrovnik-Neretva', 1056, 291],
    OK: ['Oklahoma Panhandle', 430, 340]
}

const countryMapper = (country) => countriesDict[country] || "No Country of that ID";
const countryCircleMapper = (country) => countryCirclesDict[country] || "No Circle of that ID";
var timeInterval;
var colorPingInterval;

var changeGameMode = function(selectedObject) {
    resetTime();
    
    //check if confetti exists before clearing
    if (typeof confetti != "undefined") {
        confetti.clear();
     }

    if(selectedObject.value == "world")
    {
        startWorldGeography();
    }
    else if(selectedObject.value == "panhandles")
    {
        startPanhandlesGeography();
    }
    else if(selectedObject.value == "explore")
    {
        startExploreGeography();
    }
}

//confetti variables
var confettiSettings;
var confetti;

//variables shared by two game modes
var currentGameMode = "none";
var goal = ""
var score = 0;
var wrongGuesses = 0;
var countriesToGuess = [];
var colorChangeID = "";

//method to start and play world geography
function startWorldGeography() {
    document.getElementById("panhandlesMap").innerHTML = "";
    new svgMap({
        targetElementID: 'panhandlesMap',
        hideFlag: true,
        hideToolTip: true,
        data: color,
        mouseWheelZoomEnabled: true,
        mouseWheelZoomWithKey: true
      });

    currentGameMode = "world";
    goal = "";
    score = 0;
    countriesToGuess = [];
    updateScore();

    //update countries list
    for (var key in countriesDict) {
        var val = countriesDict[key];
        countriesToGuess.push(val);
    }

    //spawn all clickable circle countries (countries that are too small to appear normally)
    for (const [key, arr] of Object.entries(countryCirclesDict)) 
    {
        posX = arr[1];
        posY = arr[2];

        var elem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        elem.setAttribute('height', '13');
        elem.setAttribute('width', '13');
        elem.setAttribute('x', `${posX}`);
        elem.setAttribute('y', `${posY}`);
        elem.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        elem.setAttribute('id', arr[0]);
        elem.setAttribute("onclick", `circleClick("${arr[0]}");`);
        elem.innerHTML = '<circle cx="6.5" cy="6.5" r="4.5" stroke="black" fill="white" />';
        document.getElementsByClassName("svg-pan-zoom_viewport")[0].appendChild(elem);
    }

    chooseRandomCountry();

    timeInterval = setInterval(setTime, 1000);
}

//method to start and play panhandles geography
function startPanhandlesGeography() {
    document.getElementById("panhandlesMap").innerHTML = "";
    new svgMap({
        targetElementID: 'panhandlesMap',
        hideFlag: true,
        hideToolTip: true,
        preventHover: true,
        data: color,
        mouseWheelZoomEnabled: true,
        mouseWheelZoomWithKey: true
      });

    currentGameMode = "panhandles";
    goal = "";
    score = 0;
    countriesToGuess = [];
    updateScore();
    
    //spawn all clickable circles
    for (const [key, arr] of Object.entries(panhandlesDict)) 
    {
        posX = arr[1];
        posY = arr[2];

        var elem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        elem.setAttribute('height', '20');
        elem.setAttribute('width', '20');
        elem.setAttribute('x', `${posX}`);
        elem.setAttribute('y', `${posY}`);
        elem.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        elem.setAttribute('id', arr[0]);
        elem.setAttribute("onclick", `circleClick("${arr[0]}");`);
        elem.innerHTML = '<circle cx="10" cy="10" r="8" stroke="black" fill="white" />';
        document.getElementsByClassName("svg-pan-zoom_viewport")[0].appendChild(elem);

        countriesToGuess.push(arr[0]);
    }

    chooseRandomCountry();

    timeInterval = setInterval(setTime, 1000);
}

//method to start and play panhandles geography
function startExploreGeography() {
    document.getElementById("panhandlesMap").innerHTML = "";
    new svgMap({
        targetElementID: 'panhandlesMap',
        data: color,
        mouseWheelZoomEnabled: true,
        mouseWheelZoomWithKey: true
      });

    currentGameMode = "explore";
    goal = "";
    document.getElementById('goal').innerHTML = "";
    document.getElementById('goaltoptext').innerHTML = "";
    score = 0;
    document.getElementById("score").innerHTML = "Score: " + score;
    countriesToGuess = [];
    updateScore();
}

function chooseRandomCountry() {
    goal = countriesToGuess[Math.floor(Math.random()*countriesToGuess.length)];
    document.getElementById('goal').innerHTML = "Click on " + goal;
    document.getElementById('goaltoptext').innerHTML = "Click on " + goal;
}

var countryClick = function(countryid) {
    var countryClicked = countryMapper(countryid);
    if(currentGameMode == "world")
    {
        if(countryClicked == goal)
        {
            clearInterval(colorPingInterval);
            wrongGuesses = 0;
            score += 1;
            var index = countriesToGuess.indexOf(countryClicked);
            if(index > -1)
            {
                countriesToGuess.splice(index, 1);
            }
            chooseRandomCountry();
            updateScore();
            if(countriesToGuess.length == 0)
            {
                win();
            }
        }
        else
        {
            score -= 1;
            updateScore();
            wrongGuesses += 1;
            if(wrongGuesses > 2)
            {
                pingRightAnswer();
            }
        }
    }
}

var circleClick = function(circleid) {
    if(currentGameMode == "panhandles")
    {
        if(circleid == goal)
        {
            clearInterval(colorPingInterval);
            wrongGuesses = 0;
            score += 1;
            var index = countriesToGuess.indexOf(circleid);
            if(index > -1)
            {
                countriesToGuess.splice(index, 1);
            }
            chooseRandomCountry();
            updateScore();
            if(countriesToGuess.length == 0)
            {
                win();
            }
        }
        else
        {
            score -= 1;
            updateScore();
            wrongGuesses += 1;
            if(wrongGuesses > 2)
            {
                pingRightAnswer();
            }
        }
    }
    else if(currentGameMode == "world")
    {
        console.log(goal);
        console.log(circleid);
        if(circleid == goal)
        {
            clearInterval(colorPingInterval);
            wrongGuesses = 0;
            score += 1;
            var index = countriesToGuess.indexOf(circleid);
            if(index > -1)
            {
                countriesToGuess.splice(index, 1);
            }
            chooseRandomCountry();
            updateScore();
            if(countriesToGuess.length == 0)
            {
                win();
            }
        }
        else
        {
            score -= 1;
            updateScore();
            wrongGuesses += 1;
            if(wrongGuesses > 2)
            {
                pingRightAnswer();
            }
        }
    }
}

function changeCountryColor() 
{
    var currentColor = document.getElementById(`panhandlesMap-map-country-${colorChangeID}`).style.fill;
    if(currentColor == "rgb(255, 255, 255)")
    {
        document.getElementById(`panhandlesMap-map-country-${colorChangeID}`).style.fill = "rgb(0, 0, 0)"
    }
    else if(currentColor == "rgb(0, 0, 0)")
    {
        document.getElementById(`panhandlesMap-map-country-${colorChangeID}`).style.fill = "rgb(255, 255, 255)"
    }
}

function changeCircleColor() 
{
    var currentColor = document.getElementById(`${goal}`).firstChild.style.fill;
    if(currentColor == "rgb(255, 255, 255)")
    {
        document.getElementById(`${goal}`).firstChild.style.fill = "rgb(0, 0, 0)"
    }
    else if(currentColor == "rgb(0, 0, 0)")
    {
        document.getElementById(`${goal}`).firstChild.style.fill = "rgb(255, 255, 255)"
    }
}

//run when player guesses incorrectly 3 times to show correct answer
function pingRightAnswer() 
{
    if(currentGameMode == "world")
    {
        if(Object.keys(countryCirclesDict).find(key => countryCirclesDict[key][0] === goal))
        {
            document.getElementById(`${goal}`).firstChild.style.fill = "rgb(255, 255, 255)";
            colorPingInterval = setInterval(changeCircleColor, 300);
        }
        else
        {
            colorChangeID = Object.keys(countriesDict).find(key => countriesDict[key] === goal);
            document.getElementById(`panhandlesMap-map-country-${colorChangeID}`).style.fill = "rgb(255, 255, 255)";
            colorPingInterval = setInterval(changeCountryColor, 300);
        }
    }
    else if(currentGameMode == "panhandles")
    {
        /*var pingElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        pingElement.classList.add('ping');
        pingElement.style.animation = "pulse 1.5s infinite";
        pingElement.style.display = "block";
        pingElement.style.zIndex = "999";
        pingElement.style.background = "#cca92c";
        pingElement.style.position = "relative";
        pingElement.style.borderRadius = "50%";
        pingElement.setAttribute("x", '400');
        pingElement.setAttribute("y", '400');
        pingElement.setAttribute('height', '8px');
        pingElement.setAttribute('width', '8px');
        pingElement.innerHTML = '<circle cx="4" cy="4" r="4" stroke="black" fill="white" />';
        
        document.getElementsByClassName("svg-pan-zoom_viewport")[0].appendChild(pingElement);
        document.getElementById(goal).style.animation = "pulse 1.5s infinite";
        document.getElementById(goal).style.display = "block";*/

        document.getElementById(`${goal}`).firstChild.style.fill = "rgb(255, 255, 255)";
        colorPingInterval = setInterval(changeCircleColor, 300);
    }
}

//run when player has no more locations to guess
function win() {
    goal = "";
    document.getElementById('goal').innerHTML = "";
    document.getElementById('goaltoptext').innerHTML = "";
    currentGameMode = "none";
    stopTime();

    //confetti
    confettiSettings = {
        "target":"canvas",
        "max":"180",
        "animate":true,
        "props":["circle","square","triangle","line"],
        "colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
        "clock":"25"
      };
    confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

//change score html element to current score variable
function updateScore()
{
    if(currentGameMode == "world")
    {
        document.getElementById("score").innerHTML = "Score: " + score + "/" + Object.keys(countriesDict).length;
    }
    else if(currentGameMode == "panhandles")
    {
        document.getElementById("score").innerHTML = "Score: " + score + "/" + Object.keys(panhandlesDict).length;
    }
}

//move goal with mouse
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        event = event || window.event;

        // Use event.pageX / event.pageY here
        document.getElementById('goal').style.left = `${event.pageX}px`;
        document.getElementById('goal').style.top = `${event.pageY}px`;
    }
})();

//timer variables
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
//methods to update time
function setTime() {
    totalSeconds++;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }
  
  function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

function resetTime(){
    totalSeconds = 0;
    secondsLabel.innerHTML = "00";
    minutesLabel.innerHTML = "00";
    clearInterval(timeInterval);
}

function stopTime(){
    clearInterval(timeInterval);
}