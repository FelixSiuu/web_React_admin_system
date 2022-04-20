import {BsPerson,BsCart4,BsCardList} from "react-icons/bs";

const sideBar = [
      {title: '訂單管理', icon: <BsCardList />, pathName: '/home/order', children: [
        {title: '訂單列表', pathName: '/home/order/list'},
        {title: '退貨管理', pathName: '/home/order/return'},
        {title: '生產管理', pathName: '/home/order/management'},
      ]},
      {title: '產品管理', icon: <BsCart4 />, pathName: '/home/product', children: [
        {title: '產品列表', pathName: '/home/product/list'},
        {title: '產品分類', pathName: '/home/product/classify'},
      ]},
      {title: '權限管理', icon: <BsPerson />, pathName: '/home/permission', children: [
        {title: '用戶管理', pathName: '/home/permission/user'},
        {title: '菜單管理', pathName: '/home/permission/menu'},
      ]},
]

export default sideBar