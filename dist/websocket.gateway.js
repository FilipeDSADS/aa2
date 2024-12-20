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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let WebsocketGateway = class WebsocketGateway {
    handleConnection(socket) {
        console.log('Novo usuário conectado:', socket.id);
    }
    handleDisconnect(socket) {
        console.log('Usuário desconectado:', socket.id);
    }
    handleCardCreated(data) {
        this.server.emit('card-created', data);
    }
    handleCardUpdated(data) {
        this.server.emit('card-updated', data);
    }
    handleCardDeleted(data) {
        this.server.emit('card-deleted', data);
    }
    handleTarefaCreated(data) {
        this.server.emit('tarefa-created', data);
    }
    handleTarefaUpdated(data) {
        this.server.emit('tarefa-updated', data);
    }
    handleTarefaDeleted(data) {
        this.server.emit('tarefa-deleted', data);
    }
};
exports.WebsocketGateway = WebsocketGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], WebsocketGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('card-created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebsocketGateway.prototype, "handleCardCreated", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('card-updated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebsocketGateway.prototype, "handleCardUpdated", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('card-deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebsocketGateway.prototype, "handleCardDeleted", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('tarefa-created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebsocketGateway.prototype, "handleTarefaCreated", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('tarefa-updated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebsocketGateway.prototype, "handleTarefaUpdated", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('tarefa-deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebsocketGateway.prototype, "handleTarefaDeleted", null);
exports.WebsocketGateway = WebsocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true })
], WebsocketGateway);
//# sourceMappingURL=websocket.gateway.js.map