<template>
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
  { name: 'ratio', label: 'Соотношение крупы и воды', field: 'ratio' },
  { name: 'time', label: 'Время варки (минут)', field: 'time' },
  { name: 'shelf_life', label: 'Срок хранения', field: 'shelf_life' },
];

const rows = [
  {
    cereals: 'Гречка',
    ratio: '1:2',
    time: '7',
    shelf_life: '2 года',
  },
  {
    cereals: 'Рис коричневый',
    ratio: '1:2',
    time: '30',
    shelf_life: '6 месяцев',
  },
  {
    cereals: 'Булгур',
    ratio: '1:2',
    time: '15',
    shelf_life: '1 год',
  },
  {
    cereals: 'Чечевица красная',
    ratio: '1:2',
    time: '10',
    shelf_life: '1 год',
  },
  {
    cereals: 'Чечевица зеленая',
    ratio: '1:2',
    time: '15',
    shelf_life: '1 год',
  },
  {
    cereals: 'Макароны',
    ratio: '1:2',
    time: '12',
    shelf_life: '2,5 года',
  },
  {
    cereals: 'Горох колотый',
    ratio: '1:2',
    time: '30',
    shelf_life: '1 год',
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
