import { newSpecPage } from '@stencil/core/testing';
import { PlanetInputBox } from '../planet-input-box';

describe('planet-input-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetInputBox],
      html: `<planet-input-box></planet-input-box>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-input-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-input-box>
    `);
  });
});
