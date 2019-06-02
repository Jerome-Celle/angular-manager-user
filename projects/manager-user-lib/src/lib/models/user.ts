
export class User {
  id: number;
  url: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  isActive: boolean;
  isSuperuser: boolean;

  constructor(data: {[name: string]: any}) {
    for (const name in data) {
      if ( data.hasOwnProperty(name) ) {
        this[name] = data[name];
      }
    }
  }
}

