import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user.model";
import {UserStaticData} from "../staticDataMockup/userStaticData";

@Injectable()
export class UserClassProxy {
    private users: User[];

    constructor(private usersData: UserStaticData) {
        this.users = usersData.getdata();
    }

    getUsers(): Observable<User[]> {
        return Observable.from([this.users]);
    }

}