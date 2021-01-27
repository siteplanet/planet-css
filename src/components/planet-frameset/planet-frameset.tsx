import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-frameset',
  styleUrl: 'planet-frameset.css',
  shadow: true,
})
export class PlanetFrameset {

  render() {
    return (
      <Host>
        <div class="planet-frameset__main">
          <slot name="main" />
        </div>
        <div class="planet-frameset__nav">
          <slot name="nav" />
        </div>
      </Host>
    );
  }

}
