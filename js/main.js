const projects = [
  {
    id: 'office', title: 'KOH Studios Office Design', type: 'Commercial · Studio headquarters',
    summary: 'A headquarters for my own interior design firm, with the brand identity, design philosophy and workspace all designed together.',
    text: [
      'This project challenged us to develop and design our own interior design firm, from establishing the brand identity and design philosophy to creating a headquarters that visually represents the values of the studio. KOH Studios was created as a client-focused interior design firm that believes successful spaces should respond to the individual needs, lifestyle and personality of each client.',
      'The headquarters reflects this philosophy through a warm, calming and sophisticated contemporary interior. Natural timber, soft neutral tones, warm metallic details, organic forms and carefully integrated greenery create a welcoming environment that feels professional without being overly corporate. Abundant natural light and layered ambient lighting further soften the spaces and contribute to a sense of comfort and wellbeing.',
      'The layout combines collaborative workspaces, consultation areas, meeting rooms, informal lounges and refreshment spaces, allowing both designers and clients to move comfortably between focused work and creative collaboration. Biophilic elements and natural materials are carried throughout, so the headquarters acts as an extension of the KOH Studios brand.'
    ],
    gallery: 6
  },
  {
    id: 'pgbison', title: 'PG Bison Competition: Vela Project', type: 'Hospitality · Sailing club clubhouse',
    summary: 'A sailing club clubhouse reimagined as a modern, welcoming destination that celebrates community and the water.',
    text: [
      'The Vela Project is the design of a sailing club clubhouse into a modern, welcoming destination that celebrates community, wellbeing and connection to nature. The word "Vela" means sail, symbolising movement, wind, freedom and the spirit of the water.',
      'The aim is to transform the traditional clubhouse into a calming and inspiring environment where members of the sailing club and residents can gather, socialise and relax while enjoying the natural beauty of the water. The concept is built on four ideas: wind, water, movement and community.'
    ],
    gallery: 0
  },
  {
    id: 'canopy', title: 'Golden Canopy Café', type: 'Hospitality · Amarula roastery and café',
    summary: 'A contemporary coffee roastery and café inspired by Amarula and the marula tree: "From Root to Roast".',
    text: [
      "Inspired by Amarula's rich African heritage and the iconic marula tree, The Golden Canopy reimagines nature, craftsmanship and community through a contemporary coffee roastery and café experience. The concept celebrates gathering beneath a golden canopy, creating a warm and inviting environment that encourages connection, interaction and relaxation.",
      'Organic forms, earthy colour palettes, natural timber, woven textures and biophilic elements establish a strong connection between the interior and its surrounding landscape. A central feature tree, statement lighting, African-inspired detailing and open coffee-roasting areas bring character and authenticity to the space.',
      'Vision: to become South Africa\'s most inspiring nature-inspired coffee destination, where exceptional coffee and meaningful connections flourish. Mission: to craft premium coffee experiences that bring people together through quality, hospitality and a deep connection to nature.'
    ],
    gallery: 3
  },
  {
    id: 'collab', title: 'Collab 2026: Butter', type: 'Hospitality · Café, retail and garden',
    summary: 'A lifestyle destination rooted in nature and farming heritage, combining café, local retail and a garden juice bar.',
    text: [
      'Rooted in nature, crafted for connection. Butter reimagines the traditional coffee stop as a vibrant lifestyle destination where community, comfort and creativity come together. Inspired by its rich farming heritage, the design celebrates natural materials, warm earthy tones and layered textures through the use of timber, raw stone, leather and subtle colour accents.',
      'Expansive windows invite natural light into the interior, creating a seamless connection with the surrounding landscape, while thoughtfully planned seating encourages interaction, relaxation and effortless movement. A welcoming café, locally crafted retail and a lush outdoor garden with a vibrant juice bar transform an everyday pitstop into a memorable experience.'
    ],
    gallery: 0
  },
  {
    id: 'lapalala', title: 'Lapalala Biodiversity Centre', type: 'Public · Education and conservation',
    summary: 'A biophilic centre in the Lapalala Wilderness Reserve where architecture, people and nature connect.',
    text: [
      'Inspired by nature, designed for discovery. The Lapalala Biodiversity Centre celebrates the beauty and ecological richness of the Lapalala Wilderness Reserve, creating an immersive space where architecture, people and nature connect.',
      'Rooted in biophilic design, the centre embraces organic forms, natural materials, earthy textures and expansive glazing to blur the boundaries between indoors and outdoors. A central tree and water feature bring nature into the heart of the building, while an art gallery, interactive educational spaces, café and tranquil reflection areas encourage exploration, learning and relaxation. More than a biodiversity centre, Lapalala is a sanctuary for conservation, creativity and connection.'
    ],
    gallery: 0
  },
  {
    id: 'forbes', title: 'Forbes Reef Penthouse', type: 'Residential · Luxury apartment',
    summary: 'An open-plan penthouse of refined marble, warm timber and subtle gold accents.',
    text: [
      'The Forbes Reef Penthouse features an open-plan living and dining area, refined marble finishes, warm timber detailing and subtle gold accents. Sculptural lighting, curved furniture and layered neutral textures create a sophisticated yet inviting atmosphere, while a seamless layout balances luxury, comfort and everyday functionality.',
      'Target market: young professionals, middle to upper-class residents, affluent individuals who value high-end finishes, young couples, small families and property investors interested in premium residential developments.'
    ],
    gallery: 0
  },
  {
    id: 'gillits', title: 'Old Gillits Airbnb: Train Station Redesign', type: 'Hospitality · Adaptive reuse',
    summary: 'An old train station transformed into an off-grid Mediterranean contemporary Airbnb retreat.',
    text: [
      "This redesign transforms the existing old train station building into a Mediterranean contemporary Airbnb retreat, focused on three key principles: sustainability, privacy and functionality. The design respects the character of the original building while introducing modern elements, natural materials, warm textures and statement features.",
      "The layout separates the private owner's residence from the guest accommodation, giving both users their own functional kitchen, dining, living, bedroom and bathroom spaces. High ceilings, statement lighting, arched forms and large windows enhance the Mediterranean-contemporary character.",
      'Sustainability plays an important role through recycled materials, solar panels, rainwater collection and reuse of the existing structure, allowing the property to operate largely off-grid. Large glass openings connect both interiors to a shared outdoor braai, comfortable seating and fire pit area.'
    ],
    gallery: 3
  },
  {
    id: 'ksa', title: 'KSA Kitchen Design Competition', type: 'Residential · Kitchen redesign',
    summary: 'A compact, outdated kitchen reborn around a curved two-level L-shaped island: "Designed for flow, built for function, and created for connection."',
    text: [
      'The KSA Kitchen redesign transforms a compact, outdated interior into a sophisticated, highly functional space that celebrates the kitchen as the heart of the home. Driven by the need for improved circulation, increased storage and effortless entertaining, the design redefines how everyday living and social interaction come together.',
      'At the centre is a striking two-level L-shaped island that combines cooking, dining and gathering. Its curved detailing softens the contemporary aesthetic and introduces integrated display shelving, while a dedicated coffee station with a parquet feature wall creates an inviting transition between kitchen and dining spaces.',
      'A spacious pantry, secondary storage room and fully equipped scullery keep preparation, storage and cleaning organised without interrupting the main living experience.'
    ],
    gallery: 4
  }
];

const $ = (s, r = document) => r.querySelector(s);
const grid = $('#projectGrid');
const modal = $('#modal');
const body = $('#modalBody');
const lightbox = $('#lightbox');
let current = 0;

projects.forEach((p, i) => {
  const b = document.createElement('button');
  b.className = 'card';
  b.setAttribute('aria-label', 'Open ' + p.title);
  b.innerHTML = `<img src="images/${p.id}-hero.jpg" alt="${p.title}" loading="lazy">
    <span class="card__cap"><small>${p.type}</small><strong>${p.title}</strong></span>`;
  b.addEventListener('click', () => openProject(i));
  grid.appendChild(b);
});

function openProject(i) {
  current = i;
  const p = projects[i];
  const gallery = Array.from({ length: p.gallery }, (_, n) =>
    `<img src="images/${p.id}-${n + 1}.jpg" alt="${p.title} render ${n + 1}" loading="lazy">`).join('');
  body.innerHTML = `
    <div class="m-hero" style="background-image:url(images/${p.id}-hero.jpg)">
      <div><small>${p.type}</small><h2 id="modalTitle">${p.title}</h2></div>
    </div>
    <div class="m-content">
      ${p.text.map(t => `<p>${t}</p>`).join('')}
      ${gallery ? `<h3>Renders</h3><div class="m-gallery">${gallery}</div>` : ''}
      <h3>Design board</h3>
      <img class="m-board" src="images/${p.id}-board.jpg" alt="${p.title} design board" loading="lazy">
      <div class="m-nav">
        <button data-d="-1">&larr; Previous</button>
        <button data-d="1">Next &rarr;</button>
      </div>
    </div>`;
  body.querySelectorAll('.m-gallery img, .m-board').forEach(im =>
    im.addEventListener('click', () => openLightbox(im.src, im.alt)));
  body.querySelectorAll('.m-nav button').forEach(btn =>
    btn.addEventListener('click', () => {
      openProject((current + Number(btn.dataset.d) + projects.length) % projects.length);
      modal.scrollTop = 0;
    }));
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function openLightbox(src, alt) {
  $('#lightboxImg').src = src; $('#lightboxImg').alt = alt;
  lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false');
}
function closeLightbox() {
  lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true');
}

$('#modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
$('#lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (lightbox.classList.contains('open')) closeLightbox();
  else if (modal.classList.contains('open')) closeModal();
});

// mobile nav
const toggle = $('#navToggle'), links = $('#navLinks');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
}));

// active link on scroll
const sections = [...document.querySelectorAll('main section[id]')];
const navA = [...links.querySelectorAll('a')];
sections.forEach(s =>
  new IntersectionObserver(([en]) => {
    if (en.isIntersecting) navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + s.id));
  }, { rootMargin: '-45% 0px -50% 0px' }).observe(s));

$('#year').textContent = new Date().getFullYear();
