<template>
  <div>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <q-select
        v-model="model"
        :options="opt"
        label="Enseignement"
        behavior="menu"
        filled
      >
        <template v-slot:prepend>
          <q-icon name="auto_stories" color="blue-4" />
        </template>
      </q-select>
      <q-list bordered>
        <q-item>
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="event" />
          </q-item-section>
          <q-item-section>
            <q-date v-model="date" portrait minimal label="Date" />
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="alarm" />
          </q-item-section>
          <q-item-section>
            <q-time v-model="heure" with-seconds />
          </q-item-section>
        </q-item>
      </q-list>

      <div class="flex flex-center">
        <q-btn label="Submit" type="submit" color="primary" icon="check" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { useEnseignement } from "../../stores/enseignement";
import { useExamen } from "../../stores/exam";
import axios from "axios";
export default defineComponent({
  name: "examForm",
  beforeCreate() {
    // const enseignement = useEnseignement();
    // axios.get("http://localhost/chris/enseignement/all/").then((res) => {
    //   if (res.data.message) {
    //   } else {
    //     enseignement.setState(res.data.response);
    //   }
    // });
  },
  setup() {
    const opt = ref([]);
    const model = ref(null);
    const enseignemt = useEnseignement();
    const $q = useQuasar();
    const date = ref(null);
    const heure = ref(null);
    const exam = useExamen();
    enseignemt.getEnseign.then((result) => {
      result.forEach((element) => {
        opt.value.push({
          label: element.nom_cours,
          value: element.id,
        });
      });
    });
    //enregistrement
    function onSubmit() {
      if (model.value == null || date.value == null || heure.value == null) {
        $q.notify({
          message: "Selectionner une option",
          icon: "error",
          iconColor: "red",
          textColor: "red",
          color: "white",
        });
      } else {
        exam
          .saveEx({
            enseignement: model.value.value,
            date: date.value,
            heure: heure.value,
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
        model.value = null;
        date.value = null;
        heure.value = null;
      }
    }
    return { opt, model, onSubmit, date, heure };
  },
});
</script>

<style lang="scss" scoped></style>
