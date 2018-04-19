import {User} from '../models/user.model';
import {Role} from '../models/role.model';
import {Injectable} from "@angular/core";

@Injectable()
export class UserStaticData {
    private data: User[];

    constructor() {
        this.data = new Array<User>(
            new User('test', 'password1', {name: 'Инициатор Ф', user: null, $id: 'UUUUU1'}, 'QTQTY1111'),
            new User('test', 'password1', {name: 'Инициатор ГБ', user: null, $id: 'UUUUU2'}, '22222'));
    }

    getdata(): User[] {
        return this.data;
    }
}