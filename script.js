const commons = (file, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const places = [
  {
    title: "Efes Antik Kenti",
    location: "Selçuk",
    period: "İon, Helenistik, Roma",
    oldImg: "Library of Celsus.JPG",
    newImg: "Celsus Library, Ephesus.jpg",
    summary:
      "Efes, Küçük Menderes deltası çevresinde yer değiştiren liman hattıyla büyüyen, Roma döneminde Asya eyaletinin en parlak kentlerinden biri haline gelen bir miras alanıdır.",
    event:
      "MÖ 4. yüzyılda Lysimakhos'un yeni kenti kurması ve Roma çağında Celsus Kütüphanesi ile Büyük Tiyatro'nun yükselmesi, Efes'i Akdeniz ticaret ve hac ağının merkezlerinden biri yaptı.",
    local:
      "Bugün Selçuk rotasında Efes, Ayasuluk, Artemis Tapınağı kalıntıları ve Şirince ile aynı gün içinde katmanlı bir gezi verir.",
    coords: [37.939, 27.341],
  },
  {
    title: "Saat Kulesi",
    location: "Konak Meydanı",
    period: "1901, Osmanlı son dönemi",
    oldImg: "İzmir clock tower.jpg",
    newImg: "İzmir Clock Tower, 2026.jpg",
    summary:
      "Raymond Charles Péré'nin tasarladığı Saat Kulesi, II. Abdülhamid'in tahta çıkışının 25. yılı için yaptırıldı ve Konak Meydanı'nın simgesi oldu.",
    event:
      "1922 yangını eski kent dokusunun büyük bölümünü yok ederken kule, meydanın hafızasını taşıyan en güçlü kent imgelerinden biri olarak kaldı.",
    local:
      "Gevrek, boyoz ve vapur üçlüsüyle başlayan şehir içi gezi için en doğal buluşma noktasıdır.",
    coords: [38.419, 27.1287],
  },
  {
    title: "Agora Ören Yeri",
    location: "Namazgah",
    period: "Helenistik ve Roma",
    oldImg: "Agora of Smyrna, built during the Hellenistic era at the base of Pagos Hill and totally rebuilt under Marcus Aurelius after the destructive 178 AD earthquake, Izmir, Turkey (18079154423).jpg",
    newImg: "Smyrna Agora.jpg",
    summary:
      "Pagos eteklerindeki Smyrna Agorası, kentin ticari, siyasi ve adli yaşamını taşıyan anıtsal bir açık alan olarak gelişti.",
    event:
      "MS 178 depreminden sonra Marcus Aurelius döneminde yeniden inşa edilen agora, Roma bazilikası ve su kanallarıyla bugün de okunabilir durumdadır.",
    local:
      "Kemeraltı ve Kadifekale hattıyla birleştiğinde İzmir merkezinde yürüyerek antik kent katmanını görünür kılar.",
    coords: [38.4189, 27.1376],
  },
  {
    title: "Kadifekale",
    location: "Pagos Tepesi",
    period: "MÖ 4. yüzyıl",
    oldImg: "Kadifekale IzmirTurkey 1880s.jpg",
    newImg: "Gate of Kadifekale.jpg",
    summary:
      "Kadifekale, antik Smyrna'nın akropolü ve savunma noktası olarak körfeze hakim Pagos Tepesi'nde yükselir.",
    event:
      "Büyük İskender sonrası dönemde Lysimakhos'la ilişkilendirilen yeniden kuruluş anlatısı, Smyrna'nın Bayraklı'dan Pagos eteklerine taşınmasını simgeler.",
    local:
      "Zeybek anlatıları, mahalle hafızası ve körfez manzarası burada tarih hissini günlük yaşamla yan yana getirir.",
    coords: [38.4128, 27.1462],
  },
  {
    title: "Kemeraltı Çarşısı",
    location: "Konak",
    period: "17. yüzyıldan günümüze",
    oldImg: "Entrance of the Kemeraltı 1870-1890.jpg",
    newImg: "TR Izmir asv2020-02 img06 Kemeraltı.jpg",
    summary:
      "Kemeraltı, hanları, camileri, sinagog çevresi, kahvecileri ve dar sokaklarıyla liman ticaretinin kent merkezindeki canlı hafızasıdır.",
    event:
      "İç limanın dolmasıyla gelişen çarşı dokusu, Osmanlı ve Cumhuriyet dönemlerinde İzmir ticaretinin ana sahnesi olmayı sürdürdü.",
    local:
      "Kızlarağası Hanı'nda kahve, tarihi fırınlarda gevrek ve el işi tezgahları Kemeraltı'nı yaşayan bir kültür rotasına dönüştürür.",
    coords: [38.4217, 27.1349],
  },
  {
    title: "Asansör",
    location: "Karataş",
    period: "1907",
    oldImg: "Asansör (alttan).jpg",
    newImg: "TR Izmir asv2020-02 img52 Asansör.jpg",
    summary:
      "Nesim Levi tarafından yaptırılan Tarihi Asansör, Mithatpaşa Caddesi ile üst sokaklar arasındaki dik kot farkını aşmak için kentsel bir çözüm olarak doğdu.",
    event:
      "Yapı, Karataş'ın Yahudi ve Levanten mirasıyla birlikte modern İzmir'in gündelik ulaşım belleğine karıştı.",
    local:
      "Dario Moreno Sokağı, müzik hafızası ve körfez manzarasıyla Asansör'ü fotoğraf kadar hikaye durağına çevirir.",
    coords: [38.4088, 27.1175],
  },
  {
    title: "Şirince",
    location: "Selçuk",
    period: "Rum ve Osmanlı köy dokusu",
    oldImg: "Kilise Şirince Selçuk İZMİR - panoramio.jpg",
    newImg: "The Ottoman village of Sirince.jpg",
    summary:
      "Şirince, taş evleri, dar yokuşları, eski kiliseleri ve bağ kültürüyle Selçuk yakınında korunmuş bir köy dokusu sunar.",
    event:
      "Mübadele sonrası nüfus yapısı değişen köy, 20. yüzyılın sonlarından itibaren butik turizm ve yerel üretimle yeniden canlandı.",
    local:
      "Meyve şarapları, köy kahvaltısı, taş sokak pazarları ve ev yapımı ürünler Şirince'yi İzmir içinde ayrı bir mikro kültüre dönüştürür.",
    coords: [37.9437, 27.4319],
  },
  {
    title: "Birgi Köyü",
    location: "Ödemiş",
    period: "Aydınoğulları ve Osmanlı",
    oldImg: "Birgi odemis DSC02986.JPG",
    newImg: "Birgi ve tarihi taş evler 15.jpg",
    summary:
      "Birgi, Ulu Cami, Çakırağa Konağı ve ahşap-taş evleriyle Bozdağ eteklerinde yavaş tempolu bir tarih dokusu taşır.",
    event:
      "Aydınoğulları Beyliği'nin önemli merkezlerinden olan Birgi, Osmanlı döneminde konak mimarisi ve dini yapılarıyla güç kazandı.",
    local:
      "Ödemiş pazarı, ipek dokuma izleri, kestane ve yayla kültürü Birgi gezisini yerel üretimle tamamlar.",
    coords: [38.2566, 28.0596],
  },
  {
    title: "Teos Antik Kenti",
    location: "Seferihisar / Sığacık",
    period: "İon kenti",
    oldImg: "Teos south harbor quay (1991).jpg",
    newImg: "Teos Antik Kent Manzara.jpg",
    summary:
      "Teos, İon dünyasının kıyı kentlerinden biri olarak Dionysos kültü, limanları, tiyatrosu ve kent meclisi yapılarıyla tanınır.",
    event:
      "Antik kaynaklarda sanatçılar birliğiyle anılan Teos, deniz ticareti ve kült etkinlikleriyle Ege kıyı yaşamının özgün bir örneğidir.",
    local:
      "Sığacık pazarı, kale içi sokakları ve mandalina kokulu kıyı yürüyüşü Teos rotasını yaşayan bir Ege deneyimine bağlar.",
    coords: [38.1772, 26.785],
  },
  {
    title: "Smyrna Antik Kenti",
    location: "Bayraklı / Tepekule",
    period: "MÖ 1. binyıl",
    oldImg: "Pauly-Wissowa III A,1, 0747 Map Smyrna.png",
    newImg: "TR Izmir asv2020-02 img41 Tepekule Smyrna ruins.jpg",
    summary:
      "Eski Smyrna, Bayraklı Tepekule çevresinde erken kentleşme, surlar, Athena Tapınağı ve Arkaik dönem izleriyle İzmir'in eski adını taşır.",
    event:
      "Arkaik dönemde güçlenen Smyrna, daha sonra Pagos eteklerindeki yeni kente taşınarak bugünkü kent merkezinin tarihini hazırladı.",
    local:
      "Bayraklı kazıları, İzmir'in yalnızca kıyı şeridi değil, höyük ve tapınak katmanlarıyla da okunması gerektiğini gösterir.",
    coords: [38.4625, 27.1664],
  },
];

const timeline = [
  ["MÖ 6500", "Yeşilova ve çevresindeki ilk yerleşim izleri, İzmir Körfezi'nin çok eski insan hafızasını başlatır."],
  ["MÖ 1000", "Smyrna, Bayraklı çevresinde İon dünyasının önemli kıyı yerleşimlerinden biri olarak belirginleşir."],
  ["MÖ 4. yy", "Kent, Pagos eteklerine taşınır; Kadifekale ve Agora çevresi yeni Smyrna'nın omurgası olur."],
  ["MS 178", "Büyük depremden sonra Smyrna Agorası Roma imparatorluk desteğiyle yeniden inşa edilir."],
  ["11-14. yy", "Bizans, Türk beylikleri ve Aydınoğulları dönemleri Birgi, Kadifekale ve kıyı kalelerinde iz bırakır."],
  ["17-19. yy", "Kemeraltı, liman ticaretiyle genişleyen hanlar, pazarlar ve çok kültürlü mahallelerle büyür."],
  ["1901", "Konak Saat Kulesi açılır ve modern İzmir'in en tanınan kent simgelerinden biri olur."],
  ["1922", "Büyük yangın sonrası kent merkezi yeniden şekillenir; Cumhuriyet dönemi İzmir'i yeni meydanlarla kurulur."],
  ["2015", "Efes, UNESCO Dünya Mirası Listesi'ne girerek İzmir'in dünya ölçeğindeki kültür değerini güçlendirir."],
];

const traditions = [
  {
    title: "Boyoz Kültürü",
    img: "Boyoz in İzmir.jpg",
    text:
      "Sefarad mirasıyla ilişkilenen boyoz, İzmir'de çoğu zaman haşlanmış yumurta ve çayla sabah ritüeline dönüşür; bu gündelik sadelik başka şehirlerde aynı güçte görülmez.",
  },
  {
    title: "İzmir Gevreği",
    img: "İzmir Gevrekçi.jpg",
    text:
      "İzmir'de simit yerine gevrek denmesi yalnızca isim farkı değildir; pekmezli kazan geleneği, fırın önü kuyruğu ve vapur saatleriyle yaşayan bir kent alışkanlığıdır.",
  },
  {
    title: "Nazarköy Boncukçuluğu",
    img: "Nazar Beads İn Turkey.jpg",
    text:
      "Kemalpaşa Nazarköy'de cam boncuk ocakları, nazar boncuğunu turistik bir hediyelikten çıkarıp ustalık, ateş ve aile belleği taşıyan yerel zanaata dönüştürür.",
  },
  {
    title: "Ege Düğünleri",
    img: "Kına Gecesi.JPG",
    text:
      "İzmir'in kırsal düğünlerinde davul-zurna, zeybek, kına ve meydan yemeği pratikleri Ege'nin açık hava topluluk kültürüyle birleşir.",
  },
  {
    title: "Zeybek Kültürü",
    img: "Zeybek.jpg",
    text:
      "Zeybek, İzmir ve Ege çevresinde ağır adımlar, efe duruşu ve yerel kıyafetlerle yalnızca sahne gösterisi değil, tarihsel bir kimlik ifadesidir.",
  },
  {
    title: "Çarşı ve Zanaat",
    img: "Kizlaragasi Han entrance Izmir 2024.jpeg",
    text:
      "Kemeraltı'ndaki bakırcı, kahveci, aktar ve antikacı yoğunluğu, İzmir'in pazar kültürünü günlük ticaret ile turistik keşif arasında canlı tutar.",
  },
];

const quotes = [
  ["Körfez, İzmir'in yalnızca manzarası değil; kentin hafızasını taşıyan açık defteridir.", "İzmir kent anlatısı"],
  ["Agora'nın taşları, ticaretin, adaletin ve gündelik seslerin aynı meydanda buluştuğunu hatırlatır.", "Smyrna rotası"],
  ["Kemeraltı'nda yürümek, bir çarşıdan çok zamana açılan kapıların arasından geçmektir.", "Çarşı belleği"],
];

const gallery = [
  ["Entrance of the Kemeraltı 1870-1890.jpg", "Kemeraltı Girişi", "1870-1890 arşiv atmosferi", true],
  ["İzmir Clock Tower, 2026.jpg", "Konak Saat Kulesi", "Güncel meydan simgesi", false],
  ["Kadifekale IzmirTurkey 1880s.jpg", "Kadifekale", "19. yüzyıl körfez hafızası", false],
  ["TR Izmir asv2020-02 img52 Asansör.jpg", "Asansör", "Karataş'ta kentsel geçit", false],
  ["Smyrna Agora.jpg", "Smyrna Agorası", "Roma kent merkezinin izleri", true],
  ["Teos Antik Kent Manzara.jpg", "Teos", "Sığacık kıyısında İon mirası", false],
];

const mapFrame = document.querySelector("#mapFrame");
const mapCaption = document.querySelector("#mapCaption");

function createImage(file, alt) {
  const img = document.createElement("img");
  img.src = commons(file);
  img.alt = alt;
  img.loading = "lazy";
  img.addEventListener("error", () => {
    const fallback = document.createElement("div");
    fallback.className = "image-fallback";
    fallback.textContent = alt;
    img.replaceWith(fallback);
  });
  return img;
}

function renderPlaces() {
  const grid = document.querySelector("#placeGrid");
  grid.innerHTML = places
    .map((place, index) => {
      return `
        <article class="place-card" data-aos="fade-up" data-aos-delay="${(index % 2) * 90}">
          <div class="compare">
            <figure>
              <img src="${commons(place.oldImg)}" alt="${place.title} eski fotoğraf" loading="lazy">
              <figcaption>Arşiv</figcaption>
            </figure>
            <figure>
              <img src="${commons(place.newImg)}" alt="${place.title} güncel fotoğraf" loading="lazy">
              <figcaption>Bugün</figcaption>
            </figure>
          </div>
          <div class="place-body">
            <h3>${index + 1}. ${place.title}</h3>
            <div class="place-meta">
              <span class="pill">${place.location}</span>
              <span class="pill">${place.period}</span>
            </div>
            <p>${place.summary}</p>
            <p class="event"><strong>Önemli olay:</strong> ${place.event}</p>
            <p><strong>Yerel bağ:</strong> ${place.local}</p>
            <div class="card-actions">
              <button class="mini-button" data-map-index="${index}" type="button">Haritada Gör</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "image-fallback";
      fallback.textContent = img.alt;
      img.replaceWith(fallback);
    });
  });
}

function renderTimeline() {
  document.querySelector("#timeline").innerHTML = timeline
    .map(
      ([year, text], index) => `
        <article class="timeline-item" data-aos="fade-right" data-aos-delay="${index * 55}">
          <span class="timeline-year">${year}</span>
          <p>${text}</p>
        </article>
      `
    )
    .join("");
}

function renderQuotes() {
  document.querySelector("#quoteSlides").innerHTML = quotes
    .map(
      ([quote, cite]) => `
        <div class="swiper-slide quote-slide">
          <blockquote>${quote}</blockquote>
          <cite>${cite}</cite>
        </div>
      `
    )
    .join("");
}

function renderTraditions() {
  const grid = document.querySelector("#traditionGrid");
  traditions.forEach((tradition, index) => {
    const article = document.createElement("article");
    article.className = "tradition-card";
    article.setAttribute("data-aos", "fade-up");
    article.setAttribute("data-aos-delay", `${(index % 3) * 80}`);

    const imageWrap = document.createElement("div");
    imageWrap.className = "image-wrap";
    imageWrap.append(createImage(tradition.img, tradition.title));

    const body = document.createElement("div");
    body.innerHTML = `<h3>${tradition.title}</h3><p>${tradition.text}</p>`;

    article.append(imageWrap, body);
    grid.append(article);
  });
}

function renderGallery() {
  const grid = document.querySelector("#galleryGrid");
  gallery.forEach(([img, title, text, large], index) => {
    const item = document.createElement("article");
    item.className = `gallery-item${large ? " large" : ""}`;
    item.setAttribute("data-aos", "zoom-in");
    item.setAttribute("data-aos-delay", `${index * 60}`);
    item.append(createImage(img, title));
    const body = document.createElement("div");
    body.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
    item.append(body);
    grid.append(item);
  });
}

function mapUrl(place) {
  const [lat, lon] = place.coords;
  const box = [lon - 0.012, lat - 0.008, lon + 0.012, lat + 0.008].join("%2C");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${box}&layer=mapnik&marker=${lat}%2C${lon}`;
}

function selectMap(index) {
  const shouldScroll = arguments.length > 1 ? arguments[1] : true;
  const place = places[index];
  mapFrame.src = mapUrl(place);
  mapCaption.innerHTML = `<strong>${place.title}</strong><br>${place.location} · ${place.period}`;
  document.querySelectorAll(".map-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.mapIndex) === index);
  });
  if (shouldScroll) document.querySelector("#harita").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderMapButtons() {
  const list = document.querySelector("#mapList");
  list.innerHTML = places
    .map(
      (place, index) => `
        <button class="map-button" data-map-index="${index}" type="button">
          ${index + 1}. ${place.title}
        </button>
      `
    )
    .join("");
  list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-map-index]");
    if (button) selectMap(Number(button.dataset.mapIndex));
  });
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest(".mini-button[data-map-index]");
    if (button) selectMap(Number(button.dataset.mapIndex));
  });
  selectMap(0, false);
}

function initCounters() {
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.target);
        const duration = 1300;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased).toLocaleString("tr-TR");
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((counter) => observer.observe(counter));
}

function initScrollProgress() {
  const progress = document.querySelector(".scroll-progress");
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
}

function initAnimations() {
  if (window.AOS) {
    AOS.init({ duration: 850, easing: "ease-out-cubic", once: true, offset: 80 });
  }
  if (window.Swiper) {
    new Swiper(".quote-swiper", {
      loop: true,
      autoplay: { delay: 3600, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
    });
  }
  if (window.gsap) {
    gsap.fromTo(".hero-content", { y: 18, opacity: 0.92 }, { y: 0, opacity: 1, duration: 1.1, ease: "power2.out" });
  }
}

function initParallax() {
  const heroMedia = document.querySelector(".hero-media");
  const quoteBg = document.querySelector(".quote-bg");
  const update = () => {
    const scroll = window.scrollY;
    heroMedia.style.transform = `scale(1.1) translateY(${scroll * 0.05}px)`;
    quoteBg.style.transform = `scale(1.08) translateY(${(scroll - quoteBg.offsetTop) * -0.025}px)`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function hideLoader() {
  window.setTimeout(() => {
    document.querySelector(".loader").classList.add("hide");
  }, 1350);
}

document.addEventListener("DOMContentLoaded", () => {
  renderPlaces();
  renderTimeline();
  renderQuotes();
  renderTraditions();
  renderGallery();
  renderMapButtons();
  initCounters();
  initScrollProgress();
  initNavigation();
  initAnimations();
  initParallax();
  hideLoader();
});
