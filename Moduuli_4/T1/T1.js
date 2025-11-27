'use strict';

const form = document.querySelector('form');
form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const query = document.getElementById('query').value;
  const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
});


