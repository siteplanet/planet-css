import { newSpecPage } from '@stencil/core/testing';
import { PlanetCardContent } from '../planet-card-content';

describe('planet-card-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetCardContent],
      html: `<planet-card-content></planet-card-content>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-card-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-card-content>
    `);
  });
});
