import { newSpecPage } from '@stencil/core/testing';
import { AmehBtn } from '../ameh-btn';

describe('ameh-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmehBtn],
      html: `<ameh-btn></ameh-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <ameh-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ameh-btn>
    `);
  });
});
