// Floating Magic Elements
function createMagicElements() {
    const container = document.getElementById('magicContainer');
    const elements = ['💕', '💖', '✨', '⭐', '🌸', '🌺', '💫', '🦋', '🌈'];

    function addElement() {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.textContent = elements[Math.floor(Math.random() * elements.length)];
        element.style.left = Math.random() * 100 + '%';
        element.style.animationDuration = (Math.random() * 6 + 8) + 's';
        element.style.animationDelay = Math.random() * 3 + 's';

        container.appendChild(element);

        setTimeout(() => element.remove(), 14000);
    }

    for (let i = 0; i < 20; i++) {
        setTimeout(addElement, i * 300);
    }

    setInterval(addElement, 2000);
}

// Mascot Interactions
function initMascot() {
    const mascot = document.getElementById('mascotGuide');
    const bubble = mascot.querySelector('.mascot-bubble');
    const messages = [
        'Welcome! 💖',
        'You\'re amazing! ✨',
        'Keep shining! 🌟',
        'Marta is awesome! 🎨',
        'Sport mode! 💪',
        'So creative! 🌈'
    ];

    let messageIndex = 0;

    setInterval(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        bubble.textContent = messages[messageIndex];
        bubble.style.animation = 'none';
        setTimeout(() => {
            bubble.style.animation = 'bubbleBounce 2s infinite ease-in-out';
        }, 10);
    }, 5000);

    mascot.addEventListener('click', () => {
        const character = mascot.querySelector('.mascot-character');
        character.style.transform = 'scale(1.2) rotate(10deg)';
        setTimeout(() => {
            character.style.transform = '';
        }, 300);
        createSparklesBurst(mascot);
    });
}

// Sparkles Burst Effect
function createSparklesBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = centerX + 'px';
        sparkle.style.top = centerY + 'px';
        sparkle.style.fontSize = '1.5rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '10000';
        sparkle.style.transition = 'all 1s ease-out';

        document.body.appendChild(sparkle);

        const angle = (Math.PI * 2 * i) / 8;
        const distance = 80;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        setTimeout(() => {
            sparkle.style.transform = `translate(${tx}px, ${ty}px) scale(0) rotate(360deg)`;
            sparkle.style.opacity = '0';
        }, 10);

        setTimeout(() => sparkle.remove(), 1000);
    }
}

// CTA Buttons Interactions
function initCTAButtons() {
    const hugBtn = document.getElementById('hugBtn');
    const drawingsBtn = document.getElementById('drawingsBtn');
    const energyBtn = document.getElementById('energyBtn');
    const overlay = document.getElementById('celebrationOverlay');

    hugBtn.addEventListener('click', () => {
        createHugEffect();
        showMessage('Sending virtual hug! 💖');
    });

    drawingsBtn.addEventListener('click', () => {
        createDrawingEffect();
        showMessage('Art is magic! 🎨✨');
    });

    energyBtn.addEventListener('click', () => {
        createEnergyEffect();
        showMessage('Bunny energy activated! 🐰⚡');
    });
}

// Hug Effect
function createHugEffect() {
    const hearts = ['💕', '💖', '💗', '💓', '💝', '💞'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.transition = 'all 3s ease-out';

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.style.top = '-100px';
                heart.style.transform = `translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`;
                heart.style.opacity = '0';
            }, 10);

            setTimeout(() => heart.remove(), 3000);
        }, i * 50);
    }
}

// Drawing Effect
function createDrawingEffect() {
    const drawings = ['✏️', '🖍️', '🖌️', '🎨', '🖼️', '🌈'];

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const drawing = document.createElement('div');
            drawing.textContent = drawings[Math.floor(Math.random() * drawings.length)];
            drawing.style.position = 'fixed';
            drawing.style.left = Math.random() * 100 + '%';
            drawing.style.top = Math.random() * 100 + '%';
            drawing.style.fontSize = '2rem';
            drawing.style.pointerEvents = 'none';
            drawing.style.zIndex = '9999';
            drawing.style.animation = 'skillPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';

            document.body.appendChild(drawing);

            setTimeout(() => {
                drawing.style.transition = 'all 1s ease-out';
                drawing.style.transform = 'scale(0) rotate(360deg)';
                drawing.style.opacity = '0';
            }, 600);

            setTimeout(() => drawing.remove(), 1600);
        }, i * 80);
    }
}

// Energy Effect
function createEnergyEffect() {
    const energySymbols = ['⚡', '💪', '🐰', '🔥', '💫', '✨'];

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const energy = document.createElement('div');
            energy.textContent = energySymbols[Math.floor(Math.random() * energySymbols.length)];
            energy.style.position = 'fixed';
            energy.style.left = '50%';
            energy.style.top = '50%';
            energy.style.fontSize = '2rem';
            energy.style.pointerEvents = 'none';
            energy.style.zIndex = '9999';
            energy.style.transition = 'all 1.5s ease-out';

            document.body.appendChild(energy);

            const angle = (Math.PI * 2 * i) / 25;
            const distance = 200 + Math.random() * 100;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            setTimeout(() => {
                energy.style.transform = `translate(${tx}px, ${ty}px) scale(1.5) rotate(${Math.random() * 720}deg)`;
                energy.style.opacity = '0';
            }, 10);

            setTimeout(() => energy.remove(), 1500);
        }, i * 40);
    }
}

// Show Message
function showMessage(text) {
    const message = document.createElement('div');
    message.textContent = text;
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.background = 'linear-gradient(135deg, #FFB3D9, #D4BBFF)';
    message.style.color = 'white';
    message.style.padding = '1.5rem 2.5rem';
    message.style.borderRadius = '30px';
    message.style.fontSize = '1.5rem';
    message.style.fontWeight = '700';
    message.style.fontFamily = 'Fredoka, sans-serif';
    message.style.boxShadow = '0 12px 40px rgba(255, 179, 217, 0.5)';
    message.style.zIndex = '10000';
    message.style.pointerEvents = 'none';
    message.style.animation = 'skillPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';

    document.body.appendChild(message);

    setTimeout(() => {
        message.style.transition = 'all 0.5s ease-out';
        message.style.transform = 'translate(-50%, -50%) scale(0)';
        message.style.opacity = '0';
    }, 2000);

    setTimeout(() => message.remove(), 2500);
}

// Avatar Click
function initAvatar() {
    const avatar = document.querySelector('.avatar-marta');

    avatar.addEventListener('click', () => {
        const initial = avatar.querySelector('.avatar-initial');
        initial.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        initial.style.transform = 'rotate(360deg) scale(1.3)';

        setTimeout(() => {
            initial.style.transform = '';
        }, 600);

        createSparklesBurst(avatar);
        showMessage('Marta is awesome! 🌟');
    });
}

// Skill Cards Hover
function initSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.skill-icon > div');
            if (icon) {
                icon.style.transform = 'scale(1.3)';
            }
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.skill-icon > div');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
}

// About Items Interaction
function initAboutItems() {
    const aboutItems = document.querySelectorAll('.about-item');

    aboutItems.forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.about-icon');
            icon.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            icon.style.transform = 'scale(1.5) rotate(360deg)';

            setTimeout(() => {
                icon.style.transform = '';
            }, 500);

            const sparkles = ['✨', '💫', '⭐'];
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.textContent = sparkles[i];
                    sparkle.style.position = 'absolute';
                    sparkle.style.fontSize = '1.2rem';
                    sparkle.style.pointerEvents = 'none';
                    sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';
                    sparkle.style.left = '50%';
                    sparkle.style.top = '50%';

                    item.style.position = 'relative';
                    item.appendChild(sparkle);

                    setTimeout(() => sparkle.remove(), 1000);
                }, i * 100);
            }
        });
    });
}

// Sleeping Cat Click
function initSleepingCat() {
    const cat = document.querySelector('.sleeping-cat');

    cat.addEventListener('click', () => {
        cat.style.transition = 'transform 0.5s ease';
        cat.style.transform = 'rotate(360deg) scale(1.2)';

        setTimeout(() => {
            cat.style.transform = '';
        }, 500);

        showMessage('Shhh... cat is sleeping! 😺💤');
    });
}

// Cursor Trail
function initCursorTrail() {
    let lastTime = 0;
    const throttleDelay = 150;

    document.addEventListener('mousemove', (e) => {
        const currentTime = Date.now();

        if (currentTime - lastTime < throttleDelay) return;
        lastTime = currentTime;

        if (Math.random() > 0.8) {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            sparkle.style.fontSize = '1rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';

            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }
    });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    createMagicElements();
    initMascot();
    initCTAButtons();
    initAvatar();
    initSkillCards();
    initAboutItems();
    initSleepingCat();
    initCursorTrail();

    console.log('%c💖 Welcome to Marta\'s magical world! 💖', 'font-size: 24px; color: #FF8DC7; font-weight: bold;');
    console.log('%c✨ You are amazing! ✨', 'font-size: 18px; color: #D4BBFF;');
});

// Add sparkle animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnimation {
        0% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
        100% { opacity: 0; transform: scale(0) rotate(360deg); }
    }
`;
document.head.appendChild(style);
