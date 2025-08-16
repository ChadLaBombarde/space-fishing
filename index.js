// Function to show/hide tournament details
      

        // Sample articles data
        const articles = [
            {
                title: 'The Art of Space Baiting',
                content: 'In the vast expanse of space, traditional bait won\'t cut it. Discover how holographic lures and quantum attractants can help you reel in the biggest catches from the stars.',
                image: "MICKFISH.png"
            },
            {
                title: 'Top 10 Space Fishing Spots',
                content: 'Explore our list of the best locations: 1. Asteroid Belt Alpha - Teeming with meteor minnows. 2. Black Hole Horizon - For the thrill-seekers chasing event horizon eels. And more!',
                image: "MICK4FISHINGSPOT.png"
            }
        ];

        // Function to feature an article

function featureArticle(index) {
    const featured = document.getElementById('featured-article');
    if (!articles || !articles[index]) {
        console.error("Articles array or index is undefined");
        featured.innerHTML = "<h3>Error</h3><p>Article not found.</p>";
        return;
    }
    featured.innerHTML = `
        <h3>${articles[index].title}</h3>
        <p>${articles[index].content}</p>
        <img src="${articles[index].image}" alt="${articles[index].title}" style="max-width: 100%; height: auto;">
    `;
}
        
// Generate random bubbles
   function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles');
    const bubbleCount = window.innerWidth < 768 ? 20 : 50; // Reduce bubbles on mobile for performance
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
        bubble.style.animationDelay = `${Math.random() * 2}s`; // Add slight delay for staggered effect
        bubble.style.width = `${Math.random() * 15 + 5}px`; // Smaller max size for performance
        bubble.style.height = bubble.style.width;
        bubblesContainer.appendChild(bubble);
    }
}

window.onload = () => {
    try {
        createBubbles();
    } catch (e) {
        console.error("Error creating bubbles:", e);
    }
};