import {
  VscOrganization,
  VscPerson,
  VscBook,
  VscGroupByRefType,
  VscTag,
  VscHome,
  VscDebugStackframeDot,
  VscPackage,
  VscOutput,
} from 'react-icons/vsc'

export enum RouteEnum {
  Home = '/',
  FormElements = '/form-elements',
  Autocomplite = '/form-elements/autocomplite',
  MultSelect = '/form-elements/mult-select',
  InputText = '/form-elements/input-text',
  Select = '/form-elements/select',
  UiElements = '/ui-elements',
  Alerts = '/ui-elements/alerts',
  Badges = '/ui-elements/badges',
  Breadcrumbs = '/ui-elements/breadcrumbs',
  Buttons = '/ui-elements/buttons',
  Pagination = '/ui-elements/pagination',
  Tables = '/ui-elements/tables',
  Modals = '/ui-elements/modals',
  Cards = '/ui-elements/cards',
  Tabs = '/ui-elements/tabs',
  Tooltips = '/ui-elements/tooltips',
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
    title: 'Form Elements',
    url: RouteEnum.FormElements,
    icon: <VscOutput className="text-xl" />,
    submenu: [
      {
        title: 'Autocomplite',
        url: RouteEnum.Autocomplite,
        icon: <VscDebugStackframeDot />,
      },
      { title: 'InputText', url: RouteEnum.InputText, icon: <VscDebugStackframeDot /> },
      {
        title: 'MultSelect',
        url: RouteEnum.MultSelect,
        icon: <VscDebugStackframeDot />,
      },
      { title: 'Select', url: RouteEnum.Select, icon: <VscDebugStackframeDot /> },
    ],
  },
  {
    title: 'UI Elements',
    url: RouteEnum.UiElements,
    icon: <VscPackage className="text-xl" />,
    submenu: [
      { title: 'Alerts', url: RouteEnum.Alerts, icon: <VscDebugStackframeDot /> },
      { title: 'Badges', url: RouteEnum.Badges, icon: <VscDebugStackframeDot /> },
      {
        title: 'Breadcrumbs',
        url: RouteEnum.Breadcrumbs,
        icon: <VscDebugStackframeDot />,
      },
      { title: 'Buttons', url: RouteEnum.Buttons, icon: <VscDebugStackframeDot /> },
      { title: 'Cards', url: RouteEnum.Cards, icon: <VscDebugStackframeDot /> },
      { title: 'Modals', url: RouteEnum.Modals, icon: <VscDebugStackframeDot /> },
      { title: 'Pagination', url: RouteEnum.Pagination, icon: <VscDebugStackframeDot /> },
      { title: 'Tables', url: RouteEnum.Tables, icon: <VscDebugStackframeDot /> },
      { title: 'Tabs', url: RouteEnum.Tabs, icon: <VscDebugStackframeDot /> },
      { title: 'Tooltips', url: RouteEnum.Tooltips, icon: <VscDebugStackframeDot /> },
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
  {
    title: 'Posts',
    url: RouteEnum.Posts,
    icon: <VscBook className="text-xl" />,
  },
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
