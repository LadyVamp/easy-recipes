<template>
  <q-layout view="hHh lpR lff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <div class="flex justify-between">
            <div>
              <q-avatar>
                <router-link :to="{ path: '/' }">
                  <img src="/easy-recipes/logo.png" />
                </router-link>
              </q-avatar>
              Easy Recipes
            </div>
            <div><DarkModeButton /></div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      overlay
      :width="200"
      :breakpoint="500"
      bordered
      :behavior="$q.platform.is.mobile ? 'mobile' : 'desktop'"
      :class="$q.dark.isActive ? 'bg-red-9' : 'bg-grey-3'"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item v-ripple clickable :to="menuItem.to">
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <TheFooter />
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import TheFooter from '@/components/Layout/TheFooter.vue';
import DarkModeButton from '@/components/DarkModeButton.vue';

const leftDrawerOpen = ref(false);
const menuList = [
  {
    icon: 'mdi-home',
    label: 'Рецепты',
    to: '/',
  },
  {
    icon: 'mdi-information-outline',
    label: 'About',
    to: '/about',
  },
  {
    icon: 'mdi-code-tags',
    label: 'Dev',
    to: '/dev',
  },
];

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss">
.bordered {
  border: 1px solid deeppink;
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}
h1 {
  font-size: 2.5em;
  line-height: 1.5rem;
  color: #00b4ff;
}
h2 {
  font-size: 1.7em;
  font-weight: 500;
  line-height: 1.2rem;
  color: #00b4ff;
}
h3 {
  font-size: 1.4em;
  font-weight: 500;
  line-height: 1rem;
  color: #00b4ff;
}
</style>
