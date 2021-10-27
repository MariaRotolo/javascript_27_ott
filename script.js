

const darkModeBtn = document.querySelector(".toggleDarkMode");
darkModeBtn.addEventListener("click",() => {
    document.body.classList.toggle("darkMode");
  
    }
);

const lightBtn = document.querySelector(".lightsOn");
lightBtn.addEventListener("click",() => {
    darkModeHob.classList.add("light");    
    }
);

const paragraph = document.querySelectorAll("p");
document.body.onclick = () => console.log(paragraph.length);