import { newE2EPage } from '@stencil/core/testing';

describe('ameh-navbar-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ameh-navbar-item></ameh-navbar-item>');

    const element = await page.find('ameh-navbar-item');
    expect(element).toHaveClass('hydrated');
  });
});
