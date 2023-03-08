import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { gql } from 'apollo-server-express';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
// import { ContactInput } from './contact.input';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
  ) {}

  //   private contacts: Contact[] = []

  async getContacts(): Promise<Contact[]> {
    return this.contactsRepository.find();
  }
}
