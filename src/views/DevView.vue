<template>
  <h4>Как добавить новый рецепт</h4>
  <ul>
    <li>1. Написать рецепт в public/recipes.json</li>
    <li>2. Фотку отправить самому себе в ВК, открыть оригинал, обрезать</li>
    <li>3. Отправить самому себе, скачать и сохранить с <b>именем, равным id</b></li>
    <li>
      4. Прогнать картинку через <a href="https://imagecompressor.com/" target="_blank">Компрессор</a>. Этот компрессор
      дописывает -min после имени файла. Использовать групповое переименование в Total Commander с маской [N1--5].
    </li>
    <li>
      Или <a href="https://tinyjpg.com/" target="_blank">tinyjpg</a>. Но он сразу несколько файлов сжимать не будет.
    </li>
    <li>5. Добавить картинку в папку public/recipe-images</li>
  </ul>
</template>

<script setup></script>

<style scoped></style>
