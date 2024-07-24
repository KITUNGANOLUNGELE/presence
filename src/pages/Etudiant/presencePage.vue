<template>
  <div class="main">
    <q-card class="absolute-center">
      <q-card-section class="flex flex-center">
        <q-icon name="auto_stories" color="primary" size="200%" />
        <span class="q-ml-sm"><b>Scanner le code QR de la presence</b></span>
      </q-card-section>
      <q-card-section class="section">
        <q-btn
          label="Scanner"
          align="right"
          color="primary"
          icon="edit"
          @click="open = !open"
        />
      </q-card-section>
    </q-card>
    <q-dialog v-model="open">
      <q-card class="my-card">
        <q-card-section>
          <select v-model="trackFunctionSelected">
            <option
              v-for="option in trackFunctionOptions"
              :key="option.text"
              :value="option"
            >
              {{ option.text }}
            </option>
          </select>
        </q-card-section>
        <q-card-section>
          <p>
            Choisis un format : <br />

            <span
              v-for="option in Object.keys(barcodeFormats)"
              :key="option"
              class="barcode-format-checkbox"
            >
              <input
                type="checkbox"
                v-model="barcodeFormats[option]"
                :id="option"
              />
              <label :for="option">{{ option }}</label>
            </span>
          </p>

          <p class="error">{{ error }}</p>

          <p class="decode-result">
            <!-- Last result: <b>{{ result }}</b> -->
          </p>
        </q-card-section>
        <q-card-section>
          <QrcodeStream
            :constraints="{ deviceId: selectedDevice.deviceId }"
            :track="trackFunctionSelected.value"
            :formats="selectedBarcodeFormats"
            @error="onError"
            @detect="onDetect"
            v-if="selectedDevice !== null"
          />
        </q-card-section>
        <q-card-section>
          <div>Selectionner un camera</div>
          <select v-model="selectedDevice">
            <option
              v-for="device in devices"
              :key="device.label"
              :value="device"
            >
              {{ device.label }}
            </option>
          </select>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeMount } from "vue";
import { useCours } from "../../stores/cours";
import { useQuasar } from "quasar";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
// import { BarcodeDetector } from "@sec-ant/barcode/pure";
import { Result } from "postcss";
import { usePresence } from "../../stores/presence";
export default {
  components: { QrcodeStream },
  setup() {
    /*** detection handling ***/

    const result = ref("");
    const open = ref(false);
    const $q = useQuasar();
    const p = usePresence();

    function onDetect(detectedCodes) {
      detectedCodes.forEach((el) => {
        let obj = {
          id_enseignement: JSON.parse(el.rawValue).id,
          id_etudiant: localStorage.getItem("userId"),
        };

        console.log(obj);
        //enregistrement presence par le store Presence et fermeture du modal
        p.savePresence(obj).then((res) => {
          if (res.positive) {
            $q.notify({
              message: "Presence signée",
              icon: "check",
              iconColor: "white",
              textColor: "white",
              color: "green",
            });
            open.value = false;
          } else {
            $q.notify({
              message: "Presence signée",
              icon: "error",
              iconColor: "white",
              textColor: "white",
              color: "red",
            });
          }
        });
      });
      result.value = JSON.stringify(detectedCodes.map((code) => code.rawValue));
    }

    /*** select camera ***/
    //ancien
    const selectedDevice = ref(null);
    const devices = ref([]);

    onBeforeMount(async () => {
      await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      devices.value = (await navigator.mediaDevices.enumerateDevices()).filter(
        ({ kind }) => kind === "videoinput"
      );

      if (devices.value.length > 0) {
        selectedDevice.value = devices.value[0];
      }
    });

    /*** track functons ***/

    function paintOutline(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const [firstPoint, ...otherPoints] = detectedCode.cornerPoints;

        ctx.strokeStyle = "red";

        ctx.beginPath();
        ctx.moveTo(firstPoint.x, firstPoint.y);
        for (const { x, y } of otherPoints) {
          ctx.lineTo(x, y);
        }
        ctx.lineTo(firstPoint.x, firstPoint.y);
        ctx.closePath();
        ctx.stroke();
      }
    }
    function paintBoundingBox(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const {
          boundingBox: { x, y, width, height },
        } = detectedCode;

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#007bff";
        ctx.strokeRect(x, y, width, height);
      }
    }
    function paintCenterText(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const { boundingBox, rawValue } = detectedCode;

        const centerX = boundingBox.x + boundingBox.width / 2;
        const centerY = boundingBox.y + boundingBox.height / 2;

        const fontSize = Math.max(
          12,
          (50 * boundingBox.width) / ctx.canvas.width
        );

        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.textAlign = "center";

        ctx.lineWidth = 3;
        ctx.strokeStyle = "#35495e";
        ctx.strokeText(detectedCode.rawValue, centerX, centerY);

        ctx.fillStyle = "#5cb984";
        ctx.fillText(rawValue, centerX, centerY);
      }
    }
    const trackFunctionOptions = [
      { text: "nothing (default)", value: undefined },
      { text: "outline", value: paintOutline },
      { text: "centered text", value: paintCenterText },
      { text: "bounding box", value: paintBoundingBox },
    ];
    const trackFunctionSelected = ref(trackFunctionOptions[1]);

    /*** barcode formats ***/

    const barcodeFormats = ref({
      aztec: false,
      code_128: false,
      code_39: false,
      code_93: false,
      codabar: false,
      databar: false,
      databar_expanded: false,
      data_matrix: false,
      dx_film_edge: false,
      ean_13: false,
      ean_8: false,
      itf: false,
      maxi_code: false,
      micro_qr_code: false,
      pdf417: false,
      qr_code: true,
      rm_qr_code: false,
      upc_a: false,
      upc_e: false,
      linear_codes: false,
      matrix_codes: false,
    });
    const selectedBarcodeFormats = computed(() => {
      return Object.keys(barcodeFormats.value).filter(
        (format) => barcodeFormats.value[format]
      );
    });

    /*** error handling ***/

    const error = ref("");

    function onError(err) {
      error.value = `[${err.name}]: `;

      if (err.name === "NotAllowedError") {
        error.value += "you need to grant camera access permission";
      } else if (err.name === "NotFoundError") {
        error.value += "no camera on this device";
      } else if (err.name === "NotSupportedError") {
        error.value += "secure context required (HTTPS, localhost)";
      } else if (err.name === "NotReadableError") {
        error.value += "is the camera already in use?";
      } else if (err.name === "OverconstrainedError") {
        error.value += "installed cameras are not suitable";
      } else if (err.name === "StreamApiNotSupportedError") {
        error.value += "Stream API is not supported in this browser";
      } else if (err.name === "InsecureContextError") {
        error.value +=
          "Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.";
      } else {
        error.value += err.message;
      }
    }
    return {
      result,
      open,
      onDetect,
      selectedDevice,
      devices,
      trackFunctionSelected,
      selectedBarcodeFormats,
      onError,
      trackFunctionOptions,
      error,
      barcodeFormats,
    };
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
