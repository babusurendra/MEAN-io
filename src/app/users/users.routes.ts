import {UsersListComponent} from './list/users-list.component';
export const routes = [
    {
        path: '', children: [
            { path: '', component: UsersListComponent }
        ]
    },
];