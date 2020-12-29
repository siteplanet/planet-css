import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-footer-list',
  styleUrl: 'planet-footer-list.css',
  shadow: true,
})
export class PlanetFooterList {
  /*
    Title of the list
  */
  @Prop() titleOfList: string;

  render() {
    return (
      <Host>
        <h5 class="planet-footer-list__title">{this.titleOfList}</h5>
        <slot></slot>
      </Host>
    );
  }

}
