import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-crud',
  styleUrl: 'planet-crud.css',
  shadow: true,
})
export class PlanetCrud {
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
      <Host class="crud">
        <planet-row>
          <planet-column>
            <planet-title-of-page>
              Title
            </planet-title-of-page>
          </planet-column>
          <planet-column class="crud__actions">
            <planet-pagination></planet-pagination>
            <planet-button-group>
              <planet-button>New item</planet-button>
            </planet-button-group>
          </planet-column>
        </planet-row>
        <planet-grid>
          
        </planet-grid>
        <slot></slot>
      </Host>
    );
  }

}
