import { Component, h } from '@stencil/core';

@Component({
  tag: 'planet-title-of-page',
  styleUrl: 'planet-title-of-page.css',
  shadow: true,
})
export class PlanetTitleOfPage {

  render() {
    return (
      <h1 class="title-of-page"><slot></slot></h1>
    );
  }

}
