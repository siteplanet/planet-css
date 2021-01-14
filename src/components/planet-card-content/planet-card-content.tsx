import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-card-content',
  styleUrl: 'planet-card-content.css',
  shadow: true,
})
export class PlanetCardContent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
