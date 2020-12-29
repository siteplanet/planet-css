import { Component, h } from '@stencil/core';

@Component({
  tag: 'planet-wrapper',
  styleUrl: 'wrapper.css',
  shadow: true,
})
export class PlanetWrapper {
  render() {
    return <slot></slot>;
  }
}
