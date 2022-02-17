import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { User } from "../models/user.model";
import { LibraryService } from "../services/library.service";

@Controller('users')
export class LibraryController {
    constructor(private readonly libraryService: LibraryService){}

   /* @Post()
    async createUserk(@Res() response, @Body() user: User) {
        const newUser = await this.libraryService.createUser(user);
        return response.status(HttpStatus.CREATED).json({
            newUser
        })
    }*/

    @Get()
    async fetchAll(@Res() response) {
        const users = await this.libraryService.findAll();
        return response.status(HttpStatus.OK).json({
            users
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const user = await this.libraryService.findOne(id);
        return response.status(HttpStatus.OK).json({
            user
        })
    }
}