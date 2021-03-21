import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-form-section',
  styleUrl: 'planet-form-section.css',
  shadow: true,
})
export class PlanetFormSection {
  @Prop() titleOfSection: string;

  render() {
    return (
      <Host>
        {this.titleOfSection ? (<div class="title-of-form-section">{this.titleOfSection}</div>) : null}
        <slot></slot>
      </Host>
    );
  }

}
