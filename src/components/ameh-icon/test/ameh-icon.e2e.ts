import { newE2EPage } from '@stencil/core/testing';

describe('ameh-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ameh-icon></ameh-icon>');

    const element = await page.find('ameh-icon');
    expect(element).toHaveClass('hydrated');
  });
});
