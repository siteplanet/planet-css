import { Component, Event, EventEmitter, Host, h, Prop } from '@stencil/core';
import { PlanetValueInterface } from '../..';
import { Validator } from '../../validators/validator';

@Component({
  tag: 'planet-input-box',
  styleUrl: 'planet-input-box.css',
  shadow: true,
})
export class PlanetInputBox {
  @Prop({ mutable: true }) focused: boolean;
  @Prop() label: string;
  @Prop() showHelp = false;
  @Prop() showSearch = false;
  @Prop() validators: (() => Validator<PlanetValueInterface<any>>)[] = [];
  @Prop({ mutable: true }) value: PlanetValueInterface<any>;

  @Event() pClear: EventEmitter<void>;
  @Event() pFocus: EventEmitter<void>;
  @Event() pHelp: EventEmitter<void>;
  @Event() pSearch: EventEmitter<void>;

  handleClear() {
    this.pClear.emit();
  }

  handleFocus() {
    this.pFocus.emit();
  }
  
  handleHelp(event) {
    event.stopPropagation();
    this.pHelp.emit();
  }

  handleSearch(event) {
    event.stopPropagation();
    this.pSearch.emit();
  }

  render() {
    const { focused, label, showHelp, showSearch, validators, value } = this;

    return (
      <Host class={{
        'planet-input-box--focused': focused,
      }}>
        <div class="planet-input-box__content" onClick={() => this.handleFocus()}>
          <div class="planet-input-box__main">
            <div class="planet-input-box__label">
              {label}
            </div>
            <div class="planet-input-box__controls">
              <slot name="planet-input-box__area"></slot>
            </div>
          </div>
          <div class="planet-input__actions">
            <planet-button-group>
              {showHelp ? (<planet-button size="mini" onClick={(event) => this.handleHelp(event)} pTabIndex={-1}>?</planet-button>) : null}
              {showSearch ? (<planet-button size="mini" onClick={(event) => this.handleSearch(event)} pTabIndex={-1}>S</planet-button>) : null}
              <planet-button disabled={value?.value ? false : true} size="mini" pTabIndex={-1} onClick={() => this.handleClear()}>X</planet-button>
            </planet-button-group>
          </div>
        </div>
        <div class="planet-input-box__message">
          {validators.map(validator => {
              return validator().validate(this.value) ? (<div>{validator().errorMessage}</div>) : null;
          })}
        </div>
      </Host>
    );
  }

}
