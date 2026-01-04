<template>
  <q-icon :name="getIcon(feature)" color="orange-5" :title="getIconLabel(feature)" size="24px" />
</template>

<script setup lang="ts">
import { Feature } from '@/api/interfaces';
defineProps<{ feature: Feature }>();

const iconFeatures = [
  {
    key: 'all',
    label: 'Все особенности',
    icon: 'mdi-layers-outline',
  },
  {
    key: 'fast',
    label: 'Быстрый',
    icon: 'mdi-clock-fast',
  },
  {
    key: 'oven',
    label: 'Духовка',
    icon: 'mdi-stove',
  },
  {
    key: 'stewingdish',
    label: 'Утятница',
    icon: 'mdi-dome-light',
  },
  {
    key: 'pot',
    label: 'Кастрюля',
    icon: 'mdi-pot-steam-outline',
  },
  {
    key: 'grill',
    label: 'Гриль',
    icon: 'mdi-grill',
  },
  {
    key: 'afghan_cauldron',
    label: 'Афганский казан',
    icon: 'mdi-kettlebell',
  },
  {
    key: 'multicooker',
    label: 'Мультиварка',
    icon: 'mdi-food-takeout-box-outline',
  },
];

function getIcon(feature: Feature) {
  return iconFeatures.find((item) => item.key === feature)?.icon;
}
function getIconLabel(feature: Feature) {
  return iconFeatures.find((item) => item.key === feature)?.label;
}
</script>
