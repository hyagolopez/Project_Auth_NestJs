import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('E2E JWT Sample', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const modRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = modRef.createNestApplication();
    await app.init();
  });

  it('should get a JWT then successfully make a call', async () => {
    const loginReq = await request(app.getHttpServer())
      .post('/sign-up')
      .send({
        nome: 'string',
        email: 'sstrin2ge231122313232',
        senha: 'senha',
        telefones: [
          {
            numero: '123456789',
            ddd: '11',
          },
          {
            numero: '123456789',
            ddd: '11',
          },
        ],
      })
      .expect(201);
    const idUser = loginReq.body.usuario.id;
    const token = loginReq.body.usuario.token;
    return request(app.getHttpServer())
      .get(`/usuario/${idUser}`)
      .set('Authorization', 'Bearer ' + token)
      .expect(200);
    //.expect();
  });

  afterAll(async () => {
    await app.close();
  });
});
