import { newSpecPage } from '@stencil/core/testing';
import { PlanetInput } from '../planet-input';

describe('planet-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetInput],
      html: `<planet-input></planet-input>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-input>
    `);
  });
});
