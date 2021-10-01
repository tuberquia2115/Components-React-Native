import { MenuItem } from "../interfaces/appInterfaces";


export const menuItems: MenuItem[] = [
    {
        name: 'Animated 101',
        icon: 'cube-outline',
        component: 'Animated101Screen'
    },
    {
        name: 'Animated 102',
        icon: 'albums-outline',
        component: 'Animated102Screen'
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScren'
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },
    {
        name: 'Inputs',
        icon: 'document-text-outline',
        component: 'TextInputScreen'
    },
    {
        name: 'PullToRefresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen'
    },
    {
        name: 'Sectioc List',
        icon: 'list-outline',
        component: 'SectionListScreen'
    },
    {
        name: 'Modal',
        icon: 'copy-outline',
        component: 'ModalScreen'
    },
    {
        name: 'InfiniteScroll',
        icon: 'download-outline',
        component: 'InfiniteScrollScreen'
    },
    {
        name: 'Slides',
        icon: 'flower-outline',
        component: 'SlidesScreen'
    },
    {
        name: 'Themes',
        icon: 'flask-outline',
        component: 'ChangeThemeScreen'
    },
]