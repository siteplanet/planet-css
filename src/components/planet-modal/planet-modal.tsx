import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-modal',
  styleUrl: 'planet-modal.css',
  shadow: true,
})
export class PlanetModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
