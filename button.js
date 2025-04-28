// Move the "No" button randomly
function moveButton() {
  const button = document.querySelector("#noBox button");
  if (!button) return; // Prevent errors if button not found

  const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - button.offsetHeight);

  button.style.position = "absolute"; // Make sure button can move
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

// Calculate and display the meeting date
function calculateMeetingDate() {
  const now = new Date();
  
  // Convert to Ulaanbaatar time (GMT+8)
  const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
  const ulaanbaatarTime = new Date(utcTime + (3600000 * 8));

  // Set the meeting 2 days later
  ulaanbaatarTime.setDate(ulaanbaatarTime.getDate() + 2);

  // Format date nicely
  const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'Asia/Ulaanbaatar' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(ulaanbaatarTime);

  const timeElement = document.querySelector('time');
  if (timeElement) {
    timeElement.textContent = formattedDate;
  }
}
calculateMeetingDate();

// Generate a random position for elements
function getRandomPosition() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.random() * (width - 50);  // Assume approx element size
  const y = Math.random() * (height - 50);

  return { x, y };
}

// Create a floating heart element
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "&#x2764;";
  heart.className = "heart";

  const { x, y } = getRandomPosition();
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  document.body.appendChild(heart);

  // Remove the heart after 3 seconds
  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Create a heart every 2 seconds
setInterval(createHeart, 2000);
