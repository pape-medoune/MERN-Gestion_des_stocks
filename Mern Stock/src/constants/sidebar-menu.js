import DashboardIcon from "../assets/icons/dashboard.svg";
import ShippingIcon from "../assets/icons/shipping.svg";
import ProductIcon from "../assets/icons/product.svg";

const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: "/",
    title: "Team",
  },
  {
    id: 2,
    icon: ShippingIcon,
    path: "/orders",
    title: "Gestion des produits",
  },
  {
    id: 3,
    icon: ProductIcon,
    path: "/home",
    title: "Acceder au site web",
  },
];

export default sidebar_menu;
