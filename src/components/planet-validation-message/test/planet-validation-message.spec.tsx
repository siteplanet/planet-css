import { newSpecPage } from '@stencil/core/testing';
import { PlanetValidationMessage } from '../planet-validation-message';

describe('planet-validation-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetValidationMessage],
      html: `<planet-validation-message></planet-validation-message>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-validation-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-validation-message>
    `);
  });
});
