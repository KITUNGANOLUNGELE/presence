<template>
  <q-layout view="LHr LpR lFf">
    <q-header class="bg-blue">
      <q-toolbar class="text-white">
        <q-btn
          flat
          round
          dense
          icon="menu"
          color="white"
          @click="drawer = !drawer"
        />
        <q-toolbar-title style="font-family: montserrat">
          <b>Espace Etudiant</b>
        </q-toolbar-title>
        <q-fab color="white" icon="person" flat direction="down">
          <q-fab-action color="blue-4" @click="someMethod" icon="mail" />
          <q-fab-action color="blue-4" @click="someMethod" icon="settings" />
          <q-fab-action color="blue-4" @click="deconnect" icon="logout" />
        </q-fab>
      </q-toolbar>
    </q-header>
    <q-drawer
      side="left"
      v-model="drawer"
      bordered
      :width="200"
      :breakpoint="500"
      content-class="bg-grey-3"
      show-if-above
    >
      <q-list class="absolute-center">
        <!-- <q-item-label class="flex flex-center">Menu</q-item-label> -->
        <EssentialLink v-for="item in mylinks" :key="item.id" v-bind="item" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import EssentialLink from "../components/EssentialLink.vue";
let links = [
  {
    title: "Presence",
    link: "etudiant_index",
    icon: "man",
    caption: "listes de presence",
  },
  {
    title: "Examen",
    link: "et_exam",
    icon: "notifications",
    caption: "Mes cours",
  },
  {
    title: "Mes presences",
    link: "section",
    icon: "list",
    caption: "Faire les presences",
  },
];
export default {
  components: { EssentialLink },
  setup() {
    const mylinks = links;
    const drawer = ref(false);
    const router = useRouter();
    const deconnect = () => {
      localStorage.clear();
      router.replace("/");
    };

    return { drawer, deconnect, mylinks };
  },
};
</script>

<style lang="scss" scoped></style>
