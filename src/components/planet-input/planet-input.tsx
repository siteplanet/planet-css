import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-input',
  styleUrl: 'planet-input.css',
  shadow: true,
})
export class PlanetInput {
  @Prop() label: string;

  render() {
    return (
      <Host>
        <div class="planet-input__control">
          <div class="planet-input__label">
            {this.label}
          </div>
          <div class="planet-input__area">
            <input />
          </div>
        </div>
        <div class="planet-input__message">
          <slot name="message"></slot>
        </div>
      </Host>
    );
  }

}
