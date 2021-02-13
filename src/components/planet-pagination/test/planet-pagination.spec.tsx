import { newSpecPage } from '@stencil/core/testing';
import { PlanetPagination } from '../planet-pagination';

describe('planet-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetPagination],
      html: `<planet-pagination></planet-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-pagination>
    `);
  });
});
