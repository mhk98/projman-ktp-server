"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.RfidService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var rfid_entity_1 = require("./rfid.entity");
var RfidService = /** @class */ (function () {
    function RfidService(RfidtblRepository) {
        this.RfidtblRepository = RfidtblRepository;
    }
    RfidService.prototype.findAll = function () {
        return this.RfidtblRepository.find();
    };
    RfidService.prototype.findOne = function (User_ID) {
        return this.RfidtblRepository.findOneBy({ User_ID: User_ID });
    };
    RfidService.prototype.createusertbl = function (rfidtbl) {
        return this.RfidtblRepository.save(rfidtbl);
    };
    RfidService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(rfid_entity_1.rfidtbl))
    ], RfidService);
    return RfidService;
}());
exports.RfidService = RfidService;
