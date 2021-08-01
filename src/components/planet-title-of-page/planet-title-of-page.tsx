import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-title-of-page',
  styleUrl: 'planet-title-of-page.css',
  shadow: true,
})
export class PlanetTitleOfPage {
  @Prop() secondary?: boolean;
  @Prop() tertiary?: boolean;

  render() {
    const { secondary, tertiary } = this;
    if (tertiary) {
      return (
        <h3 class="title-of-page title-of-page--tertiary"><slot></slot></h3>
      );
    }
    if (secondary) {
      return (
        <h2 class="title-of-page title-of-page--secondary"><slot></slot></h2>
      );
    }
    return (
      <h1 class="title-of-page"><slot></slot></h1>
    );
  }

}
