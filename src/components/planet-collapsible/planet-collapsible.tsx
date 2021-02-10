import { Component, Host, h, State, Method } from '@stencil/core';

@Component({
  tag: 'planet-collapsible',
  styleUrl: 'planet-collapsible.css',
  shadow: true,
})
export class PlanetCollapsible {
  @State() toggled: boolean;

  @Method() async toggle() {
      this.toggled = !this.toggled;
  }
  
  render() {
    return (
      <Host class={{
        'planet-collapsible': true,
        'planet-collapsible--toggled': this.toggled,
      }}>
        <div class="planet-collapsible__header" onClick={this.toggle.bind(this)}>
          <div class="planet-collapsible__chevron">
            {this.toggled ? (<slot name="chevron-open" />) : (<slot name="chevron-closed" />)}
          </div>
          <div class="planet-collapsible__title">
            <slot name="title" />
          </div>
          <div class="planet-collapsible__actions">
            <slot name="actions" />
          </div>
        </div>
        {this.toggled ? (<div class="planet-collapsible__content" hidden={this.toggled}>
          <slot name="content" />
        </div>) : null}
      </Host>
    );
  }

}
