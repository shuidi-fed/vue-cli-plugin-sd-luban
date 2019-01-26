import name from 'router/name'

// 深度搜索routes下的js文件
const autoInjectRoutes = requireSubRoutes(require.context('./routes/', true, /\.js$/))

export default [
  {
    path: '/',
    name: name.home,
    component: () => import('seaPublic/components/crossIndex')
  },
  // login
  {
    path: '/login',
    name: name.login,
    meta: {
      title: '登录'
    },
    component: () => import('seaPublic/components/seaLogin')
  },
  // autoInjectRoutes
  ...autoInjectRoutes,
  // ...others
  {
    path: '*',
    component: () => import('seaPublic/components/seaLogin')
  },
]

// get subRoutes
function requireSubRoutes (r) {
  const routes = []
  r.keys().forEach(key => { Object.keys(r(key)).forEach(name => { routes.push(...r(key)[name]) }) })
  return routes
}
