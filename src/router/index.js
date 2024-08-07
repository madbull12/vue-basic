import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
// import NotFoundView from '@/views/NotFoundView.vue';
// import JobView from '@/views/JobView.vue';
// import AddJobView from '@/views/AddJobView.vue';
// import EditJobView from '@/views/EditJobView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },{
      path:"/jobs",
      name:"jobs",
      component:JobsView
    }
  ],
});

export default router;