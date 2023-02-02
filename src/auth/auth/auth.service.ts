import { Injectable } from '@nestjs/common';

const users = [
  {
    id: 1,
    username: 'user1@user.com',
    password: '$2b$10$lsbMgu6HUM1GFFqcowzjq.s/iiC/jS/z3cElayRgb0oI.5OWGRveq', //123456
    role: 'admin',
  },
  {
    id: 2,
    username: 'user2@user.com',
    password: '$2b$10$lsbMgu6HUM1GFFqcowzjq.s/iiC/jS/z3cElayRgb0oI.5OWGRveq',
    role: 'user',
  },
  {
    id: 3,
    username: 'user3@user.com',
    password: '$2b$10$lsbMgu6HUM1GFFqcowzjq.s/iiC/jS/z3cElayRgb0oI.5OWGRveq',
    role: 'user',
  },
];

@Injectable()
export class AuthService {
  login(username, password) {
    console.log(username, password)
  }
}
