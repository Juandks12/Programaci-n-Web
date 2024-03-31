const d = document
 const $themeBtn = d.querySelector(".dark-theme-btn");
 const $selectors = d.querySelectorAll("[data-dark]") // ESLA DATA QUE SE CREO  y al poner los corchetes 
                                                      // Es como decira que todos los elemetnos que tengan ese query
//console.log($themeBtn.textContent)
const classDark = "dark-mode";
 const sun = "☀️";
 const moon = "🌙";
 const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon
  };
 const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun
  };


  d.addEventListener("click", (e) =>{

  if(e.target.matches(".dark-theme-btn")){
    if($themeBtn.textContent === moon){
      darkMode()
    }else{
      lightMode()
    }
  }
  })

  