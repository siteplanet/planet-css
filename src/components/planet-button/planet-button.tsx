import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-button',
  styleUrl: 'planet-button.css',
  shadow: true,
})
export class PlanetButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
