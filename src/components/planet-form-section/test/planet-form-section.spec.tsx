import { newSpecPage } from '@stencil/core/testing';
import { PlanetFormSection } from '../planet-form-section';

describe('planet-form-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetFormSection],
      html: `<planet-form-section></planet-form-section>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-form-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-form-section>
    `);
  });
});
