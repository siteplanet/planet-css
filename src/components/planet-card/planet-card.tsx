import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-card',
  styleUrl: 'planet-card.css',
  shadow: true,
})
export class PlanetCard {

  render() {
    return (
      <Host class="card">
        <slot></slot>
      </Host>
    );
  }

}
