import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-backdrop',
  styleUrl: 'planet-backdrop.css',
  shadow: true,
})
export class PlanetBackdrop {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
