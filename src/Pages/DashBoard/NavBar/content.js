
import home from '../../../assets/svg/account/home-1.svg';
import apps from '../../../assets/svg/account/apps.svg';
import edit from '../../../assets/svg/account/edit.svg';
import locked from '../../../assets/svg/account/locked.svg';
import notifications from '../../../assets/svg/account/notifications.svg';
import paymenthistory from '../../../assets/svg/account/payment-history.svg';
import redeem from '../../../assets/svg/account/redeem.svg';
import refresh from '../../../assets/svg/account/refresh.svg';


export const sideMenu =  [
    {
        title : 'Account overview',
        icon : home,
        path : '/account'
    },
    {
        title : 'Edit Profile',
        icon : edit,
        path : '/account/editProfile'
    },
    {
        title : 'Change password',
        icon : locked,
        path : '/account/changePassword'
    },
    {
        title : 'Notification settings',
        icon : notifications,
        path : '/account/notification'
    },
    {
        title : 'Privacy settings',
        icon : locked,
        path : '/account/privacySettings'
    },
    {
        title : 'Recover playlists',
        icon : refresh,
        path : '/account/recoverPlaylists'
    },
    {
        title : 'Receipts',
        icon : paymenthistory,
        path : '/account/receipts'
    },
    {
        title : 'Apps',
        icon : apps,
        path : '/account/apps'
    },
    {
        title : 'Redeem',
        icon : redeem,
        path : '/account/redeem'
    },

    
]