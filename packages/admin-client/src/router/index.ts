import { useUserStore } from "@/stores/user";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "tournaments",
      component: () => import("../views/TournamentsView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const { state, get, refresh } = useUserStore();

  if (!state.user) {
    const profile = await get();
    if (!profile) {
      await refresh();
    }
  }

  if (authRequired && !state.user) {
    return "/login";
  }
});
export default router;
