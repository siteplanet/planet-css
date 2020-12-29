import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-footer-link',
  styleUrl: 'planet-footer-link.css',
  shadow: true,
})
export class PlanetFooterLink {
  /*
    Target of the link
  */
 @Prop() href: string;

  render() {
    return (
      <Host>
        <a href={this.href}>
          <slot></slot>
        </a>
      </Host>
    );
  }

}
