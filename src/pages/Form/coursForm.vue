<template>
  <div>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <q-input v-model="nom" type="text" label="nom" />
      <q-input v-model="volume" type="text" label="Volume horaire" />
      <q-select
        v-model="model"
        :options="options"
        label="promotion"
        behavior="menu"
        filled
      />
      <div class="flex flex-center">
        <q-btn label="Submit" type="submit" color="primary" icon="check" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { usePromotion } from "../../stores/promotion";
import { useCours } from "../../stores/cours";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "coursForm",
  setup() {
    const nom = ref("");
    const volume = ref("");
    const $q = useQuasar();
    const options = ref([]);
    const model = ref(null);
    const prom = usePromotion();
    const cours = useCours();
    prom.getPromotion.then((result) => {
      result.forEach((element) => {
        options.value.push({
          label: element.nom_promotion,
          value: element.id,
        });
      });
    });
    function onSubmit() {
      if (model.value == null || nom.value == "" || volume.value == "") {
        $q.notify({
          message: "Selectionner une option",
          icon: "error",
          iconColor: "red",
          textColor: "red",
          color: "white",
        });
      } else {
        cours
          .saveCours({
            nom: nom.value,
            volume: volume.value,
            promotion: parseFloat(model.value.value),
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
      nom.value = "";
      volume.value = "";
      model.value = null;
    }
    return { options, onSubmit, model, nom, volume };
  },
});
</script>

<style lang="scss" scoped></style>
