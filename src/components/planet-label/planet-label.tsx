import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-label',
  styleUrl: 'planet-label.css',
  shadow: true,
})
export class PlanetLabel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
