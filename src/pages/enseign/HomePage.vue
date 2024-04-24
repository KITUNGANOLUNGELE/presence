<template>
  <div class="flex">
    <dashComponent
      :number="cours.cours_enCours.length"
      name="cours en cours"
      icon="auto_stories"
      @click="nonterm = !nonterm"
    />
    <dashComponent
      :number="cours.cours_term.length"
      name="cours terminé"
      icon="book"
      @click="term = !term"
    />
    <q-dialog v-model="term" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="book" color="primary" text-color="white" />
          <span class="q-ml-sm">Cours finis</span>
          <q-separator color="primary" />
        </q-card-section>
        <q-card-section>
          <q-card
            v-for="item in cours.cours_term"
            :key="item.nom_cours"
            style="margin-top: 5px"
          >
            <q-card-section
              ><q-icon name="book" color="blue-4" /><span class="q-ml-sm"
                ><b> {{ item.nom_cours }}</b></span
              >
            </q-card-section>
          </q-card>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="nonterm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="auto_stories" color="primary" text-color="white" />
          <span class="q-ml-sm">Cours en cours</span>
        </q-card-section>
        <q-card-section>
          <q-card
            v-for="item in cours.cours_enCours"
            :key="item.nom_cours"
            style="margin-top: 5px"
          >
            <q-card-section
              ><q-icon name="auto_stories" color="blue-4" />
              <span class="q-ml-sm"
                ><b>{{ item.nom_cours }}</b></span
              >
            </q-card-section>
          </q-card>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import axios from "axios";
import dashComponent from "../../components/dashComponent.vue";
import { useCours } from "../../stores/cours";
import { ref } from "vue";
export default {
  components: { dashComponent },
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
  beforeUpdate() {},
  setup() {
    const columns = [
      {
        name: "Num",
        align: "center",
        label: "Num",
        field: "Num",
        sortable: true,
      },
      {
        name: "Cours",
        align: "center",
        label: "Cours",
        field: "Cours",
        sortable: true,
      },
    ];
    const data = [];

    const term = ref(false);
    const nonterm = ref(false);
    const cours = useCours();

    return { cours, term, nonterm, columns, data };
  },
};
</script>

<style lang="scss" scoped></style>
