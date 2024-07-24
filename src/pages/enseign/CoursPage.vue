<template>
  <div class="main">
    <div v-if="cours.cours_enCours.length <= 0">Pas de cours disponible</div>
    <q-card
      class="Mycard"
      v-for="item in cours.cours_enCours"
      :key="item.nom_cours"
    >
      <q-card-section class="flex flex-center">
        <q-icon name="auto_stories" color="primary" size="200%" />
        <span class="q-ml-sm"
          ><b>{{ item.nom_cours }}</b></span
        >
      </q-card-section>
      <q-card-section class="section">
        <q-btn
          flat
          label="Finir"
          align="left"
          color="negative"
          @click="terminerEnseign(item.id_enseignement)"
        />
        <q-btn
          flat
          label="Presence"
          align="right"
          color="primary"
          @click="open({ id: item.id_enseignement, cours: item.nom_cours })"
        />
      </q-card-section>
    </q-card>
  </div>
  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section>
        <vue-qrious :value="JSON.stringify(Mytext)" size="300" />
      </q-card-section>
      <q-card-section>
        <q-card-actions vertical align="center">
          <q-btn
            flat
            label="Fermer"
            align="center"
            color="negative"
            v-close-popup
          />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import axios from "axios";
import { useCours } from "../../stores/cours";
import { useEnseignement } from "../../stores/enseignement";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import VueQrious from "vue-qrious";
export default {
  components: { VueQrious },
  beforeCreate() {
    const cours = useCours();
    let f = new FormData();
    f.append("id_enseignant", localStorage.getItem("userId"));
    axios.post("http://localhost:8080/chris/cours/ens/term", f).then((res) => {
      if (res.data.message) {
        cours.setStateCoursTerm([]);
      } else {
        cours.setStateCoursTerm(res.data.response);
      }
    });
    axios
      .post("http://localhost:8080/chris/cours/ens/nonterm", f)
      .then((res) => {
        if (res.data.message) {
          cours.setStateCoursNonTerm([]);
        } else {
          cours.setStateCoursNonTerm(res.data.response);
        }
      });
  },
  beforeUpdate() {},
  setup() {
    const cours = useCours();
    const enseign = useEnseignement();
    const $q = useQuasar();
    const $r = useRouter();
    const confirm = ref(false);
    //console.log(cours.cours_term);
    const terminerEnseign = (id) => {
      enseign.end_ens(id).then((res) => {
        //action
        if (res.positive) {
          $q.notify({
            message: "Cours terminé",
            textColor: "white",
            icon: "check",
            iconColor: "white",
            color: "green-4",
          });
          $r.push("/enseignant");
        } else {
          $q.notify({
            message: "Erreur",
            textColor: "white",
            icon: "error",
            iconColor: "white",
            color: "red-4",
          });
        }
      });
    };
    const Mytext = ref(null);
    const open = (text) => {
      Mytext.value = text;
      confirm.value = true;
      // new QRious({
      //   level: "H",
      //   padding: 25,
      //   size: 100,
      //   element: document.getElementById("qr_code"),
      //   value: Mytext.value,
      // });
    };
    return { cours, enseign, confirm, terminerEnseign, open, Mytext };
  },
};
</script>

<style lang="css" scoped>
.Mycard {
  width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}
.section {
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 600px) {
  .Mycard {
    width: 80%;
  }
}
</style>
