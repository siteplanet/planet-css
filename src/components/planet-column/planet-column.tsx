import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-column',
  styleUrl: 'planet-column.css',
  shadow: true,
})
export class PlanetColumn {
  @Prop() xlarge: number;
  @Prop() large: number;
  @Prop() medium: number;
  @Prop() mediumLarge: number;
  @Prop() small: number;
  @Prop() xsmall: number;

  render() {
    return (
      <Host class={{
        'column': true,
        'column--xlarge-0-2': this.xlarge === 0.2,
        'column--xlarge-1': this.xlarge === 1,
        'column--xlarge-2': this.xlarge === 2,
        'column--xlarge-3': this.xlarge === 3,
        'column--xlarge-4': this.xlarge === 4,
        'column--xlarge-5': this.xlarge === 5,
        'column--xlarge-6': this.xlarge === 6,
        'column--xlarge-7': this.xlarge === 7,
        'column--xlarge-8': this.xlarge === 8,
        'column--xlarge-9': this.xlarge === 9,
        'column--xlarge-10': this.xlarge === 10,
        'column--xlarge-11': this.xlarge === 11,
        'column--xlarge-12': this.xlarge === 12,
        'column--large-0-2': this.large === 0.2,
        'column--large-1': this.large === 1,
        'column--large-2': this.large === 2,
        'column--large-3': this.large === 3,
        'column--large-4': this.large === 4,
        'column--large-5': this.large === 5,
        'column--large-6': this.large === 6,
        'column--large-7': this.large === 7,
        'column--large-8': this.large === 8,
        'column--large-9': this.large === 9,
        'column--large-10': this.large === 10,
        'column--large-11': this.large === 11,
        'column--large-12': this.large === 12,
        'column--medium-0-2': this.medium === 0.2,
        'column--medium-1': this.medium === 1,
        'column--medium-2': this.medium === 2,
        'column--medium-3': this.medium === 3,
        'column--medium-4': this.medium === 4,
        'column--medium-5': this.medium === 5,
        'column--medium-6': this.medium === 6,
        'column--medium-7': this.medium === 7,
        'column--medium-8': this.medium === 8,
        'column--medium-9': this.medium === 9,
        'column--medium-10': this.medium === 10,
        'column--medium-11': this.medium === 11,
        'column--medium-12': this.medium === 12,
        'column--medium-large-0-2': this.mediumLarge === 0.2,
        'column--medium-large-1': this.mediumLarge === 1,
        'column--medium-large-2': this.mediumLarge === 2,
        'column--medium-large-3': this.mediumLarge === 3,
        'column--medium-large-4': this.mediumLarge === 4,
        'column--medium-large-5': this.mediumLarge === 5,
        'column--medium-large-6': this.mediumLarge === 6,
        'column--medium-large-7': this.mediumLarge === 7,
        'column--medium-large-8': this.mediumLarge === 8,
        'column--medium-large-9': this.mediumLarge === 9,
        'column--medium-large-10': this.mediumLarge === 10,
        'column--medium-large-11': this.mediumLarge === 11,
        'column--medium-large-12': this.mediumLarge === 12,
        'column--small-0-2': this.small === 0.2,
        'column--small-1': this.small === 1,
        'column--small-2': this.small === 2,
        'column--small-3': this.small === 3,
        'column--small-4': this.small === 4,
        'column--small-5': this.small === 5,
        'column--small-6': this.small === 6,
        'column--small-7': this.small === 7,
        'column--small-8': this.small === 8,
        'column--xsmall-1': this.xsmall === 1,
        'column--xsmall-2': this.xsmall === 2,
        'column--xsmall-3': this.xsmall === 3,
        'column--xsmall-4': this.xsmall === 4,
      }}>
        <slot></slot>
      </Host>
    );
  }

}
