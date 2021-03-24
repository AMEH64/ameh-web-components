import { newSpecPage } from '@stencil/core/testing';
import { AmehIcon } from '../ameh-icon';

describe('ameh-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmehIcon],
      html: `<ameh-icon></ameh-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <ameh-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ameh-icon>
    `);
  });
});
