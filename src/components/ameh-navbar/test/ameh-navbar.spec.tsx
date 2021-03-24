import { newSpecPage } from '@stencil/core/testing';
import { AmehNavbar } from '../ameh-navbar';

describe('ameh-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmehNavbar],
      html: `<ameh-navbar></ameh-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <ameh-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ameh-navbar>
    `);
  });
});
