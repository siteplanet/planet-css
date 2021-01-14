import { newSpecPage } from '@stencil/core/testing';
import { PlanetCard } from '../planet-card';

describe('planet-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetCard],
      html: `<planet-card></planet-card>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-card>
    `);
  });
});
