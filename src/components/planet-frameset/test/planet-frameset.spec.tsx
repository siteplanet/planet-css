import { newSpecPage } from '@stencil/core/testing';
import { PlanetFrameset } from '../planet-frameset';

describe('planet-frameset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetFrameset],
      html: `<planet-frameset></planet-frameset>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-frameset>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-frameset>
    `);
  });
});
