<template>
  <h1>Сборник рецептов по принципу “Чем проще - тем лучше”</h1>
  <section class="row q-pa-sm">
    <div class="col col-md-9 col-xs-12">
      <em>Keep it short and simple</em>
      <h2>Чего здесь не будет</h2>
      <ul class="list-style-type-wrong">
        <li>
          сложных рецептов, в которых больше 10 ингредиентов, à la “равиоли со шпинатом и рикоттой в шалфейном масле”
        </li>
        <li>вводной информации об истории рецепта</li>
        <li>выпечки, чтобы не мыть гору посуды</li>
        <li>пошаговых фото</li>
        <li>рекламы</li>
      </ul>
      <h2>Основные функции</h2>
      <ul class="list-style-type-feature">
        <li>
          Поиск
          <ul class="list-style-type-diamond">
            <li>По названию</li>
            <li>По ингредиентам</li>
          </ul>
        </li>
        <li>
          Фильтрация
          <ul class="list-style-type-diamond">
            <li>По категориям</li>
            <li>По особенностям</li>
            <li>По сезону</li>
            <li>По количеству порций</li>
          </ul>
        </li>
        <li>
          Показать ссылки на магазины. Превращает ингредиенты в ссылки для удобного поиска в магазинах. Выбранный
          магазин сохраняется и доступен при переключении на другой рецепт.
        </li>
        <li>
          Для мобильной версии: кнопка, нажатие на которую препятствует переходу устройства в спящий режим. Пригодится,
          если руки "в муке".
        </li>
        <li>Список покупок. Записанные ингредиенты превращаются в ссылки для поиска в магазинах.</li>
      </ul>
    </div>
    <div class="col col-md-3 col-xs-12">
      <img src="/easy-recipes/logo_1024.jpg" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.list-style-type-wrong {
  li {
    list-style-type: '❌';
  }
}
.list-style-type-feature {
  li {
    list-style-type: '⭐️';
  }
}
.list-style-type-diamond {
  li {
    list-style-type: '🔹';
  }
}
</style>
