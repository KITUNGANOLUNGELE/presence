<template>
  <div>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <q-select
        v-model="modelSurv"
        :options="optSurv"
        label="Surveillant"
        behavior="menu"
        filled
      >
        <template v-slot:prepend>
          <q-icon name="man" color="blue-4" />
        </template>
      </q-select>
      <q-select
        v-model="modelEx"
        :options="optEx"
        label="Examen"
        behavior="menu"
        filled
      >
        <template v-slot:prepend>
          <q-icon name="auto_stories" color="blue-4" /> </template
      ></q-select>
      <div class="flex flex-center">
        <q-btn label="Submit" type="submit" color="primary" icon="check" />
      </div>
    </q-form>
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent, ref } from "vue";
import { useExamen } from "../../stores/exam";
import { useSurveillant } from "../../stores/surveillant";
import { useQuasar } from "quasar";
import { useSurveillance } from "../../stores/surveillance";
export default defineComponent({
  name: "examSurv",
  beforeCreate() {},
  setup() {
    const optSurv = ref([]);
    const $q = useQuasar();
    const optEx = ref([]);
    const modelSurv = ref(null);
    const modelEx = ref(null);
    const exam = useExamen();
    const surv = useSurveillant();
    const survce = useSurveillance();
    //getExamen
    exam.getExam.then((res) => {
      res.forEach((element) => {
        optEx.value.push({
          label: element.nom_cours,
          value: element.id,
        });
      });
    });
    //getSurveillant
    surv.getSurveillant.then((res) => {
      res.forEach((elem) => {
        optSurv.value.push({
          label:
            elem.nom_surveillant +
            " " +
            elem.postnom_surveillant +
            " " +
            elem.prenom_surveillant,
          value: elem.id,
        });
      });
    });
    //add a surveillance
    function onSubmit() {
      if (modelEx.value == null || modelSurv.value == null) {
        $q.notify({
          message: "Selectionner une section",
          icon: "error",
          iconColor: "red",
          textColor: "red",
          color: "white",
        });
      } else {
        survce
          .saveSurveillance({
            surveillant: modelSurv.value.value,
            examen: modelEx.value.value,
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
    }
    return { optEx, optSurv, modelEx, modelSurv, onSubmit };
  },
});
</script>

<style lang="scss" scoped></style>
