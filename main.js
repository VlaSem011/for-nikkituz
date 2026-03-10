const firstT = document.querySelector("#fText");
const btn = document.querySelector("#button1");
const fDiv = document.querySelector("#firstDiv");
const sDiv = document.querySelector("#secondDiv");
const tDiv = document.querySelector("#thirdDiv");
const stan = document.querySelector("#pic1");
const kyle = document.querySelector("#pic2");
const cartman = document.querySelector("#pic3");
const kenny = document.querySelector("#pic4");
const chText = document.querySelector("#persText");

const finalBtn = document.querySelector("#final-butt");
const backBtn = document.querySelector("#backToSelect");
const endBtn = document.querySelector("#theEnd");

const photoDiv = document.querySelector("#photodiv");
const nextPhotoBtn = document.querySelector("#nextphoto");

let choice = 0;


btn.addEventListener('click',() =>{
fDiv.classList.add("hidden");
photoDiv.classList.remove("hidden");
});

let photoCount = 1;

nextPhotoBtn.onclick = () => {
    if (photoCount <= 4) {
        const currentImg = document.querySelector(`#guest${photoCount}`);
        currentImg.classList.remove("hidden");
        photoCount++;
    }

    if (photoCount > 4) {
        nextPhotoBtn.textContent = "А тепер привітання!";
        
        nextPhotoBtn.onclick = () => {
            photoDiv.classList.add("hidden");
            sDiv.classList.remove("hidden"); 
        };
    }
};

function laFinale() {
    sDiv.classList.add("hidden");
    tDiv.classList.add("parent-div");
    tDiv.classList.remove("hidden");

    const currentHero = phrases[choice];
    chText.textContent = currentHero.text;
    chText.style.fontFamily = currentHero.font;
    chText.style.color = "rgb(255, 152, 152)";

    finalBtn.classList.remove("hidden");
    finalBtn.style.display = "flex";
}

backBtn.onclick = () => {
    tDiv.classList.add("hidden");
    tDiv.classList.remove("parent-div");
    finalBtn.classList.add("hidden");
    
    sDiv.classList.remove("hidden");
    sDiv.classList.add("parent-div");
};

 
endBtn.onclick = () => {
    chText.textContent = "Я надіюсь ти це бачиш,Софіка вітаю тебе з днем народження впевнений на фоні нудних днів сурка де одне домашнє,та втома,свій другий вихідний ти проведеш дуже весело,тебе привітають всі друзі,ти дуже вкусна пакушаєш,і все буде так як захочеш,ти обов'язково доб'єшся цілей які поставиш на свої 17 років,все поздаєш,будеш крута спати,а я буду с табой ментальна моральна,підтримуватиму і в нас з'явиться ще декілька фото спільних але вже без участі роналду і мессі,люблю целую і та дакімас софіка";
    chText.style.color = "rgb(255, 152, 152)"; 
    finalBtn.classList.add("hidden");
};

document.querySelector('#pic1').onclick = () => {
    console.log("stan");
    choice = 1;
    laFinale();
};
document.querySelector('#pic2').onclick = () => {
    console.log("kyle");
    choice = 2;
    laFinale();
};
document.querySelector('#pic3').onclick = () => {
    console.log("cartman");
    choice = 3;
    laFinale();
};
document.querySelector('#pic4').onclick = () => {
    console.log("kenny");
    choice = 4;
    laFinale();
};

const phrases = [
   {}, 
    { text: "Венді(Софіка) соулмейт,вітваю з днем народження дуже люблю,чел на стенові буде і далі підтримувати,любить,і старатись для тебе,целуюююю", font: "'Pangolin', cursive" },
    { text: "Охайо з днем народження!!! бажаю тобі краще навчатись,менше зубрить весь труд акупиться, я вірю що ти і далі зможеш дожити до літа і здати нмт на всє 200 ти молодчинка работай далі, не слухай ніяких жирдяїв /  і та дакі мас", font: "'Pangolin', cursive", },
    { text: "Ітадакімас Софійка тяун з днем народження,бажаю пабольше кушать больше спать,перестати робити домашнє завдання,перестати навчатись і не слухати жида ванючого,і звісно ж накушатись на день народження на 100000 днів вперед і набрати 300 кілаграм", font: "'Pangolin', cursive" },
    { text: "Mmph mmmph mpmph!", font: "'Pangolin', cursive" }
];

const musicDiv = document.querySelector("#musicDiv");
const mainAudio = document.querySelector("#mainAudio");
const masterPlayBtn = document.querySelector("#masterPlayBtn");
const currentSongName = document.querySelector("#current-song-name");
const toGreetingsBtn = document.querySelector("#toGreetings");

function selectSong(file, name) {
    mainAudio.src = file;
    currentSongName.textContent = name;
    mainAudio.play();
    masterPlayBtn.textContent = "Pause";
}

masterPlayBtn.onclick = () => {
    if (mainAudio.paused) {
        mainAudio.play();
        masterPlayBtn.textContent = "Pause";
    } else {
        mainAudio.pause();
        masterPlayBtn.textContent = "Play";
    }
};

nextPhotoBtn.onclick = () => {
    if (photoCount <= 4) {
        const currentImg = document.querySelector(`#guest${photoCount}`);
        currentImg.classList.remove("hidden");
        photoCount++;
    }

    if (photoCount > 4) {
        nextPhotoBtn.textContent = "музік дє ми тіпа окі";
        nextPhotoBtn.onclick = () => {
            photoDiv.classList.add("hidden");
            musicDiv.classList.remove("hidden");
        };
    }
};

toGreetingsBtn.onclick = () => {
    musicDiv.classList.add("hidden");
    sDiv.classList.remove("hidden");
    sDiv.classList.add("parent-div");
};
const backToFirstBtn = document.querySelector("#backToFirst");
const backToPhotosBtn = document.querySelector("#backToPhotos");

backToFirstBtn.onclick = () => {
    photoDiv.classList.add("hidden");
    fDiv.classList.remove("hidden");
    photoCount = 1; 
    document.querySelectorAll(".hero-static").forEach(img => img.classList.add("hidden"));
    nextPhotoBtn.textContent = "Некст ван";
};

backToPhotosBtn.onclick = () => {
    musicDiv.classList.add("hidden");
    photoDiv.classList.remove("hidden");
};

const backToMusicBtn = document.querySelector("#backToMusic");

backToMusicBtn.onclick = () => {
    sDiv.classList.add("hidden");
    musicDiv.classList.remove("hidden");
    musicDiv.classList.add("parent-div");
};