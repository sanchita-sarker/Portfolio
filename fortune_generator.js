const fortunes = [
  "Your hard work will pay off soon",
  "An exciting opportunity awaits.",
  "Help is on the way.",
  "Success is within your reach.",
  "Adventure is just around the corner.",
  "Share your smile with the world",
  "Someone is thinking of you.",
  "You'll find what you're looking for.",
  "A surprise encounter will delight you.",
  "Believe in yourself today.",
];

const fortuneBox = document.getElementById("fortune-box");
fortuneBox.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];

function changeFontColor() {
  const colors = ["#063a3dff", "#1F618D", "#89168bff", "#042804ff"];
  fortuneBox.style.color = colors[Math.floor(Math.random() * colors.length)];
}

function changeBackgroundColor() {
  const colors = ["#f990dfff", "#00ffd0ff", "#ffc800ff", "#46bbffff"];
  fortuneBox.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function changeBorderColor() {
  const colors = ["#07145eff", "#07392fff", "#4c1f5fff", "#2E86C1"];
  fortuneBox.style.border = `5px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
}

function changeFontStyle() {
  const fonts = ["Impact", "Trebuchet MS", "Courier New", "Georgia", "Verdana"];
  const sizes = ["16px", "18px", "20px", "22px"];
  fortuneBox.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  fortuneBox.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
}
