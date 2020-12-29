import { newSpecPage } from '@stencil/core/testing';
import { PlanetFooter } from '../planet-footer';

describe('planet-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetFooter],
      html: `<planet-footer></planet-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-footer>
    `);
  });
});
