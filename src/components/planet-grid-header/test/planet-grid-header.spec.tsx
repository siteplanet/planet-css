import { newSpecPage } from '@stencil/core/testing';
import { PlanetGridHeader } from '../planet-grid-header';

describe('planet-grid-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetGridHeader],
      html: `<planet-grid-header></planet-grid-header>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-grid-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-grid-header>
    `);
  });
});
