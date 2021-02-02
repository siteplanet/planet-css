import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planet-collapsible',
  styleUrl: 'planet-collapsible.css',
  shadow: true,
})
export class PlanetCollapsible {

  render() {
    return (
      <Host class="planet-collapsible">
        <div class="planet-collapsible__header">
          <div class="planet-collapsible__title">
            <slot name="title" />
          </div>
          <div class="planet-collapsible__actions">
            <slot name="actions" />
          </div>
        </div>
        <div class="planet-collapsible__content">
          <slot name="content" />
        </div>
      </Host>
    );
  }

}
