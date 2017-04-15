'use strict';

const ast = require('../lib/compile/ast');
const assert = require('power-assert');

describe('lib#compile#ast', () => {
  it('scanIndex should correct', () => {
    const str = 'abc{{ test }} \n aaa{% if test %}{{ abc }}{% endif %}';
    const root = ast(str).root;
    assert(root[1]._index === str.indexOf('{{'));
    assert(root[3]._index === str.indexOf('{%'));
    assert(root[3].children[0]._index === str.indexOf('{{ abc }}'));
  });
});
