const choice = document.getElementsByClassName("choice")[0];
const revealers = document.getElementsByClassName("revealer");
const intro = document.getElementsByClassName("intro")[0];

choice.addEventListener('click', function(e){
  e.preventDefault();
  console.log(revealers)
  for(var i = 0;i<revealers.length;i++){
    revealers[i].classList.add('revealer-show');
  }
  choice.classList.add("hide-choice");
  intro.classList.add("show-intro");
})
