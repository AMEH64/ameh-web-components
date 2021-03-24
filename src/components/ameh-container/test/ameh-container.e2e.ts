import { newE2EPage } from '@stencil/core/testing';

describe('ameh-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ameh-container></ameh-container>');

    const element = await page.find('ameh-container');
    expect(element).toHaveClass('hydrated');
  });
});
