import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsResolver } from './contacts.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactsResolver, ContactsService],
})
export class ContactsModule {}
