import { newSpecPage } from '@stencil/core/testing';
import { PlanetBackdrop } from '../planet-backdrop';

describe('planet-backdrop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetBackdrop],
      html: `<planet-backdrop></planet-backdrop>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-backdrop>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-backdrop>
    `);
  });
});
