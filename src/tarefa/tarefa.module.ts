import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './tarefa.entity';
import { TarefaService } from './tarefa.service';
import { TarefaController } from './tarefa.controller';
import { WebsocketModule } from '../websocket.module'; // Import the WebsocketModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Tarefa]),
    WebsocketModule, // Add WebsocketModule here
  ],
  providers: [TarefaService],
  controllers: [TarefaController],
})
export class TarefaModule {}