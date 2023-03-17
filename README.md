# DreamTeam Studio Test Project

This is a test project for the DreamTeam studio. The project is a web page that showcases walking tours of the Old Tallinn, the heart of the Estonian capital. The web page is designed using HTML, CSS, and JavaScript, and includes a responsive design that adjusts to different screen sizes.

#### Layout screenshot:

[![Talin-Walking.png](https://i.postimg.cc/PxRxwJQC/Talin-Walking.png)](https://postimg.cc/DJ1nV2Dh)

---

## 💻 Table of Contents

- Getting Started
- Features
- Technologies Used

## 🚀 Features

- Responsive design that adjusts to different screen sizes
- Slider that showcases images of Old Tallinn
- Other tours selection
- Interactive buttons for providing feedback
- Form

## 🛠️ Technologies Used

- HTML
- SCSS
- Native JavaScript (ES6)
- Swiper.js (for the slider functionality)

_Thank you for considering this test project. If you have any questions or feedback, please don't hesitate to contact me._

---

## :open_file_folder: Установка

- установите NodeJS (если требуется) и Yarn
- установите gulp глобально: yarn global add gulp-cli
- установите bem-tools-core глобально: yarn global add bem-tools-core

## :open_file_folder: Файловая структура

```
gulp-scss-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

- Корень папки:
  - `.babelrc.js` — настройки Babel
  - `.bemrc.js` — настройки БЭМ
  - `.eslintrc.json` — настройки ESLint
  - `.gitignore` – запрет на отслеживание файлов Git'ом
  - `.stylelintrc` — настройки Stylelint
  - `.stylelintignore` – запрет на отслеживание файлов Stylelint'ом
  - `gulpfile.babel.js` — настройки Gulp
  - `webpack.config.js` — настройки Webpack
  - `package.json` — список зависимостей
- Папка `src` - используется во время разработки:
  - БЭМ-блоки: `src/blocks`
  - шрифты: `src/fonts`
  - изображения: `src/img`
  - JS-файлы: `src/js`
  - страницы сайта: `src/views/pages`
  - SCSS-файлы: `src/styles`
  - HTML-файлы: `src/views`
  - конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): `src/.htaccess`
- Папка `dist` - папка, из которой запускается локальный сервер для разработки (при запуске `yarn run dev`)
- Папка `gulp-tasks` - папка с Gulp-тасками
