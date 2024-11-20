import { Repository } from 'typeorm';
import { Tarefa } from './tarefa.entity';
import { CriarTarefaDto } from './DTO/criar-tarefa.dto';
import { AtualizarTarefaDto } from './DTO/atualizar-tarefa.dto';
import { WebsocketGateway } from '../websocket.gateway';
export declare class TarefaService {
    private tarefaRepository;
    private readonly websocketGateway;
    constructor(tarefaRepository: Repository<Tarefa>, websocketGateway: WebsocketGateway);
    create(criarTarefaDto: CriarTarefaDto): Promise<Tarefa>;
    update(id: number, atualizarTarefaDto: AtualizarTarefaDto): Promise<Tarefa>;
    remove(id: number): Promise<void>;
    findAll(): Promise<Tarefa[]>;
    findOne(id: number): Promise<Tarefa>;
}
