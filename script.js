function createBubble() {
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

        setTimeout(() => {
            this.remove();
        }, 200);
    });

    bubbleContainer.appendChild(bubble)
    document.body.appendChild(bubbleContainer);

    setTimeout(() => {
        if (document.body.contains(bubbleContainer)) {
            bubbleContainer.remove();
        };
    }, duration * 1000);
};

setInterval(createBubble, 300);