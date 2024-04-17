import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import MembersView from '@/views/MembersView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import RegisterView from '@/views/RegisterView.vue'
import TasksView from '@/views/TasksView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/members',
      name: 'Miembros',
      component: MembersView
    },
    {
      path: '/projects',
      name: 'Proyectos',
      component: ProjectsView
    },
    {
      path: '/tasks',
      name: 'Tareas',
      component: TasksView
    },
    {
      path: '/profile',
      name: 'Perfil',
      component	: ProfileView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'No encontrado',
      component: NotFoundView
    }
  ]
})

export default router
