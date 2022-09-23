import { OwnerEntity } from 'src/database/entities/owner.entity';
export declare class PetDTO {
    id: number;
    name_pet: string;
    raca: string;
    porte: string;
    especie: string;
    owner?: OwnerEntity;
    active: boolean;
    created_at?: Date;
    updated_at?: Date;
}
