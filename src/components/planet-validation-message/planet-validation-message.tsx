import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-validation-message',
  styleUrl: 'planet-validation-message.css',
  shadow: true,
})
export class PlanetValidationMessage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
