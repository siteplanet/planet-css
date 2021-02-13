import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-grid-header',
  styleUrl: 'planet-grid-header.css',
  shadow: true,
})
export class PlanetGridHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
