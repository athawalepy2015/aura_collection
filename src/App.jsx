import { Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./App.css";

const artworks = [
  {
  id: 1,
  title: "Arhat",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779231478/Arhat_kag0aa.jpg",
  description:
    "A powerful martial arts inspired illustration featuring sharp expressions, bold colors, and the heart of a true champion."
  },


  {
    id: 2,
    title: "Jinu",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778906212/Jinu_yfotvu.jpg",
    description:
      "An intense character illustration filled with fiery red tones, dramatic emotion, and mysterious energy."
  },

  {
    id: 3,
    title: "Baby",
    category: "Fantasy & Creatures",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778906213/Baby_tyc48q.jpg",
    description:
      "A dreamy fantasy-style artwork blending deep blues and glowing purples to create a magical atmosphere."
  },

  {
    id: 4,
    title: "Abby",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778906212/Abby_xln1m3.jpg",
    description:
      "A stylish anime-inspired portrait highlighted by glowing purple tones and elegant character expression."
  },

  {
    id: 5,
    title: "Mystery",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778906213/Mystery_gsjmbd.jpg",
    description:
      "A soft emotional sketch symbolizing hidden thoughts, silence, and untold stories through cool tones."
  },

  {
    id: 6,
    title: "Romance",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778906213/Romance_jag5zr.jpg",
    description:
      "A vibrant fantasy portrait combining expressive eyes, rich colors, and emotional storytelling."
  },

  {
    id: 7,
    title: "Mystic Wolf",
    category: "Fantasy & Creatures",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778968696/Wolf_nsdjij.jpg",
    description:
      "A fantasy wolf illustration bursting with vibrant colors, wild energy, and imaginative artistic freedom."
  },

  {
    id: 8,
    title: "Shadow Mystery",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778968696/Mystery2_lncrjr.jpg",
    description:
      "A dark anime-inspired portrait layered with mystery, soft purple highlights, and cinematic atmosphere."
  },

  {
    id: 9,
    title: "Ruby Glow",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778968695/Abby2_tkiqju.jpg",
    description:
      "An expressive anime portrait glowing with bold reds and purples that symbolize individuality and emotion."
  },

  {
    id: 10,
    title: "Inner Chaos",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778968695/Jinu3_sviyl0.jpg",
    description:
      "A dramatic character illustration representing inner struggles through layered colors and bold expression."
  },

  {
    id: 11,
    title: "K-Pop Demon Hunter",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778968695/Jinu2_sknyvx.jpg",
    description:
      "An anime fantasy artwork combining K-pop fashion, supernatural themes, and striking character styling."
  },

  {
    id: 12,
    title: "Gojo Satoru",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778905882/Satoru_Gojo_lxroee.jpg",
    description:
      "A bold anime-inspired portrait capturing Gojo Satoru’s calm confidence through glowing blue tones, expressive shading, and cinematic energy."
  },

  {
    id: 13,
    title: "Missy Cooper",
    category: "Pencil Sketches",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969889/Missy_Cooper_-_Young_Sheldon_jocj24.jpg",
    description:
      "A detailed portrait sketch highlighting natural beauty, emotion, and smooth pencil textures."
  },

  {
    id: 14,
    title: "Superman Azure",
    category: "Superheroes",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969889/Superman_azxnzc.jpg",
    description:
      "A dark superhero-inspired sketch expressing strength, mystery, and heroic presence."
  },

  {
    id: 15,
    title: "Chester Legacy",
    category: "Music & Performance",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779231478/Chester45_hxlndw.jpg",
    description:
    "A powerful pencil portrait honoring musical passion, emotional intensity, and the unforgettable presence of Chester Bennington."
  },

  {
    id: 16,
    title: "Saja Boys",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969888/Saja_Boys_ptygzc.jpg",
    description:
      "A stylish anime group portrait celebrating friendship, creativity, and expressive personalities."
  },

  {
    id: 17,
    title: "Young Sheldon",
    category: "Portraits",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779231481/Young_Sheldon_cnmpt8.jpg",
    description:
    "A soft pencil portrait capturing thoughtful emotion, calm expression, and delicate sketch detailing."
  },

{
  id: 18,
  title: "Split Reality",
  category: "Music & Performance",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779231481/Chester78_saw4bq.jpg",
  description:
    "A bold artistic concept blending realism and cartoon styling to explore identity, emotion, and creative contrast."
},

  {
    id: 19,
    title: "Gojo Eyes",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969886/Gojo2_ogp3ni.jpg",
    description:
      "A minimalist anime sketch focused on Gojo’s iconic eyes, mystery, and emotional depth."
  },

  {
    id: 20,
    title: "Top Strongest - Cobra Kai",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969886/Cobra_Kai_f92kyy.jpg",
    description:
      "A collection of expressive character portraits celebrating strength, individuality, and confidence."
  },
  {
  id: 21,
  title: "Stage Performer - Chester Bennington",
  category: "Music & Performance",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969886/Chester_Benington_rs32x1.jpg",
  description:
    "A realistic concert-inspired sketch capturing the raw emotion, passion, and stage presence of a legendary performer."
},

{
  id: 22,
  title: "Young Sheldon",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778977433/Young_Sheldon_hceh0y.jpg",
  description:
    "A colorful portrait inspired by Young Sheldon, blending innocence, intelligence, and expressive artistic detail."
},

{
  id: 23,
  title: "Miguel Diaz - Cobra Kai",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778977432/Miguel7_stzmei.jpg",
  description:
    "A warm-toned character illustration filled with subtle emotions, realistic shading, and confident energy."
},

{
  id: 24,
  title: "Cobra Kai Legend - Miguel Diaz",
  category: "Pencil Sketches",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778977431/Miguel6_dcvnix.jpg",
  description:
    "A bold martial arts portrait combining dramatic pencil shading with determination and cinematic character presence."
},

{
  id: 25,
  title: "Karate Warrior",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778977429/Miguel5_hnhjtc.jpg",
  description:
    "An energetic action-inspired sketch representing discipline, fighting spirit, and fearless determination."
},

{
  id: 26,
  title: "Bobby Keene",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778977428/Miguel4_ye372v.jpg",
  description:
    "A fan-inspired portrait highlighting emotion, personality, and cinematic character storytelling."
},

{
  id: 27,
  title: "Miguel Diaz",
  category: "Pencil Sketches",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778977427/Miguel3_uwsdyg.jpg",
  description:
    "A realistic action-inspired pencil sketch expressing strength, movement, and determination."
},

{
  id: 28,
  title: "Cobra Kai Spirit - Miguel Diaz",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778977426/Miguel2_fh6uy8.jpg",
  description:
    "A vibrant martial arts themed artwork featuring emotional intensity, bold contrasts, and dynamic composition."
},

{
  id: 29,
  title: "Linkin Park Live",
  category: "Music & Performance",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778977425/Linkin_Park_d4dhup.jpg",
  description:
    "A musical performance illustration inspired by the emotion, power, and energy of live rock concerts."
},

{
  id: 30,
  title: "Puppet Smile",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778977424/King2_baxfxo.jpg",
  description:
    "A playful fantasy-inspired artwork combining exaggerated expressions, bold colors, and imaginative storytelling."
},

{
  id: 31,
  title: "Joyful Melody",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778977423/King1_qlhxu8.jpg",
  description:
    "A lively animated-style illustration filled with movement, cheerful emotion, and vibrant artistic energy."
},

{
  id: 32,
  title: "Will Byers",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222997/Will_Byers_dvpquc.jpg",
  description:
    "A cinematic fan-art portrait capturing mystery, emotion, and the haunting atmosphere of the character’s world."
},

{
  id: 33,
  title: "Minecraft - Totem of Undying",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222996/Totem_of_Undying_zfgjsw.jpg",
  description:
    "Saves you from death once, granting brief protective effects when activated."
},

{
  id: 34,
  title: "Steve Harrington",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222996/Steve_Harrington_wsjtly.jpg",
  description:
    "A retro-inspired portrait capturing emotion, personality, and cinematic lighting through expressive color work."
},

{
  id: 35,
  title: "Gojo Sketch",
  category: "Pencil Sketches",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222995/Satoru_Gojo_p6ekaj.jpg",
  description:
    "A soft anime pencil sketch focusing on expressive line work, iconic styling, and emotional atmosphere."
},

{
  id: 36,
  title: "Rammstein Band - Royal Faces",
  category: "Music & Performance",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222995/Rammstein_Band_itqlr0.jpg",
  description:
    "A collection of expressive music-inspired portrait sketches exploring personality, emotion, and performance energy."
},

{
  id: 37,
  title: "Thomas Shelby",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222996/Thomas_Sheby_utbnqe.jpg",
  description:
    "A cinematic portrait inspired by confidence, mystery, and timeless vintage character styling."
},
{
  id: 38,
  title: "Minecraft - Lonely Path",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222994/Minecraft_rhkcwz.jpg",
  description:
    "A Minecraft-inspired artwork symbolizing isolation, adventure, and emotional contrast through glowing colors and divided scenery."
},

{
  id: 39,
  title: "Mike Wheeler",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222994/Mike_Wheeler_qgr0bn.jpg",
  description:
    "A hand-drawn portrait inspired by retro storytelling, expressive facial detail, and nostalgic cinematic atmosphere."
},

{
  id: 40,
  title: "Burning Forest",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222994/Landscape_wwom2c.jpg",
  description:
    "A dramatic landscape glowing with fiery orange tones and textured brushwork that creates an intense cinematic atmosphere."
},

{
  id: 41,
  title: "Jinu - Shadow Witch",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222993/Jinu12_hysypr.jpg",
  description:
    "A dark fantasy-inspired portrait layered with mystery, glowing shadows, and supernatural cinematic energy."
},

{
  id: 42,
  title: "Super Saiyan Goku",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222993/Goku_-_Dragon_Ball_odkiyw.jpg",
  description:
    "An action-packed anime illustration capturing the explosive power, determination, and energy of Goku’s transformation."
},

{
  id: 43,
  title: "Giga Chad",
  category: "Pencil Sketches",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222993/GigaChad_ntpwes.jpg",
  description:
    "A bold pencil portrait focused on dramatic facial structure, intense shadows, and powerful expression."
},

{
  id: 44,
  title: "Giganotosaurus - Predator Beast",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222993/Giganotosaurus_cubvsi.jpg",
  description:
    "A prehistoric predator illustration filled with cinematic creature design, sharp anatomy, and fierce energy."
},

{
  id: 45,
  title: "Eleven",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779222993/Eleven_-_Stranger_Things_oqorfs.jpg",
  description:
    "A fan-art portrait inspired by mystery, emotional strength, and the supernatural atmosphere of Stranger Things."
},

{
  id: 46,
  title: "Raptor Sketch",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224915/Dino_3_fdq5uv.jpg",
  description:
    "A realistic dinosaur pencil sketch inspired by prehistoric anatomy, movement, and cinematic creature design."
},

{
  id: 47,
  title: "Chester Bennington Portrait",
  category: "Music & Performance",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224914/Chester_Benington_2_r7cckn.jpg",
  description:
    "A deeply emotional portrait sketch honoring musical passion, expression, and the spirit of live performance."
},

{
  id: 48,
  title: "Roaring Dinosaur",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224914/Dino_2_nvbnq4.jpg",
  description:
    "A fierce prehistoric creature sketch capturing raw power, motion, and cinematic monster energy."
},

{
  id: 49,
  title: "Chester Screaming",
  category: "Music & Performance",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224913/Chester_4_eey9ys.jpg",
  description:
    "A dramatic performance portrait expressing emotion, intensity, and the electrifying atmosphere of live music."
},

{
  id: 50,
  title: "Chester Live Performance",
  category: "Music & Performance",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224912/Chester_6_qrhgbv.jpg",
  description:
    "A concert-inspired illustration celebrating artistic passion, stage energy, and emotional musical storytelling."
},

{
  id: 51,
  title: "Bear Sketch",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224912/Bear_jhrlay.jpg",
  description:
    "A wildlife-inspired pencil drawing focusing on natural texture, strength, and the calm spirit of the animal world."
},

{
  id: 52,
  title: "Batman",
  category: "Superheroes",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224911/Batman_owqgmj.jpg",
  description:
    "A dark superhero-inspired artwork exploring mystery, shadow, and the iconic atmosphere of Gotham’s protector."
},
{
  id: 53,
  title: "Alpha Predator",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224919/Dino8_j11rrh.jpg",
  description:
    "A fierce dinosaur sketch showcasing razor-sharp anatomy, aggressive motion, and cinematic prehistoric energy."
},

{
  id: 54,
  title: "Wild Beast",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224918/Dino_7_az2c3u.jpg",
  description:
    "A fantasy-inspired creature design filled with exaggerated expressions, bold textures, and imaginative storytelling."
},

{
  id: 55,
  title: "Spiked Hunter",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224918/Dino_l6r8ud.jpg",
  description:
    "A dynamic prehistoric creature artwork featuring powerful posture, sharp detailing, and intense visual energy."
},

{
  id: 56,
  title: "Tiny Courage",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224918/Dino_10_yp5efr.jpg",
  description:
    "A storytelling-inspired sketch symbolizing bravery and survival through dramatic creature contrast."
},

{
  id: 57,
  title: "Raging Rex",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224917/Dino_9_hwniej.jpg",
  description:
    "A roaring dinosaur illustration inspired by blockbuster creature design and cinematic action scenes."
},

{
  id: 58,
  title: "Cyber Raptor",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224917/Dino_6_bretln.jpg",
  description:
    "A futuristic dinosaur-inspired creature concept blending fantasy imagination with cyber-style detailing."
},

{
  id: 59,
  title: "Ancient Hunter",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224916/Dino_8_lw7cqw.jpg",
  description:
    "A prehistoric predator illustration emphasizing realistic anatomy, dramatic shadows, and primal energy."
},

{
  id: 60,
  title: "Clawed Runner",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224916/Dino_5_ek12ud.jpg",
  description:
    "A fast-moving dinosaur-inspired sketch capturing speed, balance, and action-packed movement."
},

{
  id: 61,
  title: "Jurassic King",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224915/Dino_4_kgbmw1.jpg",
  description:
    "A cinematic predator concept inspired by legendary dinosaur worlds and large-scale creature storytelling."
},

{
  id: 62,
  title: "Traditional Portrait",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224924/Miguel_Cobra_Kai_2_jso0s5.jpg",
  description:
    "A detailed portrait sketch inspired by traditional clothing, expressive emotion, and elegant facial structure."
},

{
  id: 63,
  title: "Miguel - Focused Expression",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224924/Miguel_5_ihiyqv.jpg",
  description:
    "A realistic facial portrait emphasizing concentration, emotion, and dramatic shadow detailing."
},

{
  id: 64,
  title: "Quiet Countryside",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224922/House_qrvi95.jpg",
  description:
    "A peaceful countryside landscape sketch filled with calm scenery, natural beauty, and nostalgic atmosphere."
},

{
  id: 65,
  title: "Emily",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224921/Emily_Armstrong_ookpdc.jpg",
  description:
    "A soft emotional portrait exploring simplicity, subtle expression, and cinematic artistic storytelling."
},

{
  id: 66,
  title: "Jinu - Smile",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224922/Jinu4_hsegms.jpg",
  description:
    "A clean anime-inspired sketch capturing playful expression, simplicity, and emotional charm."
},

{
  id: 67,
  title: "Ancient Dragon",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224921/Dragon_anyoty.jpg",
  description:
    "A mythical dragon illustration filled with fantasy atmosphere, detailed wings, and powerful creature design."
},

{
  id: 68,
  title: "Eiffel Tower",
  category: "Architecture & Objects",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224921/Eiffel_Tower_dm4msk.jpg",
  description:
    "A clean architectural sketch capturing the elegance, structure, and timeless beauty of the Eiffel Tower."
},

{
  id: 69,
  title: "Anime Squad",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224921/Goku_h7vanu.jpg",
  description:
    "A playful anime-inspired group sketch filled with expressive personalities, energy, and creative character styling."
},

{
  id: 70,
  title: "Predator Skull",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224920/Dino_11_hncxck.jpg",
  description:
    "A fierce dinosaur-inspired artwork emphasizing sharp anatomy, intimidating structure, and prehistoric intensity."
},

{
  id: 71,
  title: "Shadow Beast",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224920/Dragon_2_wxdo0r.jpg",
  description:
    "A dark fantasy creature drawing layered with dramatic shadows, mystery, and cinematic creature design."
},

{
  id: 72,
  title: "Martial Spirit",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224946/Arhat2_ymsffe.jpg",
  description:
    "A martial arts-inspired portrait capturing discipline, confidence, and the focused mindset of a true warrior."
},

{
  id: 73,
  title: "Karate Pose",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224945/Arhat_5_ooz0ap.jpg",
  description:
    "A dynamic action sketch filled with movement, balance, and the fearless energy of martial arts training."
},

{
  id: 74,
  title: "Rich Everyday",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224945/Arhat_wopzzn.jpg",
  description:
    "A creative storytelling artwork imagining dreams, ambition, and a luxurious future lifestyle through expressive illustration."
},

{
  id: 75,
  title: "Screaming Emotion",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224945/Arhat_3_kd84n7.jpg",
  description:
    "An emotionally intense portrait sketch capturing raw expression, dramatic tension, and cinematic emotion."
},

{
  id: 76,
  title: "Young Superman",
  category: "Superheroes",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224926/Superman_2_szdq8k.jpg",
  description:
    "A superhero-inspired artwork symbolizing courage, imagination, and the dream of becoming something extraordinary."
},

{
  id: 77,
  title: "Traditional Boy",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224926/Miguel_Cobra_Kai_4_bvxxjj.jpg",
  description:
    "A soft portrait sketch inspired by traditional clothing, calm expression, and detailed pencil shading."
},

{
  id: 78,
  title: "Focused Warrior",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224926/Miguel_8_d2foqs.jpg",
  description:
    "A realistic facial sketch emphasizing concentration, determination, and strong emotional intensity."
},

{
  id: 79,
  title: "Sensei",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224926/Samurai_Inti_Marshial_Arts_qir6oh.jpg",
  description:
    "A martial arts-inspired portrait representing wisdom, leadership, discipline, and inner strength."
},

{
  id: 80,
  title: "Silent Expression",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224926/Miguel_9_ovhfxe.jpg",
  description:
    "A calm and expressive portrait sketch exploring silence, emotion, and balanced artistic composition."
},

{
  id: 81,
  title: "Hoodie Character",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224925/Miguel_7_nkyfnn.jpg",
  description:
    "A casual character design sketch filled with personality, modern styling, and expressive visual storytelling."
},

{
  id: 82,
  title: "Miguel Diaz",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779224925/Miguel_Cobra_Kai_3_uwrtb0.jpg",
  description:
    "A fan-art portrait inspired by determination, resilience, and the emotional journey of a modern martial arts hero."
},

{
  id: 83,
  title: "Twin Predators",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228205/Dino43_e5l4mz.jpg",
  description:
    "A cinematic dinosaur artwork featuring two prehistoric predators locked in an intense and dramatic encounter."
},

{
  id: 84,
  title: "Sunny Safari",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228205/Deer_xhtikb.jpg",
  description:
    "A cheerful nature-inspired drawing capturing peaceful wildlife, bright scenery, and playful imagination."
},

{
  id: 85,
  title: "Moonlight Bat",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228204/BAt_z8dvn3.jpg",
  description:
    "A fantasy night-creature illustration glowing under moonlight with mysterious wings and magical atmosphere."
},

{
  id: 86,
  title: "Soccer Champion",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228204/Art_grew4o.jpg",
  description:
    "An energetic sports-inspired artwork celebrating determination, action, and the excitement of football competition."
},

{
  id: 87,
  title: "Pink Unicorn",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228189/Unicorn_o9lapo.jpg",
  description:
    "A colorful fantasy unicorn illustration filled with playful imagination, charm, and magical storytelling."
},

{
  id: 88,
  title: "Justice League Hero",
  category: "Superheroes",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228188/Superhero76_a7vrkb.jpg",
  description:
    "A superhero-inspired drawing showcasing bravery, colorful costume design, and comic-book style energy."
},

{
  id: 89,
  title: "Masked Defender",
  category: "Superheroes",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228187/Superhero12_xr0hpa.jpg",
  description:
    "A heroic portrait illustration featuring bold costume colors, confidence, and action-inspired character styling."
},

{
  id: 90,
  title: "Flying Superman",
  category: "Superheroes",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228187/Superhero8_a3ms39.jpg",
  description:
    "A dynamic superhero artwork capturing the excitement of flight, strength, and fearless determination."
},

{
  id: 91,
  title: "Monkey King",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228186/Superhero4_dzg2pv.jpg",
  description:
    "A playful fantasy character illustration inspired by mythology, adventure, and colorful storytelling."
},

{
  id: 92,
  title: "Mini Superman",
  category: "Superheroes",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228186/Superhero6_d6ssiq.jpg",
  description:
    "A playful superhero illustration filled with courage, comic-book energy, and vibrant childhood imagination."
},

{
  id: 93,
  title: "Piggy Family",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228185/Peppa_Pig_q8ugdo.jpg",
  description:
    "A cheerful cartoon-inspired family drawing celebrating happiness, color, and playful storytelling."
},

{
  id: 94,
  title: "Golden Birds",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228184/Parrot_fynjo4.jpg",
  description:
    "A bright nature-inspired artwork capturing peaceful birds, warm sunlight, and colorful artistic charm."
},

{
  id: 95,
  title: "Funny Monster Parade",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228183/Oggy_gsllht.jpg",
  description:
    "A fun cartoon-style creature drawing filled with humor, imagination, and energetic character expressions."
},

{
  id: 96,
  title: "Color Splash Fish",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228182/Nemo_pjr7j7.jpg",
  description:
    "A vibrant underwater-inspired artwork featuring colorful fish and playful aquatic imagination."
},

{
  id: 97,
  title: "Best Friends",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228182/Kids_dby9sg.jpg",
  description:
    "A heartwarming childhood drawing celebrating friendship, happiness, and joyful memories."
},

{
  id: 98,
  title: "Golden Horse",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228181/Horse_ypnqz7.jpg",
  description:
    "A graceful horse illustration capturing natural beauty, strength, and elegant movement through warm earthy tones."
},

{
  id: 99,
  title: "Hawk Mohawk",
  category: "Anime & Fan Art",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228181/Hawk_bafv4i.jpg",
  description:
    "A bold fan-art inspired sketch featuring dramatic hairstyle design, attitude, and expressive character energy."
},

{
  id: 100,
  title: "Elegant Shades",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228179/Girl2_f7rnma.jpg",
  description:
    "A stylish portrait illustration capturing confidence, elegance, and modern artistic expression."
},

{
  id: 101,
  title: "Elegant Portrait",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228179/Girl1_uav7we.jpg",
  description:
    "A colorful hand-drawn portrait capturing elegance, confidence, and expressive artistic detail."
},

{
  id: 102,
  title: "Rainy Day Giraffe",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228179/Giraffe1_zn93de.jpg",
  description:
    "A cheerful wildlife-inspired drawing featuring a playful giraffe enjoying a peaceful rainy day."
},

{
  id: 103,
  title: "Happy Giraffes",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228178/Giraffe_iiikuc.jpg",
  description:
    "A heartwarming animal artwork celebrating friendship, love, and joyful imagination through vibrant colors."
},

{
  id: 104,
  title: "Ganesha",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228177/Ganesha_c5bwty.jpg",
  description:
    "A joyful illustration of Lord Ganesha dancing with playful energy, colorful details, and a festive artistic style."
},

{
  id: 105,
  title: "Pink Flamingo",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228176/Flamingo_podnzp.jpg",
  description:
    "A bright tropical-inspired flamingo drawing filled with charm, elegance, and vibrant pink tones."
},

{
  id: 106,
  title: "Cool Shades",
  category: "Portraits",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228176/FandW_aqlcmy.jpg",
  description:
    "A stylish cartoon portrait showcasing confidence, attitude, and playful artistic character design."
},

{
  id: 107,
  title: "Duck Family",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228175/Family2_utcyyb.jpg",
  description:
    "A peaceful family-inspired artwork capturing warmth, togetherness, and colorful outdoor scenery."
},

{
  id: 108,
  title: "Elephant Bond",
  category: "Nature & Landscape",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228175/Family1_fvotyv.jpg",
  description:
    "A soft pencil artwork portraying love, care, and the emotional connection within an elephant family."
},

{
  id: 109,
  title: "Moon Watcher",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228174/Dream_bxdmvl.jpg",
  description:
    "A dreamy fantasy-inspired scene featuring a mysterious figure reaching toward the glowing moonlit sky."
},

{
  id: 110,
  title: "Battle Arena",
  category: "Fantasy & Creatures",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228173/Dino123_r8ldxt.jpg",
  description:
    "An action-filled fantasy artwork combining dramatic combat, vibrant colors, and imaginative storytelling."
},

{
  id: 111,
  title: "Thunder Jaw",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228172/Dino67_e4zrs3.jpg",
  description:
    "A fierce close-up dinosaur illustration featuring sharp teeth, dramatic detail, and powerful prehistoric energy."
},

{
  id: 112,
  title: "Green Raptor",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228172/Dino78_uzif3o.jpg",
  description:
    "A colorful dinosaur sketch inspired by classic prehistoric adventures and imaginative creature design."
},

{
  id: 113,
  title: "Jurassic Beast",
  category: "Dinosaurs",
  image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1779228170/Dino54_xalb96.jpg",
  description:
    "A detailed prehistoric monster artwork filled with textured patterns, cinematic intensity, and bold artistic imagination."
},

{
    id: 114,
    title: "Jackie",
    category: "Nature & Landscape",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969888/Jakie_-_Dog_jvcylq.jpg",
    description:
      "A heartwarming puppy sketch symbolizing loyalty, innocence, and playful energy."
  },

  {
    id: 115,
    title: "Miguel Hawk",
    category: "Anime & Fan Art",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969887/Hawk-Miguel_qormtf.jpg",
    description:
      "A creative duo portrait blending anime-inspired style with expressive pencil detailing."
  },

    {
    id: 116,
    title: "Miguel Cobra Kai",
    category: "Portraits",
    image: "https://res.cloudinary.com/dvrbbznkv/image/upload/v1778969888/Miguel_Cobra_Kai_qmcy8i.jpg",
    description:
      "A bold martial-arts inspired figure sketch expressing determination, movement, and confidence."
  },


];

const categories = [
  "All",
  "Anime & Fan Art",
  "Portraits",
  "Pencil Sketches",
  "Fantasy & Creatures",
  "Dinosaurs",
  "Music & Performance",
  "Nature & Landscape",
  "Superheroes",
  "Architecture & Objects"
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // Visitor Counter
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const visits = Number(localStorage.getItem("visitorCount")) || 0;
    const updatedVisits = visits + 1;

    localStorage.setItem("visitorCount", updatedVisits);
    setVisitorCount(updatedVisits);
  }, []);
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
          <h2>Aura Collection By Arhat Athawale</h2>
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

      <footer>
  © Aura Collection. Made with love. All artwork is original and protected by copyright.
  <br />
  Visitors: {visitorCount}
</footer>
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
