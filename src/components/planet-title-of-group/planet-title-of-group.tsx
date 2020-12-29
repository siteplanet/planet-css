import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-title-of-group',
  styleUrl: 'planet-title-of-group.css',
  shadow: true,
})
export class PlanetTitleOfGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
