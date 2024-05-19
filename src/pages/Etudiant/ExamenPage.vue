<template>
  <q-page padding class="flex flex-center">
    <div v-if="exam">
      <q-card class="my-card" v-for="item in exam" :key="item.id">
        <q-card-section>
          <div class="row">
            <div class="col">
              <q-icon name="auto_stories" color="primary" /><b>
                {{ item.nom_cours }}</b
              >
            </div>
            <q-separator vertical />
            <div class="col" caption>
              <div>
                <p>
                  <q-icon name="event" color="primary" /> {{ item.date_exam }}
                </p>
                <p>
                  <q-icon name="alarm" color="primary" /> {{ item.heure_exam }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-center" style="margin-top: 10px">
            <q-btn
              color="primary"
              icon="qr_code"
              label="Qr code"
              class="mt-3"
              @click="showdialog(item.id_enseignement)"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div v-else>Aucun examen programmé</div>
    <q-dialog v-model="confirm">
      <q-card>
        <q-card-section class="row items-center">
          <VueQrious :value="JSON.stringify(valueEx)" size="300" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useExamen } from "src/stores/exam";
import { useQuasar } from "quasar";
import VueQrious from "vue-qrious";
export default {
  components: { VueQrious },
  setup() {
    const valueEx = ref({});
    const confirm = ref(false);
    const exam = ref(null);
    const ex = useExamen();
    const q = useQuasar();
    q.loading.show({
      message: "Recherche des examens pour votre promotion...",
      messageColor: "primary",
      spinnerColor: "blue-4",
    });
    ex.getExP({
      id_promotion: localStorage.getItem("id_prom"),
    }).then((res) => {
      exam.value = res;
      if (exam.value == null || exam.value != null) {
        q.loading.hide();
      }
    });
    const showdialog = (val) => {
      valueEx.value = {
        id_enseignement: val,
        id_etudiant: localStorage.getItem("userId"),
      };
      confirm.value = true;
    };
    return { exam, confirm, valueEx, showdialog };
  },
};
</script>

<style lang="scss" scoped></style>
