import { IsNotEmpty, IsNumberString, MinLength, MaxLength } from '@nestjs/class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PhoneNumberDto {
    @Field()
    @IsNotEmpty()
    @IsNumberString()
    @MinLength(9)
    @MaxLength(10)
    phone: string
}