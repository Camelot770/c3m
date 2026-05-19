// Shared data for FASHION AI site

window.CATEGORIES = [
  {
    id: "studio",
    title: "Студийные фото",
    desc: "Циклорама, ровный свет, нейтральный фон. Идеально для каталогов e-commerce.",
    count: 105,
    kind: "photo",
  },
  {
    id: "studio-vid",
    title: "Студийные видео",
    desc: "Короткие ролики в студии: разворот модели, фронт-бэк, лёгкое движение.",
    count: 8,
    kind: "video",
  },
  {
    id: "acc",
    title: "Обувь и аксессуары",
    desc: "Сумки, обувь, ювелирка. Крупный план и контекст на модели.",
    count: 50,
    kind: "photo",
  },
  {
    id: "image",
    title: "Имиджевые фото",
    desc: "Лукбук-кадры, лайфстайл-сцены. Для бренд-кампаний и сезонных коллекций.",
    count: 133,
    kind: "photo",
  },
  {
    id: "vid",
    title: "Имиджевые видео",
    desc: "Короткие 5–15 сек ролики: статичные позы, разворот, лёгкое движение.",
    count: 8,
    kind: "video",
  },
  {
    id: "promo",
    title: "Промо-ролики",
    desc: "30-секундные ролики с монтажом, музыкой и нарративом для соцсетей.",
    kind: "video",
    external: "https://drive.google.com/drive/folders/1i9yhsr8U4dvMIZJ5K3lfYYzJamhoy9YK?usp=sharing",
    cover: "assets/promo-cover.jpg",
  },
];

window.TRANSFORMS = [
  { tag: "блуза · атлас",        studio: "студия · 3K каталог" },
  { tag: "пуховик · oversize",   studio: "уличная проходка"     },
  { tag: "сумка · кожа",         studio: "имидж · на модели"    },
];
