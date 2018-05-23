import {User} from "../models/user.model";
import {Injectable} from "@angular/core";

@Injectable()
export class UserStaticData {
    private data: User[];

    constructor() {
        this.data = new Array<User>(
            new User('Мокап Статикович1', 'password1', 'Инициатор Ф', '11111', 'Статомассив1'),
            new User('Мокап Статикович2', 'password1', 'Инициатор ГБ', '222', 'Статомассив1'));
    }

    getdata(): User[] {
        return this.data;
    }

}