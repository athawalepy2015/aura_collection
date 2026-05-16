import { Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import "./App.css";

const artworks = [
  {
    id: 1,
    title: "Gojo Satoru",
    category: "Anime",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778905882/Satoru_Gojo_lxroee.jpg",
    description:
      "A bold anime-inspired portrait capturing the calm yet powerful aura of Gojo Satoru through vibrant blue tones and expressive shading."
  },
  {
    id: 2,
    title: "Jinu",
    category: "Anime",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778906212/Jinu_yfotvu.jpg",
    description:
      "An intense character illustration using fiery red shades to express confidence, mystery, and strong emotion."
  },
  {
    id: 3,
    title: "Baby",
    category: "Anime",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778906213/Baby_tyc48q.jpg",
    description:
      "A dreamy fantasy-style artwork blending deep blue and purple colors to create a mysterious and magical atmosphere."
  },
  {
    id: 4,
    title: "Abby",
    category: "Anime",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778906212/Abby_xln1m3.jpg",
    description:
      "A stylish anime-inspired portrait featuring glowing purple tones and dramatic contrast that highlights elegance and individuality."
  },
  {
    id: 5,
    title: "Mystery",
    category: "Anime",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778906213/Mystery_gsjmbd.jpg",
    description:
      "A soft yet emotional character sketch symbolizing hidden thoughts, silence, and untold stories through cool pink and dark tones."
  },
  {
    id: 6,
    title: "Romance",
    category: "Anime",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778906213/Romance_jag5zr.jpg",
    description:
      "A vibrant fantasy portrait combining contrasting colors and expressive eyes to represent passion, emotion, and imagination."
  },
  {
  id: 7,
  title: "Mystic Wolf",
  category: "Colored Pencil Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778968696/Wolf_nsdjij.jpg",
  description:
    "A vibrant fantasy wolf illustration created with bold pink and blue tones, expressing energy, imagination, and wild artistic freedom."
},

{
  id: 8,
  title: "Shadow Mystery",
  category: "Anime",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778968696/Mystery2_lncrjr.jpg",
  description:
    "A dark anime-inspired portrait featuring soft purple highlights and hidden emotions, creating a mysterious and dramatic atmosphere."
},

{
  id: 9,
  title: "Ruby Glow",
  category: "Anime",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778968695/Abby2_tkiqju.jpg",
  description:
    "An expressive anime portrait using glowing red and purple shades to symbolize confidence, emotion, and individuality."
},

{
  id: 10,
  title: "Inner Chaos",
  category: "Anime",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778968695/Jinu3_sviyl0.jpg",
  description:
    "A dramatic character illustration representing inner struggles and intense emotions through layered colors and bold facial expressions."
},

{
  id: 11,
  title: "K-Pop Demon Hunter",
  category: "Anime",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778968695/Jinu2_sknyvx.jpg",
  description:
    "An anime-inspired fantasy artwork combining K-pop fashion and supernatural themes with sharp contrasts and creative character styling."
},
{
  id: 12,
  title: "George Cooper",
  category: "Pencil Sketches",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969889/George_Cooper_-_Young_Sheldon_v3a6cg.jpg",
  description:
    "A realistic pencil portrait capturing calm expression and soft facial details through delicate sketching techniques."
},

{
  id: 13,
  title: "Missy Cooper",
  category: "Pencil Sketches",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969889/Missy_Cooper_-_Young_Sheldon_jocj24.jpg",
  description:
    "A detailed portrait sketch highlighting natural beauty, soft emotions, and elegant pencil shading."
},

{
  id: 14,
  title: "Superman Azure",
  category: "Anime",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969889/Superman_azxnzc.jpg",
  description:
    "A superhero-inspired sketch combining strength and mystery through dark pencil shading and dramatic character styling."
},

{
  id: 15,
  title: "Miguel Cobra Kai",
  category: "Pencil Sketches",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969888/Miguel_Cobra_Kai_qmcy8i.jpg",
  description:
    "A bold action-inspired figure sketch expressing determination, strength, and movement through expressive pencil work."
},

{
  id: 16,
  title: "Saja Boys",
  category: "Anime",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969888/Saja_Boys_ptygzc.jpg",
  description:
    "A stylish group character sketch inspired by anime and K-pop aesthetics, showcasing friendship, personality, and creativity."
},

{
  id: 17,
  title: "Jackie",
  category: "Pencil Sketches",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969888/Jakie_-_Dog_jvcylq.jpg",
  description:
    "A cute hand-drawn puppy sketch symbolizing loyalty, innocence, and warmth through simple artistic storytelling."
},

{
  id: 18,
  title: "Miguel Hawk",
  category: "Anime",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969887/Hawk-Miguel_qormtf.jpg",
  description:
    "A creative anime-inspired duo portrait expressing teamwork and personality through classic pencil sketch techniques."
},

{
  id: 19,
  title: "Gojo Eyes",
  category: "Anime",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969886/Gojo2_ogp3ni.jpg",
  description:
    "A minimalist anime sketch of Gojo Satoru focusing on emotional eyes, mystery, and iconic character presence."
},

{
  id: 20,
  title: "Top Strongest - Cobra Kai",
  category: "Anime",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969886/Cobra_Kai_f92kyy.jpg",
  description:
    "A collection of anime-inspired character portraits celebrating individuality, strength, and expressive facial sketching."
},

{
  id: 21,
  title: "Stage Performer - Chester Bennington",
  category: "Pencil Sketches",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969886/Chester_Benington_rs32x1.jpg",
  description:
    "A realistic performance sketch capturing musical passion and stage energy through smooth pencil shading."
},

];

const categories = [
  "All",
  "Pencil Sketches",
  "Nature",
  "Anime",
  "Colored Pencil Art",
  "Paintings"
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  return (
    <div 
    className={darkMode ? "app dark" : "app"}
    onContextMenu={(e) => e.preventDefault()}
    >
      <nav className="navbar">
        <div className="brand">
          <img
            src="https://res.cloudinary.com/dvrbbznkv/image/upload/v1778906728/Arhat_Logo_kvkseh.png"
            alt="Aura Collection Logo"
            className="brand-logo"
          />
          <h2>Aura Collection</h2>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={() => setDarkMode(!darkMode)} className="theme-btn">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      <section id="home" className="hero">
        <p className="tagline">Digital Art Exhibition</p>
        <h1>Welcome to my little world of drawings.</h1>
        <p>
          A beautiful online gallery to save and share drawings, sketches,
          paintings, and creative ideas.
        </p>
        <a href="#gallery" className="main-btn">
          View Gallery
        </a>
      </section>

      <section id="about" className="section">
        <h2>About Aura Collection</h2>
        <p>
          Welcome to Aura Collection — a place where imagination, creativity,
          and passion for art come together. I am Arhat, an artist who loves
          drawing, coloring, and exploring new ideas through creativity.
        </p>
        <p>
          Aura Collection is more than just an art gallery. It is my personal
          creative journey where I share artwork that reflects imagination,
          emotions, and artistic growth.
        </p>
      </section>

      <section className="section">
        <h2>Categories</h2>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section id="gallery" className="section">
        <h2>Gallery</h2>

        <div className="gallery-grid">
          {filteredArtworks.map((art) => (
            <div
              className="art-card"
              key={art.id}
              onClick={() => setSelectedArtwork(art)}
            >
            <div className="image-wrapper">  
              <img
                src={art.image}
                alt={art.title}
                draggable="false"
              />
              <span className="watermark">
                Aura Collection
              </span>
            </div>
              <div className="art-info">
                <p className="category">{art.category}</p>
                <h3>{art.title}</h3>
                <p className="description">{art.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Thank you for visiting the gallery.</p>
        <p>Email: athawale.pooja2015@gmail.com</p>
      </section>

      <footer>© Aura Collection. Made with love. All artwork is original and protected by copyright.</footer>

      {selectedArtwork && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setSelectedArtwork(null)}
            >
              <X size={22} />
            </button>

            <img 
              src={selectedArtwork.image} 
              alt={selectedArtwork.title} 
              draggable="false"
              />

            <h2>{selectedArtwork.title}</h2>
            <p className="category">{selectedArtwork.category}</p>
            <p className="description">{selectedArtwork.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;