<template>
  <section>
    <!-- TODO: настроить цвета https://colorscheme.ru/#3.31TurKUw0w0 -->
    <div class="q-pa-md">
      <h2>Кириллица в транслит для id</h2>
      <CyrillicTransliterator />
    </div>
    <div class="q-pa-md">
      <h2>Как добавить новый рецепт</h2>
      <ul>
        <li>1. Написать рецепт в public/recipes.json</li>
        <li>2. Фотку отправить самому себе в ВК, открыть оригинал, скачать</li>
        <li>3. Открыть в фотошопе, обрезать, добавить лого</li>
        <li>4. Сохранить с <b>именем, равным id</b> в формате .jpg, качество 6 из 12</li>
        <li>5. Добавить картинку в папку public/recipe-images</li>
      </ul>
    </div>
    <div class="q-pa-md">
      <h2>Сжатие изображений</h2>
      <p>
        Прогнать изображение через <a href="https://imagecompressor.com/" target="_blank">Компрессор</a>. Не больше 20
        изображений за один раз. Этот компрессор дописывает -min после имени файла. Использовать групповое
        переименование в Total Commander с маской [N1--5].
      </p>
    </div>
    <div class="q-pa-md">
      <q-btn
        color="orange"
        label="Иконки"
        :href="'https://pictogrammers.com/library/mdi/'"
        :target="'_blank'"
        text-color="grey-9"
        icon="mdi-silverware"
      />
      Добавить перед именем иконки префикс mdi-
    </div>
    <div class="q-pa-md q-gutter-sm">
      <h2>Цвета</h2>
      <q-btn color="white" text-color="black" label="Standard" />
      <q-btn color="primary" label="Primary" />
      <q-btn color="secondary" label="Secondary" />
      <q-btn color="accent" label="accent" />
      <q-btn color="dark" label="dark" />
      <q-btn color="positive" label="positive" />
      <q-btn color="negative" label="negative" />
      <q-btn color="info" label="info" />
      <q-btn color="warning" label="warning" />
    </div>
    <div class="q-pa-md">
      <h2>Changelog</h2>
      <p>
        30.12.24 было обнаружено, что у Купера к сборке 89, доставке 119 добавлен сервисный сбор 49. Итого +257 руб к
        заказу. Бесплатной доставки нет. Поэтому на странице shopping-list множество shops1 объединено с shops2.
        Магазины Купера в конце списка.
      </p>
      <p>
        13.03.25 Дали промокод на 500 руб при заказе от 3500 для тех, кто не заказывал 2 месяца. Сумма в заказе с учетом
        доставки (178), сервисного сбора (69) и промокода (500) составила 4128 руб. В заказ положили чек, сумма 3622
        руб. Разницу 506 руб Купер взял себе. "7.2. Клиент настоящим безусловно соглашается, что стоимость Товара на
        Интернет-сайте Купера может отличаться от стоимости Товара, устанавливаемой в Торговой точке Партнера Купера на
        полке или ином месте выкладки Товаров. В случае, если Товары были приобретены Купером по цене ниже, чем цена,
        указанная в Заказе, сумма дополнительной выгоды остается у Купера в качестве агентского вознаграждения в полном
        объеме."
      </p>
    </div>
  </section>
</template>

<script setup>
import CyrillicTransliterator from '@/components/Shared/CyrillicTransliterator.vue';
</script>
