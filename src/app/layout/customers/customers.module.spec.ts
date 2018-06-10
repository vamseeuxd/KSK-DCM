import { CustomersModule } from './customers.module';

describe('BlankPageModule', () => {
    let blankPageModule: CustomersModule;

    beforeEach(() => {
        blankPageModule = new CustomersModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
