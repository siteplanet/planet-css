import { newSpecPage } from '@stencil/core/testing';
import { PlanetTitleOfPage } from '../planet-title-of-page';

describe('planet-title-of-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetTitleOfPage],
      html: `<planet-title-of-page></planet-title-of-page>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-title-of-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-title-of-page>
    `);
  });
});
