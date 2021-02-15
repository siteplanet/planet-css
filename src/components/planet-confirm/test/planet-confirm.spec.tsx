import { newSpecPage } from '@stencil/core/testing';
import { PlanetConfirm } from '../planet-confirm';

describe('planet-confirm', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetConfirm],
      html: `<planet-confirm></planet-confirm>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-confirm>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-confirm>
    `);
  });
});
