# C3M — landing site

AI-агентство визуального контента. Статический сайт (HTML/CSS/vanilla JS, без сборщиков). Деплой — Vercel из GitHub.

## Ссылки

- **GitHub**: https://github.com/Camelot770/c3m
- **Production**: https://vadim-fashion.vercel.app
- **Branch alias (всегда последний main)**: https://vadim-fashion-git-main-naums-projects-5189a309.vercel.app

## Структура

```
.
├── index.html              # главная — hero-video + about + transforms + format-grid + cta + footer
├── gallery.html            # страница категории (?cat=studio|studio-vid|acc|image|vid|promo)
├── privacy.html            # политика конфиденциальности
├── Landing (vertical).html # альтернативная вертикальная версия
├── Landing (deck).html     # вариант «колоды слайдов»
├── data.js                 # общий справочник CATEGORIES + TRANSFORMS (дублируется inline в HTML)
├── deck-stage.js           # логика deck-варианта
├── style.css               # старые стили (используется не везде)
├── tweaks-app.jsx          # dev-инструмент для подкрутки стилей (не в проде)
├── tweaks-panel.jsx        # его панель
├── privacy.html
├── README.md               # этот файл
├── C3m v2 black.pdf        # исходник логотипа (для пересборки SVG)
├── IMG_3068.MP4            # исходник hero-видео (golf cart) — НЕ в репо
├── IMG_3515.MP4            # исходник promo/05 (каньон с машиной) — НЕ в репо
└── assets/
    ├── logo/
    │   └── c3m.svg         # логотип в bran-orange, инлайн через <img>
    ├── hero/
    │   ├── intro.mp4       # фон в hero (autoplay/muted/loop)
    │   └── intro.jpg       # постер пока mp4 грузится
    ├── studio/full/NNN.jpg + thumb/NNN.jpg     # «Студийные фото»  — 105 кадров
    ├── studio-vid/NN.mp4 + posters/NN.jpg       # «Студийные видео» — 8 роликов
    ├── acc/full + thumb                         # «Обувь и аксессуары» — 50 кадров
    ├── image/full + thumb                       # «Имиджевые фото»  — 133 кадра
    ├── vid/NN.mp4 + posters/NN.jpg              # «Имиджевые видео» — 8 роликов
    └── promo/NN.mp4 + posters/NN.jpg            # «Промо-ролики» — 5 роликов
```

## Запуск локально

```sh
python3 -m http.server 8000
# открыть http://localhost:8000
```

Никаких npm/build — это статика.

## Деплой

Vercel слушает GitHub. Любой push в main → автодеплой. Никакой `vercel.json` не нужен.

## Категории

CATEGORIES прописаны **в трёх местах**: `data.js`, `index.html` (inline `<script>`), `gallery.html` (inline `<script>`). При добавлении/переименовании/изменении count — править все три.

Поля:
- `id` — slug (studio, studio-vid, acc, image, vid, promo)
- `title`, `desc` — отображение
- `count` — сколько тайлов рендерить в галерее (`for i=1..count`)
- `kind` — `"photo"` или `"video"` (определяет формат имени файла: `001.jpg` vs `01.mp4`)
- `soon: true` (опционально) — показывать empty-state «Раздел готовится»
- `external: "url"` + `cover: "..."` (опционально, не используется сейчас) — карточка как внешняя ссылка

## Добавление контента

**Фото** в категорию (studio / acc / image):
1. `ffmpeg -i src.jpg -vf "scale='min(1400,iw)':-2" -q:v 4 assets/<cat>/full/NNN.jpg`
2. `ffmpeg -i src.jpg -vf "scale='min(600,iw)':-2"  -q:v 5 assets/<cat>/thumb/NNN.jpg`
3. Бампнуть `count` в трёх местах.

**Видео** в категорию (studio-vid / vid / promo):
1. `ffmpeg -i src.mp4 -vf "scale='trunc(720/2)*2':-2" -c:v libx264 -preset medium -crf 26 -c:a aac -b:a 96k -movflags +faststart assets/<cat>/NN.mp4`
2. `ffmpeg -ss 1 -i src.mp4 -vf "scale=720:-2" -frames:v 1 -q:v 5 assets/<cat>/posters/NN.jpg`
3. Бампнуть `count`.

## Контакты (в коде, обновлять везде)

- Email: `gvls6@yandex.ru`
- Тел: `8 919 626 15 51`
- Telegram: `https://t.me/gvls6`

Места: футеры всех HTML (index/gallery/privacy/обе Landing), mailto в кнопке «Связаться», privacy.html раздел 10.

## Логотип

`assets/logo/c3m.svg` — векторный, цвет залит через `fill="#e8732c"` (брендовый оранжевый). Используется через `<img>` (currentColor не работает с img). Исходник — `C3m v2 black.pdf`. Перегенерить:

```sh
pdftocairo -svg "C3m v2 black.pdf" /tmp/logo.svg
sed 's/fill="rgb(0%, 0%, 0%)"/fill="#e8732c"/g' /tmp/logo.svg > assets/logo/c3m.svg
```

## Что НЕ в git

См. `.gitignore`. Локально лежат, но не пушатся:
- `1.zip` — оригинальный архив контента (~4 ГБ).
- `content/` — раскрытый `1.zip`.
- `.source-photos/` — raw фото большого разрешения.
- `IMG_*.MP4` — оригинальные iPhone-видео (для hero и promo/05).
- `*.pdf` — исходник лого.
