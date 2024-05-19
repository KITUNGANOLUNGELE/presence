const routes = [
  {
    path: "/",
    name: "racine",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Form/FormConnection.vue"),
      },
    ],
  },
  {
    path: "/home",
    name: "acceuil",
    component: () => import("layouts/registerVue.vue"),
    children: [
      {
        path: "",
        name: "index",
        component: () => import("pages/admin/dashPage.vue"),
      },
      {
        path: "/section",
        name: "section",
        component: () => import("pages/admin/sectionPage.vue"),
      },
      {
        path: "/etudiant",
        name: "etudiant",
        component: () => import("pages/admin/userPage.vue"),
      },
      {
        path: "/option",
        name: "option",
        component: () => import("pages/admin/optionPage.vue"),
      },
      {
        path: "/promotion",
        name: "promotion",
        component: () => import("pages/admin/promotionPage.vue"),
      },
      {
        path: "/cours",
        name: "cours",
        component: () => import("pages/admin/coursPage.vue"),
      },
    ],
  },
  {
    path: "/enseignant",
    name: "enseignant",
    component: () => import("layouts/enseignantLayout.vue"),
    children: [
      {
        path: "",
        name: "ens_index",
        component: () => import("pages/enseign/HomePage.vue"),
      },
      {
        path: "/ens_cours",
        name: "ens_cours",
        component: () => import("pages/enseign/CoursPage.vue"),
      },
      {
        path: "/liste_p",
        name: "liste_p",
        component: () => import("pages/enseign/PresencePage.vue"),
      },
    ],
  },
  {
    path: "/etudiant_vue",
    name: "etudiant_vue",
    component: () => import("layouts/etudiantLayout.vue"),
    children: [
      {
        path: "",
        name: "etudiant_index",
        component: () => import("pages/Etudiant/presencePage.vue"),
      },
      {
        path: "",
        name: "et_exam",
        component: () => import("pages/Etudiant/ExamenPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
