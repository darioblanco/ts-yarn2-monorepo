import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '@darioblanco/cool-service/src/app.controller';
import { AppService } from '@darioblanco/cool-service/src/app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Hello World from module Common Module!');
    });
  });
});
