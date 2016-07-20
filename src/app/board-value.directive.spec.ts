/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BoardValue } from './board-value.directive';

describe('BoardValue Directive', () => {
  it('should create an instance', () => {
    let directive = new BoardValue();
    expect(directive).toBeTruthy();
  });
});
