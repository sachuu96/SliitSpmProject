import { AllocationModule } from './allocation.module';

describe('AllocationModule', () => {
    let formModule: AllocationModule;

    beforeEach(() => {
        formModule = new AllocationModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
