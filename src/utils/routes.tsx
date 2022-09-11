import {
  VscOrganization,
  VscPerson,
  VscBook,
  VscGroupByRefType,
  VscTag,
  VscHome,
  VscDebugStackframeDot,
  VscPackage,
} from 'react-icons/vsc'

export enum RouteEnum {
  Home = '/',
  UiElements = '/ui-elements',
  Buttons = '/ui-elements/buttons',
  Adms = '/users',
  CreateUser = '/users/create',
  Customers = '/customers',
  Posts = '/posts',
  CreatPosts = '/posts/create',
  Categories = '/categories',
  CreateCategories = '/categories/create',
  Tags = '/tags',
}

export interface IMenu {
  title: string
  url: string
  icon?: JSX.Element
  submenu?: IMenu[]
}

export const menu: IMenu[] = [
  {
    title: 'Home',
    url: RouteEnum.Home,
    icon: <VscHome className="text-xl" />,
  },
  {
    title: 'UI Elements',
    url: RouteEnum.UiElements,
    icon: <VscPackage className="text-xl" />,
    submenu: [
      { title: 'Buttons', url: RouteEnum.Buttons, icon: <VscDebugStackframeDot /> },
    ],
  },
  // {
  //   title: 'Administratores',
  //   url: RouteEnum.Adms,
  //   icon: <VscOrganization className="text-xl" />,
  // },
  // {
  //   title: 'Assinantes',
  //   url: RouteEnum.Customers,
  //   icon: <VscPerson className="text-xl" />,
  // },
  // {
  //   title: 'Posts',
  //   url: RouteEnum.Posts,
  //   icon: <VscBook className="text-xl" />,
  // },
  // {
  //   title: 'Categorias',
  //   url: RouteEnum.Categories,
  //   icon: <VscGroupByRefType className="text-xl" />,
  // },
  // {
  //   title: 'Tags',
  //   url: RouteEnum.Tags,
  //   icon: <VscTag className="text-xl" />,
  // },
]
