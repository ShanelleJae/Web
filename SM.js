
    
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    const wrapper = document.querySelector('.cards-wrapper');
    const dots = document.querySelectorAll('.dot');
    let activeDotNum = 0;

dots.forEach((dot, idx) => {  
  dot.setAttribute('data-num', idx);
  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;
    if(clickedDotNum == activeDotNum) {
      return;
    }
    else {
      let displayArea = wrapper.parentElement.clientWidth;
      let pixels = -displayArea * clickedDotNum
      wrapper.style.transform = 'translateX('+ pixels + 'px)';
      dots[activeDotNum].classList.remove('active');
      dots[clickedDotNum].classList.add('active');
      activeDotNum = clickedDotNum;
    }
    
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector("nav");
  const about = document.querySelector("#about");
  about.style.marginTop = `${nav.offsetHeight}px`;
});

