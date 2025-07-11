export class PosEntity{
    id?: number;
    numero_serie: string;
    whitelabel_id: number;
    created_at: Date;
    updated_at = new Date();

    static create(data: Partial<PosEntity>) { 
        return Object.assign(new PosEntity(), data);
    }
}