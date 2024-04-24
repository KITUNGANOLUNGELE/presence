<template>
  <div>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <q-input v-model="nom" type="text" label="Nom" />
      <q-input v-model="postnom" type="text" label="Postnom" />
      <q-input v-model="prenom" type="text" label="Prenom" />
      <q-input v-model="mail" type="mail" label="Mail" icon="mail" />
      <q-input v-model="telephone" type="text" label="Telephone" />
      <div class="flex flex-center">
        <q-btn label="Submit" type="submit" color="primary" icon="check" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { useEnseignant } from "src/stores/enseignant";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "EnseignantForm",
  setup() {
    const $q = useQuasar();
    const nom = ref("");
    const postnom = ref("");
    const prenom = ref("");
    const mail = ref("");
    const telephone = ref("");
    const enseign = useEnseignant();
    function onSubmit() {
      if (
        nom.value == "" ||
        postnom.value == "" ||
        prenom.value == "" ||
        mail.value == "" ||
        telephone.value == ""
      ) {
        $q.notify({
          message: "Selectionner une option",
          icon: "error",
          iconColor: "red",
          textColor: "red",
          color: "white",
        });
      } else {
        enseign
          .saveEnseignant({
            nom: nom.value,
            postnom: postnom.value,
            prenom: prenom.value,
            mail: mail.value,
            telephone: telephone.value,
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
      postnom.value = "";
      prenom.value = "";
      postnom.value = "";
      mail.value = "";
      telephone.value = "";
    }
    return { nom, postnom, prenom, mail, telephone, onSubmit };
  },
});
</script>

<style lang="scss" scoped></style>
