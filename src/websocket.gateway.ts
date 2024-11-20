// src/websocket.gateway.ts
import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({ cors: true })
  export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
  
    handleConnection(socket: Socket) {
      console.log('Novo usuário conectado:', socket.id);
    }
  
    handleDisconnect(socket: Socket) {
      console.log('Usuário desconectado:', socket.id);
    }
  
    @SubscribeMessage('card-created')
    handleCardCreated(data: any) {
      this.server.emit('card-created', data);
    }
  
    @SubscribeMessage('card-updated')
    handleCardUpdated(data: any) {
      this.server.emit('card-updated', data);
    }
  
    @SubscribeMessage('card-deleted')
    handleCardDeleted(data: any) {
      this.server.emit('card-deleted', data);
    }
  
    @SubscribeMessage('tarefa-created')
    handleTarefaCreated(data: any) {
      this.server.emit('tarefa-created', data);
    }
  
    @SubscribeMessage('tarefa-updated')
    handleTarefaUpdated(data: any) {
      this.server.emit('tarefa-updated', data);
    }
  
    @SubscribeMessage('tarefa-deleted')
    handleTarefaDeleted(data: any) {
      this.server.emit('tarefa-deleted', data);
    }
  }