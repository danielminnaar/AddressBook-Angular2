import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let contacts = [
      {id: 1, name: 'Mr. Daniel Minnaar', company: 'Reactive Labs', tags: ['dm1', 'dm2', 'dm3'] },
      {id: 2, name: 'The. Joshua Door', company: 'JD Group', tags: ['jd1', 'jd2', 'jd3'] },
      {id: 3, name: 'Pres. Donald Trump', company: 'Trump Enterprises', tags: ['dt1', 'dt2', 'dt3'] }
    ];
    return {contacts};
  }

}