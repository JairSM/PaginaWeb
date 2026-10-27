const eras = [
  {
    id:"ancient", number:"01", title:"La galaxia antigua", period:"Mitos y civilizaciones",
    canonTitle:"Ecos del pasado",
    canon:"El canon actual deja muchos milenios de historia antigua abiertos a nuevas narraciones. Se conocen culturas, tradiciones sensibles a la Fuerza y antecedentes de órdenes posteriores, pero no existe una única crónica canónica completa de toda esta era.",
    canonCause:"Las civilizaciones exploran la Fuerza, desarrollan tradiciones propias y establecen rutas y culturas a lo largo de la galaxia.",
    canonImpact:"Estos antecedentes ayudan a explicar por qué distintas sociedades interpretan la Fuerza de maneras diferentes.",
    legendsTitle:"La Antigua República y los Sith",
    legends:"En Legends, la historia antigua está mucho más desarrollada. Incluye antiguas guerras entre Jedi y Sith, la expansión de la Orden Sith y figuras como Darth Revan y Darth Bane, cada una dentro de relatos y periodos específicos.",
    legendsCause:"Las disputas sobre el poder, la interpretación de la Fuerza y el control de sistemas provocan guerras que se prolongan durante generaciones.",
    legendsImpact:"Las guerras antiguas moldean las instituciones Jedi y Sith y explican tradiciones que reaparecen en relatos posteriores.",
    tag:"Era remota"
  },
  {
    id:"republic", number:"02", title:"La República Galáctica", period:"Instituciones y expansión",
    canonTitle:"La República y la Orden Jedi",
    canon:"Durante siglos, la República Galáctica reúne numerosos mundos bajo instituciones comunes. Los Jedi sirven como guardianes de la paz, mediadores y protectores, aunque su papel y sus decisiones también son objeto de debate.",
    canonCause:"El comercio, la diplomacia y la cooperación crean una estructura política amplia, pero las desigualdades y tensiones entre sistemas nunca desaparecen por completo.",
    canonImpact:"La República se convierte en el centro político de gran parte de la galaxia conocida y los Jedi adquieren una presencia importante en sus asuntos.",
    legendsTitle:"Una República de milenios",
    legends:"Legends presenta una larga sucesión de reformas, conflictos y guerras que afectan a la República y a la Orden Jedi. La historia varía según el periodo y las obras que forman parte de esta continuidad.",
    legendsCause:"La expansión galáctica convive con rivalidades regionales, amenazas externas y conflictos entre distintas tradiciones de la Fuerza.",
    legendsImpact:"La historia republicana de Legends amplía el trasfondo de órdenes, mundos y personajes antiguos.",
    tag:"República"
  },
  {
    id:"fall", number:"03", title:"La caída de la República", period:"Crisis y Guerras Clon",
    canonTitle:"La crisis fabricada",
    canon:"La crisis separatista divide a la galaxia. El Canciller Palpatine obtiene poderes extraordinarios durante las Guerras Clon y aprovecha el conflicto para debilitar las instituciones republicanas. En secreto, manipula a ambos bandos.",
    canonCause:"El descontento político, la corrupción, el miedo y la guerra crean las condiciones para que Palpatine concentre el poder.",
    canonImpact:"La Orden 66 lleva a la persecución de los Jedi y Palpatine transforma la República en el Imperio Galáctico. Anakin Skywalker cae al lado oscuro y se convierte en Darth Vader.",
    legendsTitle:"Guerras y cambios de régimen",
    legends:"Legends también narra la transformación de la República y la caída de los Jedi en esta etapa, junto con relatos adicionales sobre supervivientes y acontecimientos posteriores. Los detalles de otras épocas antiguas pertenecen a su propia cronología.",
    legendsCause:"El conflicto militar y la manipulación política permiten la concentración del poder en manos de Palpatine.",
    legendsImpact:"El Imperio sustituye a la República y cambia radicalmente la vida de numerosos mundos.",
    tag:"Crisis galáctica"
  },
  {
    id:"empire", number:"04", title:"El dominio del Imperio", period:"Represión y resistencia",
    canonTitle:"La galaxia bajo el Imperio",
    canon:"El Imperio impone un gobierno autoritario, extiende su control militar y persigue a sus opositores. Al mismo tiempo, distintas células rebeldes comienzan a coordinarse contra el régimen.",
    canonCause:"Palpatine busca consolidar su poder y eliminar amenazas. La represión y la construcción de armas como la Estrella de la Muerte alimentan la resistencia.",
    canonImpact:"La Alianza Rebelde se convierte en una fuerza capaz de desafiar al Imperio. La misión de conseguir los planos de la Estrella de la Muerte permite descubrir una vulnerabilidad decisiva.",
    legendsTitle:"Resistencia en tiempos imperiales",
    legends:"En Legends se amplían las historias de agentes imperiales, redes rebeldes, supervivientes Jedi y comunidades que resisten. Los relatos varían en alcance y detalle, pero comparten el contexto de dominio imperial.",
    legendsCause:"El control militar, la vigilancia y la desigualdad generan resistencia en distintos sectores de la galaxia.",
    legendsImpact:"Las acciones de grupos muy diferentes contribuyen a debilitar el régimen y preparar el camino para su derrota.",
    tag:"Imperio"
  },
  {
    id:"rebellion", number:"05", title:"La Rebelión y la Nueva República", period:"Esperanza y reconstrucción",
    canonTitle:"La derrota imperial",
    canon:"La Alianza Rebelde obtiene victorias decisivas contra el Imperio. Luke Skywalker descubre la verdad sobre su familia y ayuda a que Anakin regrese al lado luminoso. Tras la caída del Emperador, la galaxia afronta la difícil tarea de reconstruir un gobierno.",
    canonCause:"La cooperación rebelde, el sacrificio de sus miembros y la vulnerabilidad del poder imperial permiten derrotar al régimen.",
    canonImpact:"El Imperio pierde su autoridad central, aunque sus restos y otras amenazas siguen afectando a la galaxia. La Nueva República debe construir estabilidad después de años de guerra.",
    legendsTitle:"La Nueva República y sus desafíos",
    legends:"Legends desarrolla extensamente las campañas posteriores a la caída del Imperio, la reconstrucción política y nuevas amenazas. Algunas historias y desenlaces son distintos a los del canon actual.",
    legendsCause:"La derrota del Imperio no elimina automáticamente las rivalidades, las fuerzas militares restantes ni los problemas de gobernabilidad.",
    legendsImpact:"La Nueva República y los nuevos Jedi afrontan desafíos que ponen a prueba la paz recién conseguida.",
    tag:"Reconstrucción"
  },
  {
    id:"firstorder", number:"06", title:"Nuevas amenazas", period:"Resistencia y legado",
    canonTitle:"La Primera Orden y la Resistencia",
    canon:"Décadas después de la caída del Imperio, la Primera Orden surge como una amenaza militar. La Resistencia se enfrenta a ella mientras Rey, Finn, Poe y otros personajes descubren qué significa heredar una historia marcada por los conflictos anteriores.",
    canonCause:"Los restos y herederos ideológicos del Imperio mantienen viva la ambición autoritaria, mientras la estabilidad de la Nueva República resulta frágil.",
    canonImpact:"Una nueva generación debe afrontar el legado de los Jedi, los Sith y la familia Skywalker, y decidir qué futuro quiere construir.",
    legendsTitle:"Una continuidad con otros caminos",
    legends:"Las historias posteriores de Legends siguen una trayectoria distinta, con personajes, amenazas y acontecimientos propios. No deben usarse como continuación directa de la trilogía de secuelas del canon actual.",
    legendsCause:"La derrota de una amenaza no pone fin a los conflictos políticos ni a los desafíos de las nuevas generaciones.",
    legendsImpact:"Los héroes posteriores construyen su propio legado en una galaxia que sigue cambiando.",
    tag:"Nueva generación"
  }
];

const characters = [
  {name:"Anakin Skywalker / Darth Vader", source:"https://www.starwars.com/databank/anakin-skywalker", role:"Sith", affiliation:"Jedi · Sith · Imperio", origin:"Tatooine", glyph:"AV", image:"https://lumiere-a.akamaihd.net/v1/images/anakin-skywalker-main_23e5105b.jpeg?region=387%2C27%2C1350%2C760", bio:"Un niño esclavizado con una conexión extraordinaria con la Fuerza. Su miedo a perder a quienes ama y la manipulación de Palpatine contribuyen a su caída; su decisión final redefine su legado.", arc:"De niño esclavizado a Jedi, luego Darth Vader y finalmente una figura central en la caída del Emperador.", tags:["Sith","Jedi"]},
  {name:"Luke Skywalker", source:"https://www.starwars.com/databank/luke-skywalker", role:"Jedi", affiliation:"Alianza Rebelde · Jedi", origin:"Nacido en Polis Massa; criado en Tatooine", glyph:"LS", image:"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796", bio:"Un joven granjero que descubre su conexión con la Fuerza y se une a la lucha contra el Imperio. Su mayor victoria no es solo combatir, sino negarse a abandonar la esperanza de redimir a su padre.", arc:"Representa la esperanza, la autodeterminación y la posibilidad de romper ciclos de odio.", tags:["Jedi","Rebelión"]},
  {name:"Leia Organa", source:"https://www.starwars.com/databank/leia-organa", role:"Rebelión", affiliation:"Senado · Alianza Rebelde · Resistencia", origin:"Nacida en Polis Massa; criada en Alderaan", glyph:"LO", image:"https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786", bio:"Líder política y estratega, Leia resiste al Imperio desde muy joven. Su compromiso con la libertad continúa más allá de la caída imperial y ayuda a inspirar a una nueva generación.", arc:"Une liderazgo político, valor personal y una persistente responsabilidad hacia la galaxia.", tags:["Rebelión","Nueva generación"]},
  {name:"Obi-Wan Kenobi", source:"https://www.starwars.com/databank/obi-wan-kenobi", role:"Jedi", affiliation:"Orden Jedi · República", origin:"Desconocido en el canon principal", glyph:"OW", image:"https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721", bio:"Maestro Jedi conocido por su disciplina y sentido del deber. Su relación con Anakin atraviesa la amistad, la tragedia y el dolor de ver cómo cae la Orden que ambos defendían.", arc:"Es testigo de la caída de la República y protege la esperanza de que la siguiente generación pueda reconstruirla.", tags:["Jedi"]},
  {name:"Yoda", source:"https://www.starwars.com/databank/yoda", role:"Jedi", affiliation:"Consejo Jedi · Orden Jedi", origin:"Especie y mundo natal no identificados en el canon principal", glyph:"Y", image:"https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864", bio:"Uno de los maestros Jedi más respetados, conocido por su sabiduría y longevidad. La caída de la Orden le obliga a reconocer los límites de las instituciones y de su propio juicio.", arc:"Su historia explora la humildad, el aprendizaje y la responsabilidad de transmitir conocimiento.", tags:["Jedi"]},
  {name:"Palpatine / Darth Sidious", source:"https://www.starwars.com/databank/emperor-palpatine-darth-sidious", role:"Sith", affiliation:"Senado · Imperio · Sith", origin:"Naboo", glyph:"PS", image:"https://lumiere-a.akamaihd.net/v1/images/emperor-palpatine_9a0e992d.jpeg?region=0%2C25%2C1280%2C718", bio:"Un político que oculta su identidad Sith y utiliza la crisis, el miedo y la manipulación para concentrar el poder. Su estrategia convierte la República en el Imperio Galáctico.", arc:"Es el arquitecto de una conspiración que explota las debilidades de las instituciones y de Anakin.", tags:["Sith"]},
  {name:"Padmé Amidala", source:"https://www.starwars.com/databank/padme-amidala", role:"República", affiliation:"Reina de Naboo · Senado Galáctico", origin:"Naboo", glyph:"PA", image:"https://lumiere-a.akamaihd.net/v1/images/Padme-Amidala_05d50c8a.jpeg?region=0%2C0%2C1536%2C864", bio:"Líder de Naboo y senadora, Padmé defiende la diplomacia y la responsabilidad pública incluso cuando la República se acerca a la guerra. Su destino queda ligado a la tragedia de Anakin.", arc:"Representa el ideal democrático y el costo humano de la corrupción política.", tags:["República"]},
  {name:"Han Solo", source:"https://www.starwars.com/databank/han-solo", role:"Rebelión", affiliation:"Contrabandistas · Alianza Rebelde", origin:"Corellia", glyph:"HS", image:"https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080", bio:"Contrabandista que inicialmente evita comprometerse con causas ajenas. Su vínculo con Leia, Luke y la Alianza lo lleva a elegir la responsabilidad y la solidaridad.", arc:"Pasa del interés propio a arriesgarlo todo por sus amigos y por una causa mayor.", tags:["Rebelión"]},
  {name:"Rey", source:"https://www.starwars.com/databank/rey", role:"Nueva generación", affiliation:"Resistencia · Jedi", origin:"Criada en Jakku", glyph:"R", image:"https://lumiere-a.akamaihd.net/v1/images/rey-main_ca4bb0d7.jpeg?region=180%2C0%2C951%2C536", bio:"Una chatarrera de Jakku que descubre una conexión poderosa con la Fuerza y queda involucrada en el conflicto con la Primera Orden.", arc:"Su viaje aborda la identidad, el legado y la posibilidad de elegir quién quieres ser.", tags:["Jedi","Nueva generación"]},
  {name:"Ahsoka Tano", source:"https://www.starwars.com/databank/ahsoka-tano", role:"Jedi", affiliation:"Antigua Jedi · Alianza Rebelde (en distintos periodos)", origin:"Shili", glyph:"AT", image:"https://lumiere-a.akamaihd.net/v1/images/ahsoka-main_88c206d7.jpeg?region=420%2C60%2C1500%2C843", bio:"Antigua padawan de Anakin, Ahsoka abandona la Orden Jedi tras una crisis de confianza. Sigue su propio camino y participa en la resistencia contra el Imperio.", arc:"Su historia cuestiona la autoridad, la identidad y lo que significa actuar de acuerdo con los propios principios.", tags:["Jedi","Rebelión"]},
  {name:"Darth Revan", role:"Sith", affiliation:"Jedi · Sith (principalmente Legends)", origin:"Desconocido", glyph:"DR", image:"", bio:"Figura central de varias historias de la Antigua República en Legends. Su trayectoria está marcada por la guerra, la identidad y el conflicto entre las convicciones personales y el poder.", arc:"Pertenece a Legends; no debe presentarse como parte de la cronología principal del canon actual.", tags:["Sith"]},
  {name:"Grogu", source:"https://www.starwars.com/databank/grogu", role:"Nueva generación", affiliation:"Vínculos con Din Djarin y la tradición Jedi", origin:"Desconocido", glyph:"G", image:"https://lumiere-a.akamaihd.net/v1/images/grogu-main_25a0f2fe.jpeg?region=0%2C23%2C1919%2C1080", bio:"Un niño de la misma especie que Yoda, sensible a la Fuerza, que sobrevive a la caída de la Orden Jedi y crea un vínculo profundo con Din Djarin.", arc:"Su historia conecta la supervivencia del pasado con las decisiones de una nueva generación.", tags:["Nueva generación"]},
  {name:"Din Djarin", source:"https://www.starwars.com/databank/the-mandalorian", role:"Nueva generación", affiliation:"Mandalorianos · Clan de dos", origin:"Aq Vetina", glyph:"DM", image:"https://lumiere-a.akamaihd.net/v1/images/din-djarin-the-mandalorian-main_66f8a62f.jpeg?region=98%2C0%2C1821%2C1023", bio:"Un cazarrecompensas mandaloriano que termina protegiendo a Grogu. Su viaje pone en primer plano la cultura mandaloriana, los juramentos y la familia elegida.", arc:"Su historia explora el deber, la identidad cultural y cómo los vínculos personales pueden cambiar una vida.", tags:["Nueva generación"]}
];

const glossary = [
  ["La Fuerza","Campo de energía creado por los seres vivos que conecta toda la galaxia. Algunas personas pueden sentirla y aprender a utilizarla.","CONCEPTO"],
  ["Jedi","Miembros de una tradición que estudia la Fuerza y busca servir, proteger y mantener la paz. Sus prácticas cambian a lo largo de la historia.","ORDEN"],
  ["Sith","Tradición asociada al lado oscuro y al uso del poder para imponer la propia voluntad. La historia Sith incluye distintas doctrinas y conflictos internos.","ORDEN"],
  ["Padawan","Aprendiz Jedi que entrena bajo la guía de un maestro o mentor.","JERARQUÍA"],
  ["Orden 66","Orden militar ejecutada durante la caída de la República que provoca la persecución de los Jedi por parte de gran parte del ejército clon.","ACONTECIMIENTO"],
  ["Cristal kyber","Cristal sensible a la Fuerza utilizado, entre otras cosas, en la construcción de muchos sables de luz.","TECNOLOGÍA"],
  ["Sable de luz","Arma de energía asociada especialmente con Jedi y Sith. Su construcción y significado pueden variar según la tradición.","ARMA"],
  ["Holocrón","Dispositivo de archivo capaz de almacenar conocimientos, utilizado por algunas tradiciones sensibles a la Fuerza.","ARTEFACTO"],
  ["República Galáctica","Sistema político que reúne numerosos mundos y especies bajo instituciones comunes durante gran parte de la historia galáctica.","POLÍTICA"],
  ["Imperio Galáctico","Régimen autoritario establecido por Palpatine tras la caída de la República.","POLÍTICA"],
  ["Alianza Rebelde","Coalición de grupos que se oponen al dominio del Imperio y luchan por recuperar la libertad de los sistemas.","ORGANIZACIÓN"],
  ["Borde Exterior","Región periférica de la galaxia conocida, con mundos alejados de los principales centros políticos y económicos.","GEOGRAFÍA"],
  ["Mandalorianos","Pueblo y cultura guerrera con distintas comunidades, códigos y tradiciones; no todos los mandalorianos comparten una única ideología.","CULTURA"],
  ["Droides","Máquinas programadas para múltiples tareas, desde labores domésticas hasta combate, navegación y análisis.","TECNOLOGÍA"],
  ["Canon","Continuidad narrativa oficial principal de Star Wars reconocida actualmente por Lucasfilm.","CONTINUIDAD"],
  ["Legends","Nombre utilizado para identificar gran parte del antiguo universo expandido, cuyas historias ya no integran el canon principal actual.","CONTINUIDAD"]
];

const forceData = {
  light: {title:"El lado luminoso", text:"Se asocia con la compasión, la disciplina, la responsabilidad y la armonía con la Fuerza. No significa ausencia de miedo o conflicto, sino la manera de responder a ellos sin dejar que dominen las decisiones."},
  dark: {title:"El lado oscuro", text:"Se relaciona con emociones como el miedo, la ira y el deseo de controlar. Puede ofrecer poder inmediato, pero a menudo alimenta dependencia, crueldad y pérdida de libertad."},
  jedi: {title:"La Orden Jedi", text:"Una tradición de guardianes y estudiosos de la Fuerza. Sus miembros reciben entrenamiento, aprenden a manejar sus habilidades y, en muchos periodos, sirven como mediadores y defensores de la paz."},
  sith: {title:"Los Sith", text:"Una tradición que explora el lado oscuro y la búsqueda de poder. La Regla de Dos, asociada a Darth Bane, establece que normalmente haya un maestro y un aprendiz; los detalles y el contexto histórico varían según la continuidad."}
};

const eraList = document.getElementById("eraList");
const eraDetail = document.getElementById("eraDetail");
let currentEra = "ancient";
let continuity = "canon";
let activeCharacterFilter = "Todos";
const FAVORITES_KEY = "cronicasGalaxia.favoritos.v1";
function readFavorites() {
  try {
    const value = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    return Array.isArray(value) ? value.filter(id => characters.some(ch => ch.name === id)) : [];
  } catch (error) { return []; }
}
let favoriteCharacters = readFavorites();
function saveFavorites() {
  try { localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteCharacters)); } catch (error) {}
  const count = document.getElementById("favoriteCount");
  if (count) count.textContent = String(favoriteCharacters.length);
}
function toggleFavorite(name) {
  favoriteCharacters = favoriteCharacters.includes(name)
    ? favoriteCharacters.filter(item => item !== name)
    : [...favoriteCharacters, name];
  saveFavorites();
  renderCharacters();
}

function renderEraButtons() {
  eraList.innerHTML = "";
  eras.forEach(era => {
    const button = document.createElement("button");
    button.className = "era-button" + (era.id === currentEra ? " active" : "");
    button.innerHTML = `<span class="era-num">${era.number}</span><span><strong>${era.title}</strong><small>${era.period}</small></span>`;
    button.addEventListener("click", () => {
      currentEra = era.id;
      renderEraButtons();
      renderEraDetail();
    });
    eraList.appendChild(button);
  });
}
function renderEraDetail() {
  const era = eras.find(item => item.id === currentEra);
  let title, summary, cause, impact, warning = "";
  if (continuity === "canon") {
    title = era.canonTitle; summary = era.canon; cause = era.canonCause; impact = era.canonImpact;
    warning = "Canon actual. Cuando la historia antigua no está completamente definida, se indica en lugar de inventar una cronología cerrada.";
    eraDetail.innerHTML = `<span class="era-tag">${era.tag} · CANON</span><h3>${title}</h3><p class="era-summary">${summary}</p><div class="era-columns"><div><h4>¿Qué lo provoca?</h4><p>${cause}</p></div><div><h4>¿Qué cambia después?</h4><p>${impact}</p></div></div><p class="continuity-warning">${warning}</p>`;
  } else if (continuity === "legends") {
    title = era.legendsTitle; summary = era.legends; cause = era.legendsCause; impact = era.legendsImpact;
    warning = "Legends: continuidad del antiguo universo expandido. Sus acontecimientos y personajes pueden diferir del canon actual.";
    eraDetail.innerHTML = `<span class="era-tag">${era.tag} · LEGENDS</span><h3>${title}</h3><p class="era-summary">${summary}</p><div class="era-columns"><div><h4>¿Qué lo provoca?</h4><p>${cause}</p></div><div><h4>¿Qué cambia después?</h4><p>${impact}</p></div></div><p class="continuity-warning">${warning}</p>`;
  } else {
    eraDetail.innerHTML = `<span class="era-tag">${era.tag} · COMPARACIÓN</span><h3>${era.title}</h3><div class="continuity-comparison"><section class="continuity-panel canon-panel"><h4>Canon actual</h4><p><strong>${era.canonTitle}</strong><br>${era.canon}<br><br><strong>Consecuencia:</strong> ${era.canonImpact}</p></section><section class="continuity-panel legends-panel"><h4>Legends</h4><p><strong>${era.legendsTitle}</strong><br>${era.legends}<br><br><strong>Consecuencia:</strong> ${era.legendsImpact}</p></section></div><p class="continuity-warning">Comparación resumida. Estas continuidades no deben leerse como una sola cronología.</p>`;
  }
}
function renderCharacters() {
  const query = document.getElementById("characterSearch").value.trim().toLocaleLowerCase("es");
  const list = characters.filter(ch => {
    const matchesFilter = activeCharacterFilter === "Todos"
      || (activeCharacterFilter === "Favoritos" ? favoriteCharacters.includes(ch.name) : ch.tags.includes(activeCharacterFilter) || ch.role === activeCharacterFilter);
    const text = `${ch.name} ${ch.role} ${ch.affiliation} ${ch.origin} ${ch.bio}`.toLocaleLowerCase("es");
    return matchesFilter && text.includes(query);
  });
  const grid = document.getElementById("characterGrid");
  grid.innerHTML = "";
  document.getElementById("characterEmpty").classList.toggle("hidden", list.length > 0);
  list.forEach(ch => {
    const card = document.createElement("article");
    card.className = "character-card";
    const isFavorite = favoriteCharacters.includes(ch.name);
    card.innerHTML = `<div class="character-art" style="--char-bg:linear-gradient(145deg,#233e58,#111426)"><span class="char-affiliation">${ch.role}</span><span class="char-glyph">${ch.glyph}</span>${ch.image ? `<img class="character-image" src="${ch.image}" alt="Imagen de ${ch.name}" loading="lazy" referrerpolicy="no-referrer">` : ""}<button class="favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" aria-label="${isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}" aria-pressed="${isFavorite}">${isFavorite ? "★" : "☆"}</button></div><div class="character-body"><h3>${ch.name}</h3><div class="character-origin">${ch.origin}</div><p>${ch.bio}</p><button class="character-more" type="button">Abrir biografía <span>↗</span></button></div>`;
    const portrait = card.querySelector(".character-image");
    if (portrait) portrait.addEventListener("error", () => { portrait.remove(); card.querySelector(".character-art").classList.add("image-fallback"); });
    card.querySelector(".character-more").addEventListener("click", () => openCharacter(ch));
    card.querySelector(".favorite-button").addEventListener("click", () => toggleFavorite(ch.name));
    grid.appendChild(card);
  });
}
function openCharacter(ch) {
  const dialog = document.getElementById("characterDialog");
  const content = document.getElementById("characterDialogContent");
  content.innerHTML = "";
  const hero = document.createElement("div");
  hero.className = "dialog-hero";
  hero.style.setProperty("--dialog-bg", `linear-gradient(120deg,#172b43dd,#08101ddd),url("${ch.image}") center 30%/cover`);
  hero.innerHTML = `<div><p class="kicker">ARCHIVO DE PERSONAJE · ${ch.role}</p><h2>${ch.name}</h2></div>`;
  const body = document.createElement("div");
  body.className = "dialog-content";
  const bio = document.createElement("p"); bio.textContent = ch.bio;
  const arc = document.createElement("p"); arc.textContent = ch.arc;
  const meta = document.createElement("div"); meta.className = "dialog-meta";
  [`Origen: ${ch.origin}`, ch.affiliation, `Etiquetas: ${ch.tags.join(" · ")}`].forEach(text => { const span = document.createElement("span"); span.textContent = text; meta.appendChild(span); });
  body.append(bio, arc, meta);
  if (ch.source) {
    const source = document.createElement("p");
    source.className = "official-source";
    const link = document.createElement("a");
    link.href = ch.source;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Consultar ficha oficial de StarWars.com ↗";
    source.appendChild(link);
    body.appendChild(source);
  } else {
    const note = document.createElement("p");
    note.className = "official-source";
    note.textContent = "Darth Revan pertenece principalmente a Legends. Consulta las obras identificadas de esa continuidad para ampliar su historia.";
    body.appendChild(note);
  }
  content.append(hero, body);
  if (typeof dialog.showModal === "function") dialog.showModal();
  else alert(`${ch.name}\n\n${ch.bio}\n${ch.arc}`);
}
function renderGlossary() {
  const query = document.getElementById("glossarySearch").value.trim().toLocaleLowerCase("es");
  const grid = document.getElementById("glossaryGrid");
  grid.innerHTML = "";
  glossary.filter(item => `${item[0]} ${item[1]} ${item[2]}`.toLocaleLowerCase("es").includes(query)).forEach(item => {
    const card = document.createElement("article");
    card.className = "glossary-item";
    const title = document.createElement("h3"); title.textContent = item[0];
    const text = document.createElement("p"); text.textContent = item[1];
    const tag = document.createElement("span"); tag.className = "glossary-tag"; tag.textContent = item[2];
    card.append(title, text, tag); grid.appendChild(card);
  });
}
document.querySelectorAll(".continuity-button").forEach(button => button.addEventListener("click", () => {
  continuity = button.dataset.continuity;
  document.querySelectorAll(".continuity-button").forEach(item => item.classList.toggle("active", item === button));
  renderEraDetail();
}));
document.querySelectorAll(".force-tab").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".force-tab").forEach(item => item.classList.toggle("active", item === button));
  const data = forceData[button.dataset.force];
  document.getElementById("forceExplanation").innerHTML = `<h3>${data.title}</h3><p>${data.text}</p>`;
}));
document.querySelectorAll(".filter-chip").forEach(button => button.addEventListener("click", () => {
  activeCharacterFilter = button.dataset.filter;
  document.querySelectorAll(".filter-chip").forEach(item => item.classList.toggle("active", item === button));
  renderCharacters();
}));
document.getElementById("characterSearch").addEventListener("input", renderCharacters);
document.getElementById("glossarySearch").addEventListener("input", renderGlossary);
document.getElementById("dialogClose").addEventListener("click", () => document.getElementById("characterDialog").close());
document.getElementById("characterDialog").addEventListener("click", event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("soft-mode");
  const soft = document.body.classList.contains("soft-mode");
  document.getElementById("themeToggle").textContent = soft ? "☀" : "☾";
  document.getElementById("themeToggle").setAttribute("aria-label", soft ? "Volver al ambiente oscuro" : "Cambiar ambiente visual");
});
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
  document.querySelectorAll(".nav-link").forEach(item => item.classList.toggle("active", item === link));
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
renderEraButtons();
renderEraDetail();
saveFavorites();
renderCharacters();
renderGlossary();
const forceDefault = forceData.light;
document.getElementById("forceExplanation").innerHTML = `<h3>${forceDefault.title}</h3><p>${forceDefault.text}</p>`;

// Las imágenes externas pueden desaparecer o cambiar. Si una URL falla,
// la tarjeta conserva su fondo y sus textos, sin dejar un espacio roto.
characters.forEach(ch => {
  const probe = new Image();
  probe.onerror = () => { ch.image = ""; };
  probe.src = ch.image;
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !document.getElementById("characterDialog").open) {
    const focused = document.activeElement;
    if (focused && focused.matches('input[type="search"]') && focused.value) {
      focused.value = "";
      focused.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }
});
