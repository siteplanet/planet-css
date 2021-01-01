import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-overlay-navigation',
  styleUrl: 'planet-overlay-navigation.css',
  shadow: true,
})
export class PlanetOverlayNavigation {
  @Prop() open: boolean;

  doClose() {
    this.open = false;
  }

  render() {
    return (
      <Host
        class={{
          'open': this.open
        }}>
        <a href="javascript:void(0)" class="closebtn" onClick={() => this.doClose()}>&times;</a>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
