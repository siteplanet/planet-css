import { newSpecPage } from '@stencil/core/testing';
import { PlanetLabel } from '../planet-label';

describe('planet-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetLabel],
      html: `<planet-label></planet-label>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-label>
    `);
  });
});
