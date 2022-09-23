import { PetEntity } from './pet.entity';
export declare class OwnerEntity {
    id: number;
    name: string;
    cpf: string;
    phone: string;
    phone_ddd: string;
    city: string;
    state: string;
    active: boolean;
    pet: PetEntity;
    created_at: Date;
    updated_at: Date;
}
