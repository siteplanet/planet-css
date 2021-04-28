import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-card-actions',
  styleUrl: 'planet-card-actions.css',
  shadow: true,
})
export class PlanetCardActions {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
