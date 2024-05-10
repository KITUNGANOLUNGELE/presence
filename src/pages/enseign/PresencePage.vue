<template>
  <div class="main">
    <div v-if="datas != null">
      <q-card
        class="Mycard"
        v-for="item in datas"
        :key="item.nom_cours"
        @click="onclick(item.id_enseignement)"
      >
        <q-card-section title="Cliquer pour voir la liste" class="text-center"
          ><b>{{ item.nom_cours }}</b>
        </q-card-section>
      </q-card>
    </div>
    <div v-if="datas == null">
      <q-card class="Mycard">
        <q-card-section><b>Aucune donnée disponible</b> </q-card-section>
      </q-card>
    </div>
  </div>
  <q-dialog v-model="ouv">
    <q-card v-for="item in infos" :key="item.nom_etudiant">
      <q-card-section class="row items-center">
        <q-avatar icon="check" color="primary" text-color="white" />
        <span class="q-ml-sm">Liste des présences</span>
      </q-card-section>
      <q-card-section class="row items-center" v-if="infos != undefined">
        {{ item.nom_etudiant }} {{ item.postnom_etudiant }}
        {{ item.prenom_etudiant }} {{ item.date_p }}
      </q-card-section>
      <q-card-section class="row items-center" v-else>
        <div>Acune presence disponible</div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { usePresence } from "../../stores/presence";
import { useQuasar } from "quasar";
export default {
  setup() {
    let datas = ref(null);
    let p = usePresence();
    let $q = useQuasar();
    const ouv = ref(false);
    const infos = ref(null);
    let onclick = (id_enseignement) => {
      p.getPresenceCours(id_enseignement).then((res) => {
        infos.value = res;
        if (infos.value) {
          ouv.value = true;
        } else {
          $q.notify({
            message: "Enregistrer des présences",
          });
        }
        console.log(infos.value);
      });
    };

    p.getCoursEns(localStorage.getItem("userId")).then((res) => {
      datas.value = res;
    });
    console.log(datas);
    return { datas, ouv, infos, onclick };
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
