// ================= PRODUCT TO SERVICE OPEN =================

function openService(serviceId) {

  const allServices = document.querySelectorAll("details");

  allServices.forEach((service) => {
    service.removeAttribute("open");
  });

  const selectedService = document.getElementById(serviceId);

  selectedService.setAttribute("open", true);

  selectedService.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// ================= NAVBAR ACTIVE LINK =================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-part2 a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});

// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.background = "#F7F6FB";
    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";

  } else {

   navbar.style.background = "#F7F6FB";
    navbar.style.boxShadow = "none";

  }

});

// ================= BUTTON HOVER EFFECT =================

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-5px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0px)";
  });

});

// ================= KITCHEN =================

function showKitchen(type) {

  let info = document.getElementById("kitchen-info");
  let img = document.getElementById("kitchen-img");
  let box = document.getElementById("kitchen-image-box");

  box.style.display = "block";

  if (type === "straight") {

    info.innerHTML = `
      <h2>Straight Kitchen</h2>

      <p>
        Elegant straight kitchen layouts designed for compact homes.
        Premium finish and smart storage make daily cooking easier.
        Modern aesthetics create a clean and luxurious kitchen space.
      </p>
    `;

    img.src = "/images/straight_kitchen.jpg";

  }

  else if (type === "parallel") {

    info.innerHTML = `
      <h2>Parallel Kitchen</h2>

      <p>
        Parallel kitchens offer maximum workspace and better movement.
        Ideal for modern apartments with efficient storage planning.
        Stylish layouts enhance both comfort and functionality.
      </p>
    `;

    img.src = "/images/parallel_kitchen.jpg";

  }

  else if (type === "lshape") {

    info.innerHTML = `
      <h2>L Shape Kitchen</h2>

      <p>
        L-shape kitchens provide spacious corner utilization solutions.
        Perfect for open layouts with elegant modern interiors.
        Smart organization keeps your kitchen stylish and clutter free.
      </p>
    `;

    img.src = "/images/l_shape_kitchen.jpg";

  }

  else if (type === "cshape") {

    info.innerHTML = `
      <h2>C Shape Kitchen</h2>

      <p>
        C-shape kitchens are built for maximum storage capacity.
        Luxurious layouts create a premium cooking experience daily.
        Modern finishes add beauty and efficiency to your interiors.
      </p>
    `;

    img.src = "/images/c_shape_kitchen.jpg";

  }

  else if (type === "island") {

    info.innerHTML = `
      <h2>Island Kitchen</h2>

      <p>
        Island kitchens create a stylish and luxurious open layout.
        Additional counter space improves functionality and comfort.
        Perfect for modern homes with premium interior aesthetics.
      </p>
    `;

    img.src = "/images/island_kitchen.jpg";

  }

}

// ================= WARDROBE =================

function showWardrobe(type) {

  let info = document.getElementById("wardrobe-info");
  let img = document.getElementById("wardrobe-img");
  let box = document.getElementById("wardrobe-image-box");

  box.style.display = "block";

  if (type === "openable") {

    info.innerHTML = `
      <h2>Openable Wardrobe</h2>

      <p>
        Elegant openable wardrobes with spacious storage solutions.
        Premium finishes give your bedroom a luxurious appearance.
        Designed for easy access and smooth daily usability.
      </p>
    `;

    img.src = "/images/openable_wordrobe.jpg";

  }

  else if (type === "sliding") {

    info.innerHTML = `
      <h2>Sliding Wardrobe</h2>

      <p>
        Sliding wardrobes save space with modern stylish designs.
        Smooth sliding systems provide comfort and smart storage.
        Perfect for compact bedrooms with premium interiors.
      </p>
    `;

    img.src = "/images/sliding_wordrobe.jpg";

  }

  else if (type === "walkin") {

    info.innerHTML = `
      <h2>Walk In Wardrobe</h2>

      <p>
        Luxury walk-in wardrobes crafted for premium lifestyles.
        Spacious layouts keep your fashion essentials organized neatly.
        Elegant interiors enhance comfort and modern aesthetics.
      </p>
    `;

    img.src = "/images/walk_in_wordrobe.jpg";

  }

}

// ================= INTERIOR =================

function showInterior(type) {

  let info = document.getElementById("interior-info");
  let img = document.getElementById("interior-img");
  let box = document.getElementById("interior-image-box");

  if (type === "civil") {

    info.innerHTML = `
      <h2>Civil Work</h2>

      <p>
        Professional civil work solutions built with high precision.
        Strong structures and quality finishing ensure durability.
        Customized planning creates modern and functional interiors.
      </p>
    `;

    box.style.display = "none";

  }

  else if (type === "ceiling") {

    info.innerHTML = `
      <h2>False Ceiling</h2>

      <p>
        Modern false ceiling designs crafted for elegant interiors.
        Stylish lighting concepts improve beauty and ambience perfectly.
        Premium materials ensure durability with luxurious appearance.
      </p>
    `;

    box.style.display = "block";

    img.src = "/images/false_ceiling.jpg";

  }

  else if (type === "painting") {

    info.innerHTML = `
      <h2>Painting</h2>

      <p>
        Premium wall painting services with smooth modern finishes.
        High quality colors enhance beauty and elegance beautifully.
        Customized shades create fresh and luxurious living spaces.
      </p>
    `;

    box.style.display = "none";

  }

}