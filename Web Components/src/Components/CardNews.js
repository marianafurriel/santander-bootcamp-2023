class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    cardRight.appendChild(newsImage);
    newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }
  style() {
    const style = document.createElement("style");
    style.textContent = `   
    .card {
      width: 80%;
      display: flex;
      box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.365);
      justify-content: space-between;
    }
    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card__left > span {
      font-weight: 400;
    }
    
    .card__left > a {
      margin-top: 15px;
      font-size: 25px;
      color: black;
      text-decoration: none;
      font-weight: 400;
    }
    
    .card__left > p {
      color: #464646;
    }
    `;
    return style;
  }
}

customElements.define("card-news", Cardnews);
