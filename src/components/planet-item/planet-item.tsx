import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-item',
  styleUrl: 'planet-item.css',
  shadow: true,
})
export class PlanetItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
