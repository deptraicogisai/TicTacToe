/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TictactoeService } from './tictactoe.service';

describe('Tictactoe Service', () => {
  beforeEachProviders(() => [TictactoeService]);

  it('should ...',
      inject([TictactoeService], (service: TictactoeService) => {
    expect(service).toBeTruthy();
  }));
});
