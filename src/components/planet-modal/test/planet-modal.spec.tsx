import { newSpecPage } from '@stencil/core/testing';
import { PlanetModal } from '../planet-modal';

describe('planet-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetModal],
      html: `<planet-modal></planet-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-modal>
    `);
  });
});
