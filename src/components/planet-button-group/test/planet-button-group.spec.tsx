import { newSpecPage } from '@stencil/core/testing';
import { PlanetButtonGroup } from '../planet-button-group';

describe('planet-button-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetButtonGroup],
      html: `<planet-button-group></planet-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-button-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-button-group>
    `);
  });
});
