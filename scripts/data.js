import { Serie } from './serie.js';
export var ser = new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg");
export var ser2 = new Serie(2, "Orange Is the new Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg");
export var ser3 = new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg");
export var ser4 = new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg");
export var ser5 = new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg");
export var ser6 = new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg");
var serieTable = document.getElementById("serie");
var promediosTable = document.getElementById("promedio");
var mainBody = document.getElementById('body');
var card = document.getElementById('cards');
mostrarDatosSerie(ser);
mostrarDatosSerie(ser2);
mostrarDatosSerie(ser3);
mostrarDatosSerie(ser4);
mostrarDatosSerie(ser5);
mostrarDatosSerie(ser6);
darPromedioSeasons();
function mostrarDatosSerie(serie) {
    var tbodySerie = document.createElement("tbody");
    var color = 'blue';
    tbodySerie.setAttribute("class", "clickable");
    tbodySerie.onclick = function () { renderCardSerie(serie); };
    tbodySerie.innerHTML = "<tc><td>".concat(serie.numero, "</td></tc>\n    <tc><td style=\"color:").concat(color, "\">").concat(serie.name, "</td></tc>\n    <tc><td>").concat(serie.channel, "</td></tc>\n    <tc><td>").concat(serie.seasons, "</td></tc>");
    serieTable.appendChild(tbodySerie);
}
function darPromedioSeasons() {
    var ser1sea = ser.seasons;
    var ser2sea = ser2.seasons;
    var ser3sea = ser3.seasons;
    var ser4sea = ser4.seasons;
    var ser5sea = ser5.seasons;
    var ser6sea = ser6.seasons;
    var promedioSeries = (ser1sea + ser2sea + ser3sea + ser4sea + ser5sea + ser6sea) / 6;
    var tpromedioSerie = document.createElement("tr");
    tpromedioSerie.innerHTML = "<tc><td>Seasons Average: </td><td>".concat(promedioSeries, "</td></tc>");
    promediosTable.appendChild(tpromedioSerie);
}
function renderCardSerie(s) {
    console.log("Renderizando Card de la serie...");
    card.innerHTML = "";
    var fila = document.createElement("div");
    fila.innerHTML = "<div class=\"card text-white bg-primary mb-3\"  id=\"card\">\n                        <img class=\"card-img-top\" src=".concat(s.image, " alt=\"Card image cap\">\n                        \n                        <div class=\"card-body\">\n                        <h4 class=\"card-title\">").concat(s.name, "</h4>\n                        <p1 class=\"card-text\">").concat(s.description, "</p1>\n                        <br>\n                        <br>\n                        <a id= \"idLink\"\n                        href=").concat(s.link, "\n                        target=\"_blank\"\n                        >Go to main page</a>\n                        </div>\n                        </div>");
    card.appendChild(fila);
}
