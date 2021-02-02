import { newSpecPage } from '@stencil/core/testing';
import { PlanetButton } from '../planet-button';

describe('planet-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetButton],
      html: `<planet-button></planet-button>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-button>
    `);
  });
});
