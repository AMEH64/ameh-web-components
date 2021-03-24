import { newSpecPage } from '@stencil/core/testing';
import { AmehNavbarItem } from '../ameh-navbar-item';

describe('ameh-navbar-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmehNavbarItem],
      html: `<ameh-navbar-item></ameh-navbar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ameh-navbar-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ameh-navbar-item>
    `);
  });
});
