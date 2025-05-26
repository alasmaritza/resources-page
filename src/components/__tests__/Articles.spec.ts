import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import Articles from '../Articles.vue'

test("mount component", async () => {
  expect(Articles).toBeTruthy();
});