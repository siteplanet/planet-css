import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-copyright-bar',
  styleUrl: 'copyright-bar.css',
  shadow: true,
})
export class PlanetCopyrightBar {

  render() {
    return (
      <Host>
        <planet-wrapper>
          <slot></slot>
        </planet-wrapper>
      </Host>
    );
  }

}
