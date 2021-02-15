import { Component, Event, Host, h, Prop, EventEmitter } from '@stencil/core';
import { Validator } from '../../validators/validator';
import { PlanetValueInterface } from './planet-value-interface';

@Component({
  tag: 'planet-input',
  styleUrl: 'planet-input.css',
  shadow: true,
})
export class PlanetInput {
  @Prop() label: string;
  @Prop({ mutable: true }) value: PlanetValueInterface<string>;
  @Prop() validators: (() => Validator<PlanetValueInterface<string>>)[] = [];

  @Event() changed: EventEmitter<PlanetValueInterface<string>>;

  handleInput(event) {
    this.value = {
      description: event.target ? event.target.value : null,
      value: event.target ? event.target.value : null,
    };
    this.changed.emit(this.value);
  }

  render() {
    return (
      <Host>
        <div class="planet-input__control">
          <div class="planet-input__label">
            {this.label}
          </div>
          <div class="planet-input__area">
            <input value={this.value ? this.value.value : null} onInput={(event) => this.handleInput(event)} />
          </div>
        </div>
        <div class="planet-input__message">
          {this.validators.map(validator => {
            return validator().validate(this.value) ? (<div>{validator().errorMessage}</div>) : null;
          })}
        </div>
      </Host>
    );
  }

}
