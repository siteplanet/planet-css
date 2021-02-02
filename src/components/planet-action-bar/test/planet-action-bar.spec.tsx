import { newSpecPage } from '@stencil/core/testing';
import { PlanetActionBar } from '../planet-action-bar';

describe('planet-action-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetActionBar],
      html: `<planet-action-bar></planet-action-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-action-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-action-bar>
    `);
  });
});
