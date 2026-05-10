const gallery = document.getElementById("gallery");
const addBtn = document.getElementById("addBtn");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");
const closeBtn = document.getElementById("closeBtn");
const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filters button");

/* ADD IMAGE */
addBtn.addEventListener("click", () => {
  const url = document.getElementById("imgUrl").value;
  const caption = document.getElementById("imgCaption").value;
  const category = document.getElementById("imgCategory").value;

  if (!url || !caption) return;

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-cat", category);

  card.innerHTML = `
    <img src="${url}" alt="">
    <div class="caption">${caption}</div>
  `;

  gallery.appendChild(card);

  card.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lbImg.src = url;
    lbCaption.textContent = caption;
  });

});

/* LIGHTBOX CLOSE */
closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

/* SEARCH */
searchInput.addEventListener("input", () => {
  let value = searchInput.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

/* FILTER */
const filterBoxes = document.querySelectorAll(".filter-box");

filterBoxes.forEach(box => {
  box.addEventListener("click", () => {

    document.querySelector(".filter-box.active").classList.remove("active");
    box.classList.add("active");

    let cat = box.getAttribute("data-cat");

    document.querySelectorAll(".card").forEach(card => {
      if (cat === "All" || card.getAttribute("data-cat") === cat) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});
