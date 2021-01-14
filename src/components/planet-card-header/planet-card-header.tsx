import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-card-header',
  styleUrl: 'planet-card-header.css',
  shadow: true,
})
export class PlanetCardHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
