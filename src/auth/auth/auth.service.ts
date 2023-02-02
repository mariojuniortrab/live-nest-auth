import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const users: dbUser[] = [
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
  
  constructor(private jwtService: JwtService){}

  login(username, password) {
    const user = this.validateCredentials(username, password)

    const payload = {
      sub: user?.id,
      username: user?.username,
      role: user?.role
    }

    return this.jwtService.sign(payload)
  }

  validateCredentials(username: string, password:string): dbUser {
    const user = users.find( u => u.username === username)
    if(!user){
      return null
    }

    if(bcrypt.compareSync(password, user.password)){
      return user
    }

    return null
  }
}

export interface dbUser {
  id: number
  username: string
  password: string
  role: string
}
