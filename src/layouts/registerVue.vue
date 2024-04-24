<template>
  <q-layout view="LHr LpR lFf">
    <q-header class="bg-blue-4">
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
          <b>Admin</b>
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
      show-if-above
      content-class="bg-grey-3"
    >
      <q-list class="absolute-center">
        <q-item-label class="text-center" header>Menu</q-item-label>
        <EssentialLink
          v-for="item in mylinks"
          :key="item.title"
          v-bind="item"
        />
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
import { useEtudiant } from "../stores/etudiant";
import EssentialLink from "../components/EssentialLink.vue";
let links = [
  {
    title: "Dash bord",
    link: "index",
    icon: "grid_view",
    caption: "Vue globale",
  },
  {
    title: "Utilisateurs",
    link: "etudiant",
    icon: "man",
    caption: "gérer les étudiants",
  },
  {
    title: "Section",
    link: "section",
    icon: "school",
    caption: "Gérer les sections",
  },
  {
    title: "Option",
    link: "option",
    icon: "history_edu",
    caption: "Gérer les options",
  },
  {
    title: "Promotion",
    link: "promotion",
    icon: "list",
    caption: "Gérer les promotions",
  },
  {
    title: "Cours",
    link: "cours",
    icon: "book",
    caption: "Gérer les cours",
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
