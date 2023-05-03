let mynav = document.querySelector("#my-navbar");

let sections = document.querySelectorAll("section");
let lists = document.querySelectorAll("nav .nav-item .nav-link");

// localStorage.clear();

window.onscroll = function () {
    let current = "";
    sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    
    if (top >= offset - 72) {
      current = sec.getAttribute("id");
    }
    lists.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href") == `#${current}`) {
        a.classList.add("active");
      }
    });
  });

  if (scrollY > 100) {
    // mynav.classList.remove("bg-transparent");
    mynav.classList.add("bg-white");
    mynav.style.height = "80px";
  } else {
    mynav.classList.remove("bg-white");
    mynav.style.height = "100px";
  }
};

let collapseMenu = document.querySelector("nav .navbar-collapse");
document.getElementById("toggler").addEventListener("click", () => {
  collapseMenu.classList.toggle("active");
});

let popDiv = document.querySelector(".pop-div");
let popBoxes = document.querySelectorAll(".port-box");
popBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    popDiv.classList.add("active");

    popDiv.innerHTML += `
        <span class="btn btn-close position-absolute p-3 rounded-circle bg-danger"></span>
        <div class="container">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 8"></button>
            </div>
            <div class="row">
                <div class="carousel-inner">
    
                    <div class="carousel-item active" data-bs-interval="1500">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                    <img src="././Images/post_2.jpg" alt="portfolio">
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                    <img src="./Images/post_3.jpg" alt="portfolio">
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                    <img src="./Images/post_4.jpg" alt="portfolio">
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                    <img src="./Images/post_5.jpg" alt="portfolio">
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                    <img src="./Images/post_6.jpg" alt="portfolio">
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                    <img src="./Images/post_2.jpg" alt="portfolio">
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                    <img src="./Images/post_3.jpg" alt="portfolio">
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                    <img src="./Images/post_4.jpg" alt="portfolio">
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                    <img src="./Images/post_5.jpg" alt="portfolio">
                    </div>
                    </div>
                  </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    
</div>
        `;
    document.querySelector(".btn-close").addEventListener("click", () => {
      popDiv.innerHTML = "";
      popDiv.classList.remove("active");
    });
  });
});

let submit = document.querySelector(".contact .submit");
submit.addEventListener("click" , ()=> {
    let login = [];
    let i = 0;
    let textInput = document.querySelectorAll(".contact .text");
    textInput.forEach(input => {
        console.log(input.value);
        login.push(input.value);
        console.log(login);
    });
    localStorage.setItem(`contact ${i}`,login);
    i++;
})