<template>
  <div class="q-pa-md">
    <h2>Специи</h2>
    <p>
      В детской кулинарии специи применяют в очень небольших количествах — лишь до достижения легкого оттенка вкуса. В
      питании детей 1–3 лет можно использовать сладкий и белый перец, лавровый лист, базилик, тмин, тимьян, кориандр,
      майоран, розмарин, душистый перец, ваниль и корицу. Специи, обладающие острым или жгучим вкусом, такие как красный
      и черный перец, хрен, горчица, в детском питании не используются.
    </p>
  </div>
  <div class="q-pa-md">
    <q-table
      title="Шпаргалка по приготовлению круп"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :hide-pagination="true"
      :rows-per-page-options="'0'"
    />
  </div>
</template>

<script>
const columns = [
  { name: 'cereals', label: 'Крупа', field: 'cereals' },
  { name: 'time', label: 'Время варки, минут', field: 'time' },
  { name: 'serving', label: 'Порция, г', field: 'serving' },
];

const rows = [
  {
    cereals: 'Гречка',
    time: 7,
    serving: 50,
  },
  {
    cereals: 'Рис коричневый',
    time: 30,
    serving: 50,
  },
  {
    cereals: 'Булгур',
    time: 15,
    serving: 50,
  },
  {
    cereals: 'Чечевица красная',
    time: 10,
    serving: 50,
  },
  {
    cereals: 'Чечевица зеленая',
    time: 15,
    serving: 50,
  },
  {
    cereals: 'Макароны',
    time: 12,
    serving: 70,
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>
