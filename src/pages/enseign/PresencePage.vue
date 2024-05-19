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
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="check" color="primary" text-color="white" />
        <span class="q-ml-sm">Liste des présences</span>
      </q-card-section>
      <q-card-section class="row items-center" v-if="infos != undefined">
        <q-table title="Liste" :rows="rows" :columns="columns" row-key="name" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { usePresence } from "../../stores/presence";
import { useQuasar } from "quasar";
import { info } from "autoprefixer";
export default {
  setup() {
    let datas = ref(null);
    let p = usePresence();
    let $q = useQuasar();
    const ouv = ref(false);
    const infos = ref(null);
    const rows = ref([]);
    let onclick = (id_enseignement) => {
      p.getPresenceCours(id_enseignement).then((res) => {
        infos.value = res;
        rows.value = [];
        if (infos.value) {
          infos.value.forEach((element) => {
            rows.value.push({
              nom_etudiant: element.nom_etudiant,
              date_p: element.date_p,
            });
          });
          ouv.value = true;
        } else {
          $q.notify({
            message: "Enregistrer des présences",
            color: "white",
            textColor: "red",
            icon: "error",
          });
        }
        console.log(infos.value);
      });
    };

    p.getCoursEns(localStorage.getItem("userId")).then((res) => {
      datas.value = res;
    });
    console.log(datas);
    return {
      datas,
      ouv,
      infos,
      onclick,
      rows,
      columns: [
        {
          name: "nom_etudiant",
          label: "Noms",
          field: "nom_etudiant",
          sortable: true,
        },
        {
          name: "date_p",
          label: "date",
          field: "date_p",
          sortable: true,
        },
      ],
    };
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
