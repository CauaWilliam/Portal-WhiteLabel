

export class WhitelabelEntity { 
    id?: number;
    nome: string;
    endereco: string;
    senha: string;
    created_at: Date;
    updated_at = new Date();
    
    static create(data: Partial<WhitelabelEntity>) { 
        return Object.assign(new WhitelabelEntity(), data);
    }
}