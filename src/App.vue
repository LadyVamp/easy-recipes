<template>
  <q-layout view="hHh lpR fFf">
    <q-header align="left" reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <div class="flex justify-between">
            <div>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
              </q-avatar>
              Easy Recipes
            </div>
            <div><DarkModeButton /></div>
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left" class="bg-white text-blue-6">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About" />
        <q-route-tab to="/dev" label="Dev" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <TheFooter />
  </q-layout>
</template>

<script setup>
import TheFooter from '@/components/Layout/TheFooter.vue';
import DarkModeButton from '@/components/DarkModeButton.vue';
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
</style>
