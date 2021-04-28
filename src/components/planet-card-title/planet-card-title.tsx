import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-card-title',
  styleUrl: 'planet-card-title.css',
  shadow: true,
})
export class PlanetCardTitle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
