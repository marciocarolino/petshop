import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PetEntity } from './pet.entity';

@Entity({ name: 'owner' })
export class OwnerEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'cpf' })
  cpf: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'phone_ddd' })
  phone_ddd: string;

  @Column({ name: 'city' })
  city: string;

  @Column({ name: 'state' })
  state: string;

  @Column({ name: 'active' })
  active: boolean;

  @OneToMany(() => PetEntity, (pet) => pet.owner)
  @JoinColumn({ name: 'id_owner' })
  pet: PetEntity;

  @Column({ type: 'timestamptz', name: 'created_at' })
  created_at: Date;

  @Column({ type: 'timestamptz', name: 'updated_at' })
  updated_at: Date;
}
