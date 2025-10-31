//your JS code here. If required.
function updateTimer() {
      const now = new Date(); // Get current system time
      const date = now.toLocaleDateString(); // Format date
      const time = now.toLocaleTimeString(); // Format time
      document.getElementById("timer").textContent = `${date} ${time}`;
    }
    updateTimer();
    setInterval(updateTimer, 1000);