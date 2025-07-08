export class ChipEntity { 
    id?: number;
    ICCD: string;
    created_at: Date;
    updated_at = new Date();
    
    static create(data: Partial<ChipEntity>) { 
        return Object.assign(new ChipEntity(), data);
    }
}