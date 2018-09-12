import { FormsModule, BromoFormsModule } from './forms.module';

describe('FormsModule', () => {
  let formsModule: BromoFormsModule;

  beforeEach(() => {
    formsModule = new BromoFormsModule();
  });

  it('should create an instance', () => {
    expect(formsModule).toBeTruthy();
  });
});
