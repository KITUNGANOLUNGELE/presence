<template>
  <div>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <q-input v-model="nom_option" type="text" label="Nom de l'option">
        <template v-slot:prepend>
          <q-icon name="history_edu" color="blue-4" />
        </template>
      </q-input>
      <q-select
        v-model="model"
        :options="options"
        label="Section"
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
import { useSection } from "../../stores/section";
import { useOption } from "../../stores/option";
import { useQuasar } from "quasar";
import axios from "axios";
export default defineComponent({
  name: "optionForm",
  beforeCreate() {},
  setup() {
    //store and environment variables
    const sectionStore = useSection();
    const optionstore = useOption();
    const $q = useQuasar();
    const options = ref([]);
    //usefull variables
    const model = ref(null);
    const nom_option = ref("");
    //functions
    sectionStore.section.forEach((element) => {
      console.log(element);
      options.value.push({
        label: element.nom_section,
        value: element.id,
      });
    });
    console.log(options.value);
    function onSubmit() {
      if (model.value == null || nom_option.value == "") {
        $q.notify({
          message: "Selectionner une section",
          icon: "error",
          iconColor: "red",
          textColor: "red",
          color: "white",
        });
      } else {
        optionstore
          .saveOption({
            nom_option: nom_option.value,
            id_section: model.value.value,
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
      nom_option.value = "";
      optionstore.getOption.then((res) => {
        optionstore.Option = res.response;
      });
    }
    //retrun
    return { options, onSubmit, model, nom_option };
  },
});
</script>

<style lang="scss" scoped></style>
