import { newSpecPage } from '@stencil/core/testing';
import { PlanetTile } from '../planet-tile';

describe('planet-tile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetTile],
      html: `<planet-tile></planet-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-tile>
    `);
  });
});
