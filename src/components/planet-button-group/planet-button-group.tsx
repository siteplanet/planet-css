import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-button-group',
  styleUrl: 'planet-button-group.css',
  shadow: true,
})
export class PlanetButtonGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
