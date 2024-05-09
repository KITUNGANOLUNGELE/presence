<template>
  <div class="main">
    <div v-if="datas != null">
      <q-card
        class="Mycard"
        v-for="item in datas"
        :key="item.nom_cours"
        @click="onclick"
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
      <q-card-section class="row items-center">
        <!-- Affcher la list des presences -->
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { usePresence } from "../../stores/presence";
export default {
  setup() {
    const ouv = ref(false);
    const infos = ref(null);
    let onclick = (id_enseignement) => {
      ouv.value = true;
      infos.value; //= a la liste de presence de cet enseignemnt a afficher dans le dialog
    };
    let datas = ref(null);
    let p = usePresence();
    p.getCoursEns(localStorage.getItem("userId")).then((res) => {
      datas.value = res;
    });
    console.log(datas);
    return { datas };
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
