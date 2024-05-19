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
          <b>Espace enseignement</b>
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
      :breakpoint="900"
      show-if-above
      content-class="bg-grey-3"
    >
      <q-list class="absolute-center">
        <!-- <q-item-label class="text-center" header>Menu</q-item-label> -->
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
import { useCours } from "../stores/cours";
import axios from "axios";
import EssentialLink from "../components/EssentialLink.vue";
let links = [
  {
    title: "Dash bord",
    link: "ens_index",
    icon: "grid_view",
    caption: "Vue globale",
  },
  {
    title: "Cours",
    link: "ens_cours",
    icon: "man",
    caption: "Mes cours",
  },
  {
    title: "Liste de prescence",
    link: "liste_p",
    icon: "list",
    caption: "Faire les presences",
  },
];
export default {
  components: { EssentialLink },
  beforeCreate() {
    const cours = useCours();
    let f = new FormData();
    f.append("id_enseignant", localStorage.getItem("userId"));
    axios.post("http://localhost/chris/cours/ens/term", f).then((res) => {
      if (res.data.message) {
        cours.setStateCoursTerm([]);
      } else {
        cours.setStateCoursTerm(res.data.response);
      }
    });
    axios.post("http://localhost/chris/cours/ens/nonterm", f).then((res) => {
      if (res.data.message) {
        cours.setStateCoursNonTerm([]);
      } else {
        cours.setStateCoursNonTerm(res.data.response);
      }
    });
  },

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
