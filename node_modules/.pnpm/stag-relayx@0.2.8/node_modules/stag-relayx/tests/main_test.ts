
import { wrapRelayx } from '../src'

const relayone = {}

const stag = wrapRelayx(relayone)

import { expect } from 'chai'

import {describe, test} from '@jest/globals';

describe('sum module', () => {

  test('adds 1 + 2 to equal 3', () => {

    expect(stag.onchain.findOrCreate).to.be.a('function')
    expect(stag.onchain.create).to.be.a('function')
    expect(stag.onchain.findOne).to.be.a('function')
    expect(stag.onchain.findAll).to.be.a('function')

    expect(stag.pay.bip270).to.be.a('function')

    expect(stag.boost.buy).to.be.a('function')
  });
});