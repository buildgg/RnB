import {User} from "../models/user.model";
import {Injectable} from "@angular/core";

@Injectable()
export class UserStaticData {
    private data: User[];

    constructor() {
        this.data = new Array<User>(
            new User('test', 'password1', {name: 'Инициатор Ф', users: null, $id: 'UUUUU1'}, '11111'),
            new User('test', 'password1', {name: 'Инициатор ГБ', users: null, $id: 'UUUUU2'}, '222'));
    }

    getdata(): User[] {
        return this.data;
    }

}