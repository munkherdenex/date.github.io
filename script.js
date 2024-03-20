const checkbox = document.getElementById('checkbox');
const container = document.getElementById('container');
const randomizeNewLocation = () => {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Adjust 100 based on the size of your new location element
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Adjust 100 based on the size of your new location element
  newLocation.style.left = `${randomX}px`;
  newLocation.style.top = `${randomY}px`;
};
checkbox.addEventListener('change', function() {
  if (this.checked) {
    // Checkbox is checked, so move the entire label to the new location
    randomizeNewLocation();
    newLocation.appendChild(this.parentNode);
    newLocation.style.display = 'block';
  } else {
    // Checkbox is unchecked, move the label back to the original location
    container.appendChild(this.parentNode);
    newLocation.style.display = 'none';
  }
});
