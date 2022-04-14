const text = document.querySelector('#text');
const btn = document.querySelector('#btn');
const img = document.querySelector('#buku');

btn.onclick = () => {
  const url = 'https://tools.zone-xsec.com/api/nulis.php?q=' + text.value;
  fetch(url)
    .then((res) => res.json())
    .then((res) => (img.src = res.image));
};
