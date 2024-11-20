import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleConnection(socket: Socket): void;
    handleDisconnect(socket: Socket): void;
    handleCardCreated(data: any): void;
    handleCardUpdated(data: any): void;
    handleCardDeleted(data: any): void;
    handleTarefaCreated(data: any): void;
    handleTarefaUpdated(data: any): void;
    handleTarefaDeleted(data: any): void;
}
