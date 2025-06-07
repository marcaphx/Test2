   const sky = document.getElementById('sky');
    const messageBox = document.getElementById('message');

    const randomMessages = [
      "You're my shining star 🌟",
      "You light up my nights 💫",
      "Every moment with you is magic ✨",
      "You're in my heart, always ❤️",
      "Just like stars, you're infinite to me 🌌",
      "This constellation is just for you 💖",
      "Whenever you feel lost, look up 🌠",
      "Wishing on a star just for you 💕",
      "You sparkle even in the dark ✨",
      "Forever glowing in my sky 💞"
    ];

    function getRandomMessage() {
      return randomMessages[Math.floor(Math.random() * randomMessages.length)];
    }

    // Generate random stars with messages
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.addEventListener('click', (e) => {
        e.stopPropagation();
        showMessage(getRandomMessage(), e.pageX, e.pageY);
      });
      sky.appendChild(star);
    }

    const specialMessages = [
      "You're my shining star 🌟",
      "You light up my nights 💫",
      "Every moment with you is magic ✨",
      "You're in my heart, always ❤️",
      "Just like stars, you're infinite to me 🌌",
      "This constellation is just for you 💖"
    ];

    function showMessage(text, x, y) {
      messageBox.textContent = text;
      messageBox.style.left = `${x}px`;
      messageBox.style.top = `${y - 40}px`;
      messageBox.style.display = 'block';
      clearTimeout(messageBox.hideTimeout);
      messageBox.hideTimeout = setTimeout(() => messageBox.style.display = 'none', 3000);
    }
