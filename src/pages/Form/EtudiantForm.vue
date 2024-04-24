<template>
  <div>
    <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input v-model="nom" type="text" label="Nom">
        <template v-slot:prepend>
          <q-icon name="face" />
        </template>
      </q-input>
      <q-input v-model="postnom" type="text" label="Postnom" />
      <q-input v-model="prenom" type="text" label="Prenom" />
      <q-input v-model="mail" type="mail" label="Mail" icon="mail">
        <template v-slot:prepend>
          <q-icon name="mail" color="blue-4" />
        </template>
      </q-input>
      <q-input v-model="telephone" type="text" label="Telephone">
        <template v-slot:prepend>
          <q-icon name="phone" color="blue-4" />
        </template>
      </q-input>
      <q-file filled v-model="photo" label="Image">
        <template v-slot:prepend>
          <q-icon name="cloud_upload" color="blue-4" />
        </template>
      </q-file>
      <q-select
        v-model="model"
        :options="options"
        label="Promotion"
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
import { useEtudiant } from "../../stores/etudiant";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "EtudiantForm",
  setup() {
    const options = ref([]);
    const prom = usePromotion();
    const etudiantStore = useEtudiant();
    const $q = useQuasar();
    const nom = ref("");
    const postnom = ref("");
    const prenom = ref("");
    const mail = ref("");
    const telephone = ref("");
    const model = ref(null);
    //get promotion
    prom.getPromotion.then((result) => {
      result.forEach((element) => {
        options.value.push({
          label: element.nom_promotion,
          value: element.id,
        });
      });
    });
    function onSubmit() {
      if (
        model.value == null ||
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
        etudiantStore
          .saveEt({
            nom: nom.value,
            postnom: postnom.value,
            prenom: prenom.value,
            mail: mail.value,
            telephone: telephone.value,
            id_promotion: model.value.value,
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
      nom.value = "";
      postnom.value = "";
      prenom.value = "";
      postnom.value = "";
      mail.value = "";
      telephone.value = "";
    }
    return { options, onSubmit, nom, postnom, prenom, mail, telephone, model };
  },
});
</script>

<style lang="scss" scoped></style>
