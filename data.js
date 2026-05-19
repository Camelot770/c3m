// Shared data for FASHION AI site

window.CATEGORIES = [
  {
    id: "studio",
    title: "Студийная съёмка",
    desc: "Циклорама, ровный свет, нейтральный фон. Идеально для каталогов e-commerce.",
    count: 100,
    kind: "photo",
  },
  {
    id: "walks",
    title: "Проходки",
    desc: "Уличный контекст: натуральный свет, движение, городская среда.",
    count: 0,
    kind: "photo",
    soon: true,
  },
  {
    id: "acc",
    title: "Аксессуары",
    desc: "Сумки, обувь, ювелирка. Крупный план и контекст на модели.",
    count: 50,
    kind: "photo",
  },
  {
    id: "image",
    title: "Имиджевые фото",
    desc: "Лукбук-кадры, лайфстайл-сцены. Для бренд-кампаний и сезонных коллекций.",
    count: 138,
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
    count: 8,
    kind: "video",
  },
];

window.TRANSFORMS = [
  { tag: "сорочка / атласная",   studio: "studio-shot" },
  { tag: "куртка-пуховик",       studio: "outdoor-walk" },
  { tag: "кроссовки / hi-top",   studio: "street-context" },
];
