import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-confirm',
  styleUrl: 'planet-confirm.css',
  shadow: true,
})
export class PlanetConfirm {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
