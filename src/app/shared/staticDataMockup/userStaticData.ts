import {User} from "../models/user.model";
import {Injectable} from "@angular/core";

@Injectable()
export class UserStaticData {
    private data: User[];

    constructor() {
        this.data = new Array<User>(
            new User('Хамса Ниязи', 'password1', 'Инициатор Ф', '11111'),
            new User('Костаке Нигруцци', 'password1', 'Инициатор ГБ', '222'));
    }

    getdata(): User[] {
        return this.data;
    }

}