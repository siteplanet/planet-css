import { newSpecPage } from '@stencil/core/testing';
import { PlanetRow } from '../planet-row';

describe('planet-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetRow],
      html: `<planet-row></planet-row>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-row>
    `);
  });
});
