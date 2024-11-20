"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tarefa_entity_1 = require("./tarefa.entity");
const websocket_gateway_1 = require("../websocket.gateway");
let TarefaService = class TarefaService {
    constructor(tarefaRepository, websocketGateway) {
        this.tarefaRepository = tarefaRepository;
        this.websocketGateway = websocketGateway;
    }
    async create(criarTarefaDto) {
        const tarefa = this.tarefaRepository.create({
            ...criarTarefaDto,
            dataCriacao: new Date(),
        });
        const savedTarefa = await this.tarefaRepository.save(tarefa);
        this.websocketGateway.handleTarefaDeleted(savedTarefa);
        return savedTarefa;
    }
    async update(id, atualizarTarefaDto) {
        await this.tarefaRepository.update(id, atualizarTarefaDto);
        const updatedTarefa = await this.findOne(id);
        this.websocketGateway.handleTarefaDeleted(updatedTarefa);
        return updatedTarefa;
    }
    async remove(id) {
        const tarefa = await this.findOne(id);
        await this.tarefaRepository.delete(id);
        this.websocketGateway.handleTarefaDeleted(tarefa);
    }
    findAll() {
        return this.tarefaRepository.find({ relations: ['cartoes'] });
    }
    findOne(id) {
        return this.tarefaRepository.findOne({
            where: { id },
            relations: ['cartoes'],
        });
    }
};
exports.TarefaService = TarefaService;
exports.TarefaService = TarefaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tarefa_entity_1.Tarefa)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        websocket_gateway_1.WebsocketGateway])
], TarefaService);
//# sourceMappingURL=tarefa.service.js.map