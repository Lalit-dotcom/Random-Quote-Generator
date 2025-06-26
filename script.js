const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const containerQuote = document.querySelector(".container-quote");
const key = "Q0JL6PJAKJP2vrmjnPhS8A==P7pXN3nZsj9jS8fn";

async function generateQuote() {
  try {
    containerQuote.style.display = "";
    quoteEl.textContent = "...Updating";
    authorEl.textContent = "Updating";
    btnEl.textContent = "Loading"
    btnEl.disabled = true;
    const url = "https://api.api-ninjas.com/v1/quotes";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": key,
      },
    });
    const data = await response.json();
    console.log(data);
    quoteEl.textContent = data[0].quote;
    authorEl.textContent = data[0].author;
    btnEl.textContent = "Generate Quote"
    btnEl.disabled = false;
    btnEl.style.cursor = "";
  } catch (error) {
    containerQuote.style.display = "none";
    btnEl.disabled = false;
    btnEl.textContent = "Try Again";
  }
}

btnEl.addEventListener("click", generateQuote);
