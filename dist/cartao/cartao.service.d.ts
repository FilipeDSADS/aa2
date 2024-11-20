import { Repository } from 'typeorm';
import { Cartao } from './cartao.entity';
import { CriarCartaoDto } from './DTO/criar-cartao.dto';
import { AtualizarCartaoDto } from './DTO/atualizar-cartao.dto';
import { Tarefa } from '../tarefa/tarefa.entity';
import { WebsocketGateway } from '../websocket.gateway';
export declare class CartaoService {
    private cartaoRepository;
    private tarefaRepository;
    private readonly websocketGateway;
    constructor(cartaoRepository: Repository<Cartao>, tarefaRepository: Repository<Tarefa>, websocketGateway: WebsocketGateway);
    create(criarCartaoDto: CriarCartaoDto): Promise<Cartao>;
    update(id: number, atualizarCartaoDto: AtualizarCartaoDto): Promise<Cartao>;
    remove(id: number): Promise<void>;
    atualizarStatus(id: number, status: 'A Fazer' | 'Em Progresso' | 'Concluído'): Promise<Cartao>;
    findAll(): Promise<Cartao[]>;
    findOne(id: number): Promise<Cartao>;
}
