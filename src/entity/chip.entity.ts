export class ChipEntity { 
    id?: number;
    iccd!: string;
    whitelabel_id: number;
    created_at!: Date;
    updated_at = new Date();
    
    static create(data: Partial<ChipEntity>) { 
        return Object.assign(new ChipEntity(), data);
    }
}