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
          <q-fab-action
            color="blue-4"
            @click="params = !params"
            icon="settings"
          />
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
      <q-dialog v-model="params" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="settings" color="primary" text-color="white" />
            <span class="q-ml-sm">Gestion</span>
          </q-card-section>
          <q-card-section>
            <q-stepper
              v-model="step"
              ref="stepper"
              color="primary"
              contracted
              animated
            >
              <q-step
                :name="1"
                title="Mes informations"
                icon="edit"
                :done="step > 1"
              >
                Info du compte
              </q-step>
              <q-step
                :name="2"
                title="ajouter un compte administrateur"
                caption="Optional"
                icon="face"
                color="red-3"
                :done="step > 2"
              >
                Ajouter compte
              </q-step>
              <q-step
                :name="3"
                title="Liste des administrateurs"
                color="green-3"
                caption="Optional"
                icon="list"
              >
                Liste
              </q-step>
              <template v-slot:navigation>
                <q-stepper-navigation>
                  <q-btn
                    @click="step++"
                    color="primary"
                    v-if="step < 3"
                    class="q-ml-sm"
                    :label="step == 1 ? 'Nouveau' : 'Liste'"
                  />
                  <q-btn
                    v-if="step > 1"
                    flat
                    color="primary"
                    @click="step--"
                    :label="step == 3 ? 'Nouveau' : 'Mes info'"
                    class="q-ml-sm"
                  />
                </q-stepper-navigation>
              </template>
            </q-stepper>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Fermer" color="Negative" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
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
    const params = ref(false);
    const deconnect = () => {
      localStorage.clear();
      router.replace("/");
    };

    return { drawer, deconnect, mylinks, params, step: ref(1) };
  },
};
</script>

<style lang="scss" scoped></style>
