<template>
  <q-icon :name="getIcon(feature)" color="orange-5" :title="getIconLabel(feature)" size="32px"></q-icon>
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
    key: 'toaster',
    label: 'Мультипекарь',
    icon: 'mdi-toaster',
  },
];

function getIcon(feature: Feature) {
  return iconFeatures.find((item) => item.key === feature)?.icon;
}
function getIconLabel(feature: Feature) {
  return iconFeatures.find((item) => item.key === feature)?.label;
}
</script>
