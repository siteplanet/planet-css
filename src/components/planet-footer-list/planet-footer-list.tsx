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
        <planet-title-of-group>{this.titleOfList}</planet-title-of-group>
        <slot></slot>
      </Host>
    );
  }

}
