import { newSpecPage } from '@stencil/core/testing';
import { PlanetFooterLink } from '../planet-footer-link';

describe('planet-footer-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetFooterLink],
      html: `<planet-footer-link></planet-footer-link>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-footer-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-footer-link>
    `);
  });
});
