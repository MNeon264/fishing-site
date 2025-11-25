const frequency = 200;

const createBubble = () => {
    const bubbleContainer = document.createElement('div');
    bubbleContainer.classList.add('bubble-container');

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Randomize Size
    const size = Math.random() * 60 + 20 + 'px';
    bubbleContainer.style.width = size;
    bubbleContainer.style.height = size;

    // Randomize Position
    bubbleContainer.style.left = Math.random() * 100 + 'vw';

    // Randomize Speed
    const duration = Math.random() * 4 + 4; 
    bubbleContainer.style.animationDuration = duration + 's';

    // Add Pop Event
    bubble.addEventListener('click', function(clickEvent) {
        clickEvent.stopPropagation();        
    
        this.classList.add('popped');

        bubble.addEventListener('animationend', () => {
            if (this.parentElement) this.parentElement.remove();
        });
    });

    bubbleContainer.appendChild(bubble);
    document.body.appendChild(bubbleContainer);

    bubbleContainer.addEventListener('animationend', () => {
        bubbleContainer.remove();
    });
};

const handleVisibilityChange = () => {
    if (document.hidden) {
        clearInterval(generationInterval);
    } else {
        generationInterval = setInterval(createBubble, frequency);
    };
};


document.addEventListener("visibilitychange", handleVisibilityChange);

setInterval(createBubble, frequency);