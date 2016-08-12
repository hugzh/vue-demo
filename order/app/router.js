// Route config
export default function(router) {
  router.map({
    '/': {
      component: require("./components/Latest.vue"),
      linkActiveClass: 'active'
    },
    '/latest': {
      component: require("./components/Latest.vue"),
      linkActiveClass: 'active'
    },
    '/all': {
      component: require("./components/All.vue"),
      linkActiveClass: 'active'
    }
  })
}