import {User} from '../models/user.model';
import {Role} from '../models/role.model';
import {Injectable} from '@angular/core';

@Injectable()
export class RoleStaticData {
    private data: Role[];

    constructor() {
        this.data = new Array<Role>(
        new Role('Инициатор Ф', [new User('ФИлипп', 'password1', null, '11111'),
            new User('Луи', 'password1', null, '2222')], '1001'),
        new Role('Распорядитель Ф', [new User('Василий', 'password1', null, '222'),
            new User('Явдоха', 'password1', null, '2222')], '1002')
    );
}
    getdata(): Role[] {
        return this.data;
    }
}