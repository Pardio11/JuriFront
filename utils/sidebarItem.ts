import {
  UsersGroupIcon,
  UserPlusIcon,
  ApertureIcon,
  PointIcon,
  GavelIcon
} from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: "Home" },
  {
    title: "Home",
    icon: ApertureIcon,
    chip: "New",
    chipColor: "surface",
    chipBgColor: "secondary",
    to: "/",
  },
  {
    title: "Crear Usuario",
    icon: UserPlusIcon,
    to: "/crearcuenta",
  },
  {
    title: "Clientes",
    icon: UsersGroupIcon,
    to: "/clientes",
  },
  {
    title: "Casos",
    icon: GavelIcon,
    to: "#",
    children: [
      {
        title: "Listado De Casos",
        icon: PointIcon,
        to: "/casos",
      },
      {
        title: "Agregar Caso",
        icon: PointIcon,
        to: "/casos/agregarcaso",
        
      },
    ],
  },
  
  
];

export default sidebarItem;
