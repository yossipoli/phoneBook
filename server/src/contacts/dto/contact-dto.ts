import { PhoneNumberDto } from './phoneNumber-dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, MaxLength } from '@nestjs/class-validator';

@InputType()
export class ContactDto {
  @Field()
  @IsNotEmpty()
  @MaxLength(10)
  firstName: string;

  @Field()
  @IsNotEmpty()
  @MaxLength(20)
  lastName: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(30)
  nickname?: string;

  @Field()
  @IsNotEmpty()
  phones: PhoneNumberDto[];

  @Field()
  @IsNotEmpty()
  @MaxLength(100)
  address: string;

  @Field()
  @IsOptional()
  photo?: string;
}