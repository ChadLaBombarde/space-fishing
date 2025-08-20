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
                content: 'In the vast expanse of space, traditional bait won\'t cut it. Discover how holographic lures and quantum attractants can help you reel in the biggest catches from the stars. Space Baiting in No Man’s Sky: Reeling in the Cosmic Catch. In the boundless universe of No Man’s Sky, where planets teem with exotic flora and fauna, the concept of space baiting has captured the imagination of explorers seeking to interact with aquatic ecosystems. While fishing isn’t a native mechanic, players have creatively adapted the game’s exploration and crafting systems to simulate "space baiting"—luring and capturing elusive aquatic creatures dubbed "space fish." These bioluminescent, otherworldly beings inhabit the oceans, lakes, and caves of procedurally generated planets, from the tranquil lagoons of paradise worlds to the toxic seas of scorched planets. Using tools like the Nautilon submarine, terrain manipulator, and high-sensitivity scanners, players craft makeshift lures from local resources, such as ionized cobalt or glowing algae, to attract these creatures. The thrill lies in exploring diverse biomes, from the Glowing Abyss in the Eissentam Galaxy to the Coral Nebula in Odiwagiri, each offering unique species with vibrant scales or electrified fins. The art of space baiting requires both strategy and ingenuity, blending No Man’s Sky’s survival mechanics with player-driven creativity. To bait effectively, players must first analyze a planet’s ecosystem using the Analysis Visor to identify aquatic fauna and their behaviors. For instance, in the Frozen Fjords of the Hesperius Dimension, drilling ice holes with a terrain manipulator and deploying thermal bait—crafted from frost crystals—can lure the massive Arctic Leviathan. On stormy planets like those in the Isdoraijung Galaxy, timing is critical; players must cast lures between lightning strikes to attract Thunderfins, which feed on electrical surges. Community mods, like those found on Nexus Mods, enhance the experience by adding fishing rods or aquatic traps, though purists prefer using base-building tools to construct docks or lures from salvageable scrap. The challenge is not just in the catch but in adapting to each planet’s hazards—toxic rains, extreme heat, or low-gravity eddies—that make every baiting expedition a test of skill and preparation. The rewards of space baiting extend beyond the thrill of the chase, offering players a deeper connection to No Man’s Sky’s living universe. Captured space fish, whether scanned for nanites or harvested for rare biochemicals, fuel crafting and trading economies. For example, the Phosphorescent Snapper from Riwala’s underwater caves yields radiant scales that fetch high prices at trade terminals. Beyond resources, space baiting fosters a sense of discovery, as each planet’s aquatic ecosystem tells a unique story. Players share coordinates on forums like Reddit or the Galactic Hub, pointing to hotspots like Lunker Lake in the Euclid Galaxy, where colossal fish roam. As Hello Games continues to expand the game with updates like aquatic base-building or fauna interactions, space baiting could evolve into an official mechanic, but for now, it remains a vibrant, player-driven pursuit that transforms explorers into cosmic anglers, casting their lines into the stars.',
                image: "MICKFISH.png"
            },
            {
                title: 'Top 10 Space Fishing Spots',
                content: 'Explore our list of the best locations: #1. Asteroid Belt Alpha - Teeming with meteor minnows. #2. Black Hole Horizon - For the thrill-seekers chasing event horizon eels. And more! #3. Lunker Lake in Euclid Galaxy. A legendary lake on a lush planet in the Euclid Galaxy, known for spawning massive, bioluminescent space fish dubbed Lunkers. Found on a temperate world with calm weather, this lake’s deep waters shimmer with rare aquatic fauna. Use a high-powered scanner to locate fish clusters and cast from a crafted dock for a chance at colossal catches weighing up to 500 kg. #4. Abyssal Caldera (Hilbert Dimension) A volcanic ocean basin on a scorched planet, where geothermal vents attract heat-resistant space fish with metallic scales. The turbulent waters and hazardous environment make it a thrilling spot, but you’ll need an upgraded exosuit with thermal protection to fish safely. Look for glowing fish near the caldera’s edge. #5. Crystal Shoals (Calypso Galaxy) A shallow, crystalline lagoon on an exotic planet, teeming with iridescent space fish that feed on mineral-rich waters. The reflective environment makes spotting fish tricky, but using a Nomad exocraft to hover over the shoals improves your chances. These fish are prized for their gem-like fins, perfect for trading. #6. Glowing Abyss (Eissentam Galaxy) A deep-sea trench on a paradise planet, illuminated by bioluminescent flora and fauna. The abyss hosts elusive, eel-like space fish that emit faint pulses of light. Deploy a Nautilon submarine to explore the depths and use a sonar lure to attract these shy creatures. #7. Toxic Reefs (Budullangr Galaxy) Found on a toxic planet, these corrosive reefs are home to acid-resistant space fish with vibrant, venomous spines. Fishing here requires a hazard protection module, but the rare catches are worth it for their unique biochemical properties, useful for crafting.  #8.Frozen Fjords (Hesperius Dimension) A glacial lake on an icy planet, where frost-adapted space fish swim beneath thick ice sheets. Drill through the ice with a terrain manipulator to create fishing holes, and use thermal bait to attract species like the Arctic Leviathan, known for its massive size and slow movements. #9. Gravitational Eddy (Kikolgallr Galaxy) A unique lake affected by low-gravity anomalies, causing water and fish to float in mesmerizing patterns. These space fish, adapted to microgravity, are lightweight but tricky to catch. Use a jetpack to hover and cast precise lures to snag them mid-air. #10. Underwater Cave Network (Riwala Galaxy) A sprawling cave system beneath an ocean planet’s surface, filled with glowing, cave-dwelling space fish. The tight spaces and hostile fauna add challenge, but the rare Phosphorescent Snapper, found only in these caves, is a coveted catch for its radiant scales.',
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