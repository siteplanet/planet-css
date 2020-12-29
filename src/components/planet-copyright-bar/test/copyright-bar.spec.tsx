import { newSpecPage } from '@stencil/core/testing';
import { CopyrightBar } from '../copyright-bar';

describe('copyright-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CopyrightBar],
      html: `<planet-copyright-bar></planet-copyright-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-copyright-bar>
        <mock:shadow-root>
          <planet-wrapper>
            <slot></slot>
          </planet-wrapper>
        </mock:shadow-root>
      </planet-copyright-bar>
    `);
  });

  it('renders with content', async () => {
    const page = await newSpecPage({
      components: [CopyrightBar],
      html: `<planet-copyright-bar>Content</planet-copyright-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-copyright-bar>
        <mock:shadow-root>
          <planet-wrapper>
            <slot></slot>
          </planet-wrapper>
        </mock:shadow-root>
        Content
      </planet-copyright-bar>
    `);
  });
});
