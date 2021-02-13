import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-row',
  styleUrl: 'planet-row.css',
  shadow: true,
})
export class PlanetRow {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
