/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const api_interfaces_1 = __webpack_require__("./libs/api-interfaces/src/index.ts");
const api_interfaces_2 = __webpack_require__("./libs/api-interfaces/src/index.ts");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
    getVersion() {
        return this.appService.getVersion(7);
    }
    getUserData() {
        return this.appService.getUserData(2);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)('hello'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", typeof (_a = typeof api_interfaces_1.Message !== "undefined" && api_interfaces_1.Message) === "function" ? _a : Object)
], AppController.prototype, "getData", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)('Angular'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", typeof (_b = typeof api_interfaces_2.Version !== "undefined" && api_interfaces_2.Version) === "function" ? _b : Object)
], AppController.prototype, "getVersion", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)('user'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", typeof (_c = typeof api_interfaces_1.UserData !== "undefined" && api_interfaces_1.UserData) === "function" ? _c : Object)
], AppController.prototype, "getUserData", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _d : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_controller_1 = __webpack_require__("./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
const sequelize_1 = __webpack_require__("@nestjs/sequelize");
const library_module_1 = __webpack_require__("./apps/api/src/app/library/library.module.ts");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'admin',
                database: 'library',
                autoLoadModels: true,
                synchronize: true
            }), library_module_1.LibraryModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!123' };
    }
    getVersion(n_version) {
        return { message: 'Your Agnular is on ', version: n_version };
    }
    getUserData(id) {
        switch (id) {
            case 1: {
                return { name: 'Jack', age: 19, email: 'jack@gmail.com', balance: 1801.50 };
                break;
            }
            case 2: {
                return { name: 'John', age: 29, email: 'john@gmail.com', balance: 22020.19 };
                break;
            }
            default: {
                return { name: '', age: 0, email: '', balance: 0 };
                break;
            }
        }
    }
};
AppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/app/library/controllers/library.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibraryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const library_service_1 = __webpack_require__("./apps/api/src/app/library/services/library.service.ts");
let LibraryController = class LibraryController {
    constructor(libraryService) {
        this.libraryService = libraryService;
    }
    /* @Post()
     async createUserk(@Res() response, @Body() user: User) {
         const newUser = await this.libraryService.createUser(user);
         return response.status(HttpStatus.CREATED).json({
             newUser
         })
     }*/
    fetchAll(response) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const users = yield this.libraryService.findAll();
            return response.status(common_1.HttpStatus.OK).json({
                users
            });
        });
    }
    findById(response, id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.libraryService.findOne(id);
            return response.status(common_1.HttpStatus.OK).json({
                user
            });
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__param)(0, (0, common_1.Res)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LibraryController.prototype, "fetchAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/:id'),
    (0, tslib_1.__param)(0, (0, common_1.Res)()),
    (0, tslib_1.__param)(1, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LibraryController.prototype, "findById", null);
LibraryController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('users'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof library_service_1.LibraryService !== "undefined" && library_service_1.LibraryService) === "function" ? _a : Object])
], LibraryController);
exports.LibraryController = LibraryController;


/***/ }),

/***/ "./apps/api/src/app/library/library.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibraryModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const sequelize_1 = __webpack_require__("@nestjs/sequelize");
const library_controller_1 = __webpack_require__("./apps/api/src/app/library/controllers/library.controller.ts");
const user_model_1 = __webpack_require__("./apps/api/src/app/library/models/user.model.ts");
const library_service_1 = __webpack_require__("./apps/api/src/app/library/services/library.service.ts");
let LibraryModule = class LibraryModule {
};
LibraryModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([user_model_1.User])],
        providers: [library_service_1.LibraryService],
        controllers: [library_controller_1.LibraryController]
    })
], LibraryModule);
exports.LibraryModule = LibraryModule;


/***/ }),

/***/ "./apps/api/src/app/library/models/user.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__("tslib");
const sequelize_typescript_1 = __webpack_require__("sequelize-typescript");
let User = class User extends sequelize_typescript_1.Model {
};
(0, tslib_1.__decorate)([
    (0, sequelize_typescript_1.Column)({ primaryKey: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    sequelize_typescript_1.Column,
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    sequelize_typescript_1.Column,
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "age", void 0);
(0, tslib_1.__decorate)([
    sequelize_typescript_1.Column,
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    sequelize_typescript_1.Column,
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "balance", void 0);
User = (0, tslib_1.__decorate)([
    sequelize_typescript_1.Table
], User);
exports.User = User;


/***/ }),

/***/ "./apps/api/src/app/library/services/library.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibraryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const sequelize_1 = __webpack_require__("@nestjs/sequelize");
const user_model_1 = __webpack_require__("./apps/api/src/app/library/models/user.model.ts");
let LibraryService = class LibraryService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    findAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userModel.findAll();
        });
    }
    findOne(id) {
        return this.userModel.findOne({
            where: {
                id,
            },
        });
    }
};
LibraryService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], LibraryService);
exports.LibraryService = LibraryService;


/***/ }),

/***/ "./libs/api-interfaces/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/api-interfaces/src/lib/api-interfaces.ts"), exports);


/***/ }),

/***/ "./libs/api-interfaces/src/lib/api-interfaces.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/sequelize":
/***/ ((module) => {

module.exports = require("@nestjs/sequelize");

/***/ }),

/***/ "sequelize-typescript":
/***/ ((module) => {

module.exports = require("sequelize-typescript");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map