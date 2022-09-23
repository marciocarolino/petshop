import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OwnerEntity } from './owner.entity';

@Entity({ name: 'pet' })
export class PetEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name_pet' })
  name_pet: string;

  @Column({ name: 'raca' })
  raca: string;

  @Column({ name: 'porte' }) //pequeno, medio, grande
  porte: string;

  @Column({ name: 'especie' })
  especie: string;

  @ManyToOne(() => OwnerEntity, (owner) => owner.pet)
  @JoinColumn({ name: 'id_owner' })
  owner: OwnerEntity;

  @Column({ name: 'active' })
  active: boolean;

  @Column({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @Column({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}
