import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-nav-card-header',
  styleUrl: 'planet-nav-card-header.css',
  shadow: true,
})
export class PlanetNavCardHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
