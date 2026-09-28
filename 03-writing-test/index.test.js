import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Fungsi sum harus menjumlahkan dua angka dengan benar', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5);
});