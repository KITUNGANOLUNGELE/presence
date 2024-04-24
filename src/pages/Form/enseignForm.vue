<template>
  <div>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <q-select
        v-model="modelEns"
        :options="optEns"
        label="enseignant"
        behavior="menu"
        filled
      />
      <q-select
        v-model="modelCours"
        :options="optCours"
        label="cours"
        filled
        behavior="menu"
      />
      <div class="flex flex-center">
        <q-btn label="Submit" type="submit" color="primary" icon="check" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useEnseignant } from "../../stores/enseignant";
import { useCours } from "../../stores/cours";
import { useEnseignement } from "../../stores/enseignement";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "enseignForm",
  setup() {
    const modelEns = ref(null);
    const modelCours = ref(null);
    const optEns = ref([]);
    const optCours = ref([]);
    const $q = useQuasar();
    //get enseignant
    const ens = useEnseignant();
    ens.getEnseignant.then((res) => {
      res.forEach((element) => {
        optEns.value.push({
          label:
            element.nom_enseignant +
            " " +
            element.postnom_enseignant +
            " " +
            element.prenom_enseignant,
          value: element.id,
        });
      });
    });
    //get cours
    const cours = useCours();
    cours.getCours.then((res) => {
      res.forEach((element) => {
        optCours.value.push({
          label: element.nom_cours,
          value: element.id,
        });
      });
    });
    //enregistremet
    const enseign = useEnseignement();
    function onSubmit() {
      if (modelCours.value == null || modelEns.value == "") {
        $q.notify({
          message: "Selectionner une option",
          icon: "error",
          iconColor: "red",
          textColor: "red",
          color: "white",
        });
      } else {
        enseign
          .saveEns({
            cours: modelCours.value.value,
            enseignant: modelEns.value.value,
          })
          .then((result) => {
            if (result.positive) {
              $q.notify({
                message: result.positive,
                icon: "check",
                iconColor: "white",
                textColor: "white",
                color: "green",
              });
            } else {
              $q.notify({
                message: result.negative,
                icon: "error",
                iconColor: "white",
                textColor: "white",
                color: "red",
              });
            }
          });
      }
      modelCours.value = null;
      modelEns.value = null;
    }
    return { optCours, optEns, modelCours, modelEns, onSubmit };
  },
});
</script>

<style lang="scss" scoped></style>
