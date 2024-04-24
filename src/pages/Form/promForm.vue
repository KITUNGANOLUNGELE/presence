<template>
  <div>
    <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input v-model="nom_promotion" type="text" label="Nom de la promotion">
        <template v-slot:prepend>
          <q-icon name="book" color="blue-4" />
        </template>
      </q-input>
      <q-select
        v-model="model"
        :options="options"
        label="Option"
        behavior="menu"
        filled
      >
        <template v-slot:prepend>
          <q-icon name="school" color="blue-4" />
        </template>
      </q-select>
      <div class="flex flex-center">
        <q-btn label="Submit" type="submit" color="primary" icon="check" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useOption } from "../../stores/option";
import { usePromotion } from "../../stores/promotion";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "promForm",
  beforeCreate() {},
  setup() {
    const optionStore = useOption();
    const promotionStore = usePromotion();
    let options = [];
    let $q = useQuasar();

    const nom_promotion = ref("");
    const model = ref(null);

    optionStore.Option.forEach((Element) => {
      options.push({
        label: Element.nom_option,
        value: Element.id,
      });
    });

    function onSubmit() {
      if (model.value == null || nom_promotion.value == "") {
        $q.notify({
          message: "Selectionner une option",
          icon: "error",
          iconColor: "red",
          textColor: "red",
          color: "white",
        });
      } else {
        promotionStore
          .savePromotion({
            nom_prom: nom_promotion.value,
            id_option: model.value.value,
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
      model.value = null;
      nom_promotion.value = "";
    }
    return { options, onSubmit, model, nom_promotion };
  },
});
</script>

<style lang="scss" scoped></style>
