import { Test, TestingModule } from '@nestjs/testing';
import { AtomController } from './atom.controller';

describe('Atom Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AtomController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AtomController = module.get<AtomController>(AtomController);
    expect(controller).toBeDefined();
  });
});
