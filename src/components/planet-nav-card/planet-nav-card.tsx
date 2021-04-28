import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-nav-card',
  styleUrl: 'planet-nav-card.css',
  shadow: true,
})
export class PlanetNavCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
