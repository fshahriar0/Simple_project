const bikes = [
    {
      id: "1",
      model: "MtBreaker",
      manuf: "Tunturi",
      gear: "18",
      gear_manuf: "Shimano",
      details: "Experience the ultimate ride with the Tunturi MtBreaker, the mountain bike designed for adventurers and thrill-seekers alike.",
      size: "28",
      img_url: "https://www.cc.puv.fi/~hmh/fed/fedApi/bikes/img/img1.jpg"
    },
    {
      id: "2",
      model: "Raven",
      manuf: "Helkama",
      gear: "3",
      gear_manuf: "SRAM",
      details: "Simplicity Meets Style on Two Wheels! Step into effortless cycling with the Raven.",
      size: "26",
      img_url: "https://www.cc.puv.fi/~hmh/fed/fedApi/bikes/img/img2.jpg"
    },
    {
      id: "3",
      model: "UrbanGlide",
      manuf: "CityCycler",
      gear: "7",
      gear_manuf: "Shimano",
      details: "Lightweight city bike with a 24-inch frame, perfect for urban commuting.",
      size: "24",
      img_url: "https://www.cc.puv.fi/~hmh/fed/fedApi/bikes/img/img3.jpg"
    },
    {
      id: "4",
      model: "TrailMaster",
      manuf: "TrailPro",
      gear: "18",
      gear_manuf: "Shimano",
      details: "Reliable mountain bike with 26-inch wheels, built for off-road adventures.",
      size: "26",
      img_url: "https://www.cc.puv.fi/~hmh/fed/fedApi/bikes/img/img4.jpg"
    },
    {
      id: "5",
      model: "SnowRider",
      manuf: "FatTrek",
      gear: "12",
      gear_manuf: "SRAM",
      details: "A robust fatbike with 28-inch tires, ideal for sandy or snowy terrains.",
      size: "28",
      img_url: "https://www.cc.puv.fi/~hmh/fed/fedApi/bikes/img/img5.jpg"
    },
    {
      id: "6",
      model: "MiniMountain",
      manuf: "KidTrek",
      gear: "3",
      gear_manuf: "Shimano",
      details: "A safe and durable 16-inch mountain bike for young adventurers.",
      size: "16",
      img_url: "https://www.cc.puv.fi/~hmh/fed/fedApi/bikes/img/img6.jpg"
    },
    {
      id: "7",
      model: "VoltTrail",
      manuf: "E-Mountain",
      gear: "21",
      gear_manuf: "Shimano",
      details: "Electric mountain bike with a 26-inch frame, designed for challenging trails.",
      size: "26",
      img_url: "https://www.cc.puv.fi/~hmh/fed/fedApi/bikes/img/img7.jpg"
    },
    {
      id: "8",
      model: "PowerClimb",
      manuf: "E-Extreme",
      gear: "24",
      gear_manuf: "SRAM",
      details: "High-performance electric mountain bike with a 28-inch frame for steep climbs.",
      size: "28",
      img_url: "https://www.cc.puv.fi/~hmh/fed/fedApi/bikes/img/img8.jpg"
    }
  ];
  
  const container = document.getElementById("bike-container");
  const modal = document.getElementById("bike-modal");
  const closeBtn = document.querySelector(".close-btn");
  
  // Populate the grid with bike cards
  bikes.forEach(bike => {
    const card = document.createElement("div");
    card.className = "bike-card";
    card.innerHTML = `
          <img src="${bike.img_url}" alt="${bike.model}">
          <h3>${bike.model}</h3>
      `;
    card.addEventListener("click", () => showModal(bike));
    container.appendChild(card);
  });
  
  // Display the modal with bike details
  function showModal(bike) {
    document.getElementById("bike-title").innerText = bike.model;
    document.getElementById("bike-img").src = bike.img_url;
    document.getElementById("bike-details").innerText = bike.details;
    document.getElementById("bike-manuf").innerText = bike.manuf;
    document.getElementById("bike-gear").innerText = bike.gear;
    document.getElementById("bike-gear-manuf").innerText = bike.gear_manuf;
    document.getElementById("bike-size").innerText = bike.size;
  
    modal.style.display = "flex";
  }
  
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  