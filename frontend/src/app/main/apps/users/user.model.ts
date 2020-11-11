import { FuseUtils } from '@fuse/utils';

export class User
{
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    created_at: Date;

    /**
     * Constructor
     *
     * @param user
     */
    constructor(user)
    {
        {
            this.id = user._id || FuseUtils.generateGUID();
            this.name = user.name || '';
            this.password = user.password || '';
            this.created_at = user.created_at || null;
            this.email = user.email || '';
            this.phone = user.phone || '';
            this.address = user.address || '';
        }
    }
}
