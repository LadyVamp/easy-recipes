<template>
  <q-icon :name="getIcon(season)" :color="getIconColor(season)" :title="getIconLabel(season)" size="32px"></q-icon>
</template>

<script setup lang="ts">
import { Season } from '@/api/interfaces';
defineProps<{ season: Season }>();

const iconSeasons = [
  {
    key: 'all',
    label: 'Все сезоны',
    icon: 'mdi-sun-snowflake',
    color: 'light-green darken-1',
  },
  {
    key: 'winter',
    label: 'Зима',
    icon: 'mdi-snowflake',
    color: 'light-blue darken-2',
  },
  {
    key: 'spring',
    label: 'Весна',
    icon: 'mdi-flower-tulip',
    color: 'green darken-2',
  },
  {
    key: 'summer',
    label: 'Лето',
    icon: 'mdi-white-balance-sunny',
    color: 'yellow darken-1',
  },
  {
    key: 'autumn',
    label: 'Осень',
    icon: 'mdi-leaf-maple',
    color: 'orange darken-2',
  },
];

function getIcon(season: Season) {
  return iconSeasons.find((item) => item.key === season)?.icon;
}
function getIconLabel(season: Season) {
  return iconSeasons.find((item) => item.key === season)?.label;
}
function getIconColor(season: Season) {
  return iconSeasons.find((item) => item.key === season)?.color;
}
</script>
