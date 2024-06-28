<template>
  <q-icon :name="getIcon(nature)" :color="getIconColor(nature)" :title="getIconLabel(nature)" size="24px" />
</template>

<script setup lang="ts">
import { Nature } from '@/api/interfaces';
defineProps<{ nature: Nature }>();

const iconNatures = [
  {
    key: 'all',
    label: 'Все категории продуктов',
    icon: 'mdi-layers-outline',
    color: 'accent lighten-2',
  },
  {
    key: 'vegetable',
    label: 'Овощи и фрукты',
    icon: 'mdi-food-apple',
    color: 'light-green darken-1',
  },
  {
    key: 'bird',
    label: 'Птица',
    icon: 'mdi-food-drumstick',
    color: 'pink-2',
  },
  {
    key: 'meat',
    label: 'Мясо',
    icon: 'mdi-food-steak',
    color: 'red darken-2',
  },
  {
    key: 'fish',
    label: 'Рыба и морепродукты',
    icon: 'mdi-fish',
    color: 'blue lighten-2',
  },
  {
    key: 'dairy',
    label: 'Молочные продукты',
    icon: 'mdi-cheese',
    color: 'amber lighten-2',
  },
  {
    key: 'dessert',
    label: 'Десерт',
    icon: 'mdi-candy',
    color: 'lime darken-1',
  },
];

function getIcon(nature: Nature) {
  return iconNatures.find((item) => item.key === nature)?.icon;
}
function getIconLabel(nature: Nature) {
  return iconNatures.find((item) => item.key === nature)?.label;
}
function getIconColor(nature: Nature) {
  return iconNatures.find((item) => item.key === nature)?.color;
}
</script>
