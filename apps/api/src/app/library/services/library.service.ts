import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../models/user.model";

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    findOne(id: string): Promise<User> {
        return this.userModel.findOne({
            where: {
                id,
            },
        });
    }

   /* async createUser(user: User): Promise<User> {
        return this.userModel.create(user);
    }*/
}