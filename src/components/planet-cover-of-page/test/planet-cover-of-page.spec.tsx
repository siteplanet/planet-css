import { newSpecPage } from '@stencil/core/testing';
import { PlanetCoverOfPage } from '../planet-cover-of-page';

describe('planet-cover-of-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetCoverOfPage],
      html: `<planet-cover-of-page></planet-cover-of-page>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-cover-of-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-cover-of-page>
    `);
  });
});
