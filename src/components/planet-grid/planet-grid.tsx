import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-grid',
  styleUrl: 'planet-grid.css',
  shadow: true,
})
export class PlanetGrid {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
