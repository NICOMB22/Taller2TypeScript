import {Serie} from './serie.js';


export const ser = new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", 
"https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg");


export const ser2 = new Serie(2, "Orange Is the new Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
"https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpg");


export const ser3 = new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
"https://i.imgur.com/TDCEV1S.jpg");


export const ser4 = new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
"https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg");


export const ser5 = new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
"https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg");


export const ser6 = new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
"https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg");



let serieTable: HTMLElement = document.getElementById("serie")!;
let promediosTable: HTMLElement = document.getElementById("promedio")!;

const mainBody : HTMLElement = document.getElementById('body')!;
const card : HTMLElement = document.getElementById('cards')!;

mostrarDatosSerie(ser);
mostrarDatosSerie(ser2);
mostrarDatosSerie(ser3);
mostrarDatosSerie(ser4);
mostrarDatosSerie(ser5);
mostrarDatosSerie(ser6);
darPromedioSeasons();



function mostrarDatosSerie(serie: Serie): void{
    let tbodySerie = document.createElement("tbody");
    let color: string = 'blue';

    tbodySerie.setAttribute("class", "clickable");
    tbodySerie.onclick = function(){renderCardSerie(serie)};

    tbodySerie.innerHTML = `<tc><td>${serie.numero}</td></tc>
    <tc><td style="color:${color}">${serie.name}</td></tc>
    <tc><td>${serie.channel}</td></tc>
    <tc><td>${serie.seasons}</td></tc>`
    serieTable.appendChild(tbodySerie);
}


function darPromedioSeasons(): void{
    let ser1sea: number = ser.seasons;   
    let ser2sea: number = ser2.seasons;
    let ser3sea: number = ser3.seasons;
    let ser4sea: number = ser4.seasons;
    let ser5sea: number = ser5.seasons;
    let ser6sea: number = ser6.seasons;

    let promedioSeries: number = (ser1sea+ser2sea+ser3sea+ser4sea+ser5sea+ser6sea)/6;
    let tpromedioSerie = document.createElement("tr");

    tpromedioSerie.innerHTML = `<tc><td>Seasons Average: </td><td>${promedioSeries}</td></tc>`
    promediosTable.appendChild(tpromedioSerie);
}


function renderCardSerie(s: Serie) : void{
    console.log("Renderizando Card de la serie...");
    card.innerHTML = "";
    let fila = document.createElement("div");   
    fila.innerHTML = `<div class="card text-white bg-primary mb-3"  id="card">
                        <img class="card-img-top" src=${s.image} alt="Card image cap">
                        
                        <div class="card-body">
                        <h4 class="card-title">${s.name}</h4>
                        <p1 class="card-text">${s.description}</p1>
                        <br>
                        <br>
                        <a id= "idLink"
                        href=${s.link}
                        target="_blank"
                        >Go to main page</a>
                        </div>
                        </div>`;
    card.appendChild(fila);   

}

