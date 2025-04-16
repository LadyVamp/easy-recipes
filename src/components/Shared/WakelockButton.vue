<template>
  <q-btn outline round color="warning" icon="mdi-sleep-off" @click="wakeLock" />
</template>

<script setup>
import { Notify } from 'quasar';

function wakeLock() {
  const requestWakeLock = async () => {
    try {
      const wakeLock = await navigator.wakeLock.request('screen');
      console.log(wakeLock);
      Notify.create({
        message: 'WakeLock активирован',
        type: 'warning',
      });
    } catch (err) {
      console.log(err);
    }
  };
  requestWakeLock();
}
</script>
