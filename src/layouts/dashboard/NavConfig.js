// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/sistema/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Mis Procesos',
    path: '/sistema/MisProcesos',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Admin - PAC',
    path: '/sistema/pac',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Administrador',
    path: '/sistema/administrador',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
