function moveButton() {
    const button = document.querySelector("#noBox button");
    const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
  }

  function calculateMeetingDate() {
    // Ulaanbaatar Standard Time (GMT+8) tohiruulah
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const UlaanbaatarTime = new Date(utcTime + (3600000 * 8));
    
    // Uulzah odriig 2 honogiin daraa tavih
    const meetingDate = new Date(UlaanbaatarTime);
    meetingDate.setDate(meetingDate.getDate() + 2);
  
    // Uulzah odroo tohiruulah
    const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'Asia/Ulaanbaatar' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(meetingDate);
  
    // Uulzaltiin ognoog HTML dr tohiruulah
    const timeElement = document.querySelector('time');
    timeElement.textContent = formattedDate;
  }
  calculateMeetingDate();
  
  
  