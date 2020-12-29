import { newSpecPage } from '@stencil/core/testing';
import { PlanetFooterList } from '../planet-footer-list';

describe('planet-footer-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetFooterList],
      html: `<planet-footer-list></planet-footer-list>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-footer-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-footer-list>
    `);
  });
});
