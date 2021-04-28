import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-nav-card-content',
  styleUrl: 'planet-nav-card-content.css',
  shadow: true,
})
export class PlanetNavCardContent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
