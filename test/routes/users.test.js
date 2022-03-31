const mockGet = jest.fn();

jest.mock('express', () => ({
  Router: () => ({
    get: mockGet,
  }),
}));

require('../../routes/users');

afterAll(() => {
  jest.resetModules();
});

describe('routing for index', () => {
  it('get root added to routing', () => {
    expect(mockGet).toBeCalledWith('/', expect.any(Function));
    expect(mockGet).toBeCalledTimes(1);
  });
});
