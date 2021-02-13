import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-pagination',
  styleUrl: 'planet-pagination.css',
  shadow: true,
})
export class PlanetPagination {
  /*
  * Number of current page
  */
  @Prop() page: number;
  /*
  * Number of total pages
  */
  @Prop() pages: number;

  render() {
    return (
      <Host>
        <planet-button-group>
          <planet-button>&lt;</planet-button>
          <planet-button>4</planet-button>
          <planet-button>&gt;</planet-button>
        </planet-button-group>
        <slot></slot>
      </Host>
    );
  }

}
