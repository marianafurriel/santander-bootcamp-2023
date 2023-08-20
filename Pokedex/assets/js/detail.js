function mudaDetalhe() {
  const nome = localStorage.getItem("current").slice(1, -1);
  const json = JSON.parse(localStorage.getItem(nome));
  const types = json.types;
  const photo = json.photo;
  return `<div class="pokemon ${types[0]}">
  <span class="name">${nome}</span>
  <span>
    <ul class="types">
    ${types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
    </ul>
  </span>
  <img src="${photo}"
    alt="">
</div>`;
}

const detalhe = document.querySelector(".details");
detalhe.innerHTML = mudaDetalhe();
