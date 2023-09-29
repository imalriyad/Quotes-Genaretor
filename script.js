const quotesDataLaod = () => {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => quotesdata(data));
};

const quotesdata = (data) => {
  const backgroundColorsArray = [
    "#1f618d", // Blue
    "#27ae60", // Green
    "#8e44ad", // Purple
    "#f39c12", // Orange
    "#c0392b", // Maroon
    "#2ecc71", // Emerald Green
    "#2980b9", // Sapphire Blue
    "#e67e22", // Burnt Orange
    "#bdc3c7", // Silver
    "#2c3e50", // Dark Blue
    "#1abc9c", // Turquoise
    "#f39c12", // Orange
    "#e74c3c", // Red
    "#16a085", // Green
    "#9b59b6", // Lavender
    "#ff6b6b", // Pink
  ];

  document.getElementById("btn").addEventListener("click", function () {
    const quotesText = document.getElementById("quotes-text");
    const saidBy = document.getElementById("said-by");

    let GetQuoterandomly = Math.floor(Math.random() * data.length);

    let quoteTexttt = data.values(GetQuoterandomly);
    quotesText.innerText = quoteTexttt;

    quotesText.innerText = data[GetQuoterandomly].text;
    saidBy.innerText = data[GetQuoterandomly].author.replace(", type.fit", "");

    let card = document.getElementById("card");
    let cardSytle = (card.style.backgroundColor =
      backgroundColorsArray[GetQuoterandomly]);
  });
};

quotesDataLaod();
