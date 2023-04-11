const ca = document.getElementById('ca');
ca.width = innerWidth;
ca.height = innerHeight;
const can = ca.getContext('2d');
const size = 12;
let color = "#000000";

let block = [];
for (let i = 0; i < 32; i++) {
  block[i] = [];
  for (let j = 0; j < 32; j++) {
    block[i][j] = 0;
  }
}

setInterval(function () {
  for (let i = 0; i < 32; i++) {
    for (let j = 0; j < 32; j++) {
      can.fillStyle = block[i][j];
      if (block[i][j] === 0) can.fillStyle = "gray";
      can.fillRect(i * size, j * size, size, size);
    }
  }
},100);

document.getElementById('editer').onclick = function (e) {
  let x = Math.floor(e.pageX / size);
  let y = Math.floor(e.pageY / size);
  block[x][y] = color;
  const blob = new Blob([JSON.stringify(block)], { type: 'text/json' });
  document.getElementById("download").href = window.URL.createObjectURL(blob);
}
document.getElementById("ok").onclick = function () {
  color = "#" + document.getElementById("colorCode");
}
document.body.ontouchmove = function (e) {
  let x = Math.floor(e.changedTouches[0].pageX / size);
  let y = Math.floor(e.changedTouches[0].pageY / size);
  block[x][y] = color;
  const blob = new Blob([JSON.stringify(block)], { type: 'text/json' });
  document.getElementById("download").href = window.URL.createObjectURL(blob);
}