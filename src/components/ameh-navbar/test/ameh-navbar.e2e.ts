import { newE2EPage } from '@stencil/core/testing';

describe('ameh-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ameh-navbar></ameh-navbar>');

    const element = await page.find('ameh-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
