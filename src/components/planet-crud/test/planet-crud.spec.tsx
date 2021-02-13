import { newSpecPage } from '@stencil/core/testing';
import { PlanetCrud } from '../planet-crud';

describe('planet-crud', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetCrud],
      html: `<planet-crud></planet-crud>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-crud>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-crud>
    `);
  });
});
