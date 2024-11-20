import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from './tarefa.entity';
import { CriarTarefaDto } from './DTO/criar-tarefa.dto';
import { AtualizarTarefaDto } from './DTO/atualizar-tarefa.dto';
import { WebsocketGateway } from '../websocket.gateway'; // Importar o WebsocketGateway

@Injectable()
export class TarefaService {
  constructor(
    @InjectRepository(Tarefa)
    private tarefaRepository: Repository<Tarefa>,
    private readonly websocketGateway: WebsocketGateway, // Injetar o WebsocketGateway
  ) {}

  async create(criarTarefaDto: CriarTarefaDto): Promise<Tarefa> {
    const tarefa = this.tarefaRepository.create({
      ...criarTarefaDto,
      dataCriacao: new Date(),
    });

    const savedTarefa = await this.tarefaRepository.save(tarefa);

    // Emitir evento para todos os usuários conectados
    this.websocketGateway.handleTarefaDeleted(savedTarefa);

    return savedTarefa;
  }

  async update(id: number, atualizarTarefaDto: AtualizarTarefaDto): Promise<Tarefa> {
    await this.tarefaRepository.update(id, atualizarTarefaDto);
    
    const updatedTarefa = await this.findOne(id);

    // Emitir evento para todos os usuários conectados
    this.websocketGateway.handleTarefaDeleted(updatedTarefa);

    return updatedTarefa;
  }

  async remove(id: number): Promise<void> {
    const tarefa = await this.findOne(id);
    await this.tarefaRepository.delete(id);

    // Emitir evento para todos os usuários conectados
    this.websocketGateway.handleTarefaDeleted(tarefa);
  }

  findAll(): Promise<Tarefa[]> {
    return this.tarefaRepository.find({ relations: ['cartoes'] });
  }

  findOne(id: number): Promise<Tarefa> {
    return this.tarefaRepository.findOne({
      where: { id },
      relations: ['cartoes'],
    });
  }
}