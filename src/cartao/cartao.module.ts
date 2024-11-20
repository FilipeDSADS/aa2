import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cartao } from './cartao.entity';
import { CartaoService } from './cartao.service';
import { CartaoController } from './cartao.controller';
import { Tarefa } from '../tarefa/tarefa.entity';
import { WebsocketModule } from '../websocket.module'; // Importar o WebsocketModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Cartao, Tarefa]),
    WebsocketModule, // Adicionar o WebsocketModule aqui
  ],
  providers: [CartaoService],
  controllers: [CartaoController],
})
export class CartaoModule {}