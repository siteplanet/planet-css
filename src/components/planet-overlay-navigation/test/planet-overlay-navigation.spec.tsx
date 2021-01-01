import { newSpecPage } from '@stencil/core/testing';
import { PlanetOverlayNavigation } from '../planet-overlay-navigation';

describe('planet-overlay-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetOverlayNavigation],
      html: `<planet-overlay-navigation></planet-overlay-navigation>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-overlay-navigation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-overlay-navigation>
    `);
  });
});
