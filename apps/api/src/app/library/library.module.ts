import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { LibraryController } from "./controllers/library.controller";
import { User } from "./models/user.model";
import { LibraryService } from "./services/library.service";

@Module({
    imports:[SequelizeModule.forFeature([User])],
    providers: [LibraryService],
    controllers: [LibraryController]
})
export class LibraryModule {}