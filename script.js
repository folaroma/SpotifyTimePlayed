const url = "https://api.spotify.com/v1/me/player/currently-playing?market=US&additional_types=episode";

const options = {
  headers: {
    Authorization: "Bearer BQDcWPPesO35qwTkdn8jvSkv_kKarhbvw-Er3EtuBlHVUgNk5aUa7v75n2Dr4yTmfp8yhZDWfbxsHWyl4ElvFIdecgjDbSLz5YKjfLXym2QKd2GWvb58QgXbfFdGIgRgnbg046aJ3tTSYaq6cQ"
  }
};

function convertMs(ms) {
  var minutes = Math.floor(ms / 60000);
  var seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

async function getSong() {
  const response = await fetch(url, options);
  const data = await response.json();
  const { artists, name, duration_ms } = data;
  
  document.getElementById('name').textContent = data.item.name;
  document.getElementById('artists').textContent = data.item.artists[0].name;
  document.getElementById('duration').textContent = convertMs(data.item.duration_ms);

  console.log(data);
}

getSong();

