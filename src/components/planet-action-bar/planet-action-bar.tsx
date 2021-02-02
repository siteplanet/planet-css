import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-action-bar',
  styleUrl: 'planet-action-bar.css',
  shadow: true,
})
export class PlanetActionBar {

  render() {
    return (
      <Host>
        <planet-wrapper>
          <div class="planet-action-bar__content">
            <slot name="content" />
          </div>
          <div class="planet-action-bar__actions">
            <slot name="actions" />
          </div>
        </planet-wrapper>
      </Host>
    );
  }

}
