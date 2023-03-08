import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Contact {
  @Field( { description: 'id of the contact' } )
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', nullable: false, type: 'varchar', length: 10 })
  @Field(() => String, { description: 'first name of the contact' })
  firstName: string;

  @Column({ name: 'last_name', nullable: false, type: 'varchar', length: 20 })
  @Field(() => String, { description: 'last name of the contact' })
  lastName: string;

  @Column({ nullable: true, type: 'varchar', length: 30 })
  @Field(() => String, { description: 'nickname of the contact' })
  nickname: string;

  @Column('text', {array: true})
  phones: String[];

  @Column({ nullable: true, type: 'varchar', length: 100 })
  @Field(() => String, { description: 'address of the contact' })
  address: string;

  @Column({ nullable: true, type: 'varchar' })
  @Field(() => String, { description: "the path of the contact's photo" })
  photo: string;
}
