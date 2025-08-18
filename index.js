// Function to show/hide tournament details
              function showDetails(id) {
            const element = document.getElementById(id);
            if (element.style.display === 'none') {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        }
      

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

//GLYPH FUNCTION
        
const input = document.getElementById('glyphInput');
        const display = document.getElementById('glyphDisplay');

        input.addEventListener('input', (e) => {
            // Convert to uppercase and filter invalid characters
            let value = e.target.value.toUpperCase().replace(/[^0-9A-F]/g, '');
            e.target.value = value; // Update input to reflect filtered value
            display.textContent = value;
        });

        // Prevent pinch zoom and double-tap zoom on mobile
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });

        let lastTouchEnd = 0;
        document.addEventListener('touchend', (e) => {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, false);