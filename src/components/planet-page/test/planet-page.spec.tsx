import { newSpecPage } from '@stencil/core/testing';
import { PlanetPage } from '../planet-page';

describe('planet-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetPage],
      html: `<planet-page></planet-page>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-page>
    `);
  });
});
