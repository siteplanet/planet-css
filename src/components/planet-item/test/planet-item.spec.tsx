import { newSpecPage } from '@stencil/core/testing';
import { PlanetItem } from '../planet-item';

describe('planet-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetItem],
      html: `<planet-item></planet-item>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-item>
    `);
  });
});
