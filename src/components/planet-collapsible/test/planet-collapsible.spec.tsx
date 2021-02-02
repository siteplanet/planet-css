import { newSpecPage } from '@stencil/core/testing';
import { PlanetCollapsible } from '../planet-collapsible';

describe('planet-collapsible', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetCollapsible],
      html: `<planet-collapsible></planet-collapsible>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-collapsible>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-collapsible>
    `);
  });
});
