export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Masters'
  },
  {
    name: 'Administrator',
    url: '/administrator',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Clients',
        url: '/clients/dashboard',
        icon: 'icon-puzzle'
      },
      {
        name: 'Items',
        url: '/items/dashboard',
        icon: 'icon-puzzle'
      },
    ]
  }
];
