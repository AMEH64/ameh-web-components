import { newSpecPage } from '@stencil/core/testing';
import { AmehContainer } from '../ameh-container';

describe('ameh-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmehContainer],
      html: `<ameh-container></ameh-container>`,
    });
    expect(page.root).toEqualHtml(`
      <ameh-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ameh-container>
    `);
  });
});
