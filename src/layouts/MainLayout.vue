<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import IndexPage from "pages/IndexPage.vue";
import FormConnection from "pages/Form/FormConnection.vue";

export default defineComponent({
  name: "MainLayout",
  components: {},
  setup() {
    const ouvrir = ref(false);
    function toggle() {
      ouvrir.value = !ouvrir.value;
    }

    return { ouvrir, toggle };
  },
});
</script>
