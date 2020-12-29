import { newSpecPage } from '@stencil/core/testing';
import { PlanetTitleOfGroup } from '../planet-title-of-group';

describe('planet-title-of-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetTitleOfGroup],
      html: `<planet-title-of-group></planet-title-of-group>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-title-of-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-title-of-group>
    `);
  });
});
