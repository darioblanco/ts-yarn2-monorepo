import { getModuleName } from '@darioblanco/common';

describe('mymodule', () => {
  test('get module name', () => {
    expect(getModuleName()).toEqual('Common Module');
  });
});
