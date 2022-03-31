export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/home',
    name: '首页',
    icon: 'home',
    component: './Home',
  },
  {
    path: '/adminManager',
    name: '管理员管理',
    icon: 'icon-home',
    routes: [
      {
        path: 'AdminList',
        name: '管理员列表',
        component: './adminManager/AdminList',
      },
      {
        path: 'AddAdmin',
        name: '添加管理员',
        component: './adminManager/AddAdmin',
      },
      {
        path: 'DepartmentList',
        name: '职位列表',
        component: './adminManager/DepartmentList',
      },
      {
        path: 'AddDepartment',
        name: '添加职位',
        component: './adminManager/AddDepartment',
      },
    ],
  },
  {
    path: '/userManager',
    name: '用户管理',
    icon: 'icon-user',
    routes: [
      {
        path: 'UserList',
        name: '用户列表',
        component: './userManager/UserList',
      },
      {
        path: 'AddUser',
        name: '添加用户',
        component: './userManager/AddUser',
      },
    ],
  },
  {
    path: '/goodsManager',
    name: '商品管理',
    icon: 'icon-shopping',
    routes: [
      {
        path: 'GoodsTypeList',
        name: '商品类型列表',
        component: './goodsManager/GoodsTypeList',
      },
      {
        path: 'AddGoodsType',
        name: '添加商品类型',
        component: './goodsManager/AddGoodsType',
      },
      {
        path: 'GoodsList',
        name: '商品列表',
        component: './goodsManager/GoodsList',
      },
      {
        path: 'AddGoods',
        name: '添加商品',
        component: './goodsManager/AddGoods',
      },
      {
        path: 'ReturnGoodsList',
        name: '退货商品列表',
        component: './goodsManager/ReturnGoodsList',
      },
      {
        path: 'GoGoodsList',
        name: '出货商品列表',
        component: './goodsManager/GoGoodsList',
      },
    ],
  },
  {
    path: '/supplierManager',
    name: '供应商管理',
    icon: 'icon-shop',
    routes: [
      {
        path: 'SupplierList',
        name: '供应商列表',
        component: './supplierManager/SupplierList',
      },
      {
        path: 'AddSupplier',
        name: '添加供应商',
        component: './supplierManager/AddSupplier',
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
