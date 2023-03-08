import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';

@Resolver(() => Contact)
export class ContactsResolver {
  constructor(private readonly contactService: ContactsService) {}

  @Query(()=> [Contact], {name: 'contacts'})
  async getContacts() {
    return this.contactService.getContacts()
  }
}