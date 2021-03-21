import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-grid-item',
  styleUrl: 'planet-grid-item.css',
  shadow: true,
})
export class PlanetGridItem {

  render() {
    return (
      <Host>
        <div class="planet-grid-item__value">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
