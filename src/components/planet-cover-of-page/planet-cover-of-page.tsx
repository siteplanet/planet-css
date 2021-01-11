import { Component, Element, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-cover-of-page',
  styleUrl: 'planet-cover-of-page.css',
  shadow: true,
})
export class PlanetCoverOfPage {
  @Element() element: HTMLElement;

  /*
    Image URL
  */
  @Prop() imageUrl: string;

  componentDidLoad(){
    this.element.style.backgroundImage = `url(${this.imageUrl})`;
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
