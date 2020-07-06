import { MaskcardPipe } from './maskcard.pipe';

fdescribe('MaskcardPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskcardPipe();
    expect(pipe).toBeTruthy();
  });

  it('should an number card return mask number', () => {
    const pipe = new MaskcardPipe();
    let cardnumber = '1234567887654321'
    let resultEnd = 'XXXX XXXX XXXX 4321'
    let response = pipe.transform(cardnumber)
    expect(response).toEqual(resultEnd);
  });

  it('should an null number card return null', () => {
    const pipe = new MaskcardPipe();
    let cardnumber = null
    let resultEnd = null
    let response = pipe.transform(cardnumber)
    expect(response).toEqual(resultEnd);
  });
});
