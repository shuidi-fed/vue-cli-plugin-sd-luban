export default [
  // module1
  {
    path: '/module1',
    meta: {
      title: 'module1'
    },
    component: () => import('seaPublic/components/crossIndex'),
    children: [{
        path: 'page1',
        meta: {
          title: 'page1'
        },
        component: () => import('views/module1/page1')
      },
      {
        path: 'page2',
        meta: {
          title: 'page2'
        },
        notShowInMenu: true,
        component: () => import('views/module1/page2')
      },
    ]
  }
]