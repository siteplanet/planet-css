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
  @Prop() title: string;

  render() {
    return (
      <Host>
        <planet-title-of-group>{this.title}</planet-title-of-group>
        <slot></slot>
      </Host>
    );
  }

}
