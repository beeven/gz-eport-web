import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GzeportAppComponent } from '../app/gzeport.component';

beforeEachProviders(() => [GzeportAppComponent]);

describe('App: Gzeport', () => {
  it('should create the app',
      inject([GzeportAppComponent], (app: GzeportAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'gzeport works!\'',
      inject([GzeportAppComponent], (app: GzeportAppComponent) => {
    expect(app.title).toEqual('gzeport works!');
  }));
});
