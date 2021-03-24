import { newE2EPage } from '@stencil/core/testing';

describe('ameh-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ameh-btn></ameh-btn>');

    const element = await page.find('ameh-btn');
    expect(element).toHaveClass('hydrated');
  });
});
