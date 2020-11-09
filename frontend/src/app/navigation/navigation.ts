import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Aplicaciones',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'contacts',
                title    : 'Usuarios',
                translate: 'NAV.CONTACTS',
                type     : 'item',
                icon     : 'account_box',
                url      : '/apps/users'
            }
        ]
    },
];
