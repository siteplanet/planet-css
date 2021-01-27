import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-footer',
  styleUrl: 'planet-footer.css',
  shadow: true,
})
export class PlanetFooter {

  render() {
    return (
      <Host>
        <planet-wrapper>
          <div class="planet-footer__content">
            <slot></slot>
          </div>
        </planet-wrapper>
      </Host>
    );
  }

}
