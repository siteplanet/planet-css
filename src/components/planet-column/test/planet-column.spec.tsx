import { newSpecPage } from '@stencil/core/testing';
import { PlanetColumn } from '../planet-column';

describe('planet-column', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetColumn],
      html: `<planet-column></planet-column>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-column>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-column>
    `);
  });
});
