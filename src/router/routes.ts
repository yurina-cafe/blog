export const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/articles',
    children: [
      {
        path: '/articles',
        component: () => import('@/views/articles/index.vue'),
        name: 'articles'
      },
      {
        path: '/upload',
        component: () => import('@/views/upload/index.vue'),
        name: 'upload'
      }
    ]
  }
]
