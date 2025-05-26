import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import TableLayout from '../TableLayout.vue'

test("mount component", async () => {
  expect(TableLayout).toBeTruthy();
});