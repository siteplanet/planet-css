import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-page',
  styleUrl: 'planet-page.css',
  shadow: true,
})
export class PlanetPage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
