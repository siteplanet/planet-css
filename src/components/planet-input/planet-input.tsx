import { Component, Element, Event, Host, h, Prop, EventEmitter } from '@stencil/core';
import { Validator } from '../../validators/validator';
import { PlanetValueInterface } from './planet-value-interface';

@Component({
  tag: 'planet-input',
  styleUrl: 'planet-input.css',
  shadow: true,
})
export class PlanetInput {
  @Element() el!: any;

  @Prop() label: string;
  @Prop() name: string;
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

  handleKeyUp(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      this.callEnter(this.el);
    }
  }

  render() {
    const { el, value, name } = this;

    this.renderInputOutsideShadowRoot(el, name, value);

    return (
      <Host>
        <div class="planet-input__control">
          <div class="planet-input__label">
            {this.label}
          </div>
          <div class="planet-input__area">
            <input name={this.name} value={this.value ? this.value.value : null} onInput={(event) => this.handleInput(event)} onKeyUp={(event) => this.handleKeyUp(event)} />
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

  private renderInputOutsideShadowRoot(container: HTMLElement, name: string, value: PlanetValueInterface<string>) {
    let input = container.querySelector("input.hidden-input") as HTMLInputElement | null;
    if (!input) {
      input = container.ownerDocument.createElement("input");
      input.type = "hidden";
      input.classList.add("hidden-input");
      container.appendChild(input);
    }
    input.name = name;
    input.value = value ? value.value : value as any;
  }

  private callEnter(container: HTMLElement) {
    let input = container.querySelector("input.hidden-input") as HTMLInputElement | null;
    if (input) {
      const form = this.el.closest('form');
      if (form) {
          const fakeSubmit = document.createElement('button');
          fakeSubmit.type = 'submit';
          fakeSubmit.style.display = 'none';
          form.appendChild(fakeSubmit);
          fakeSubmit.click();
          fakeSubmit.remove();
      }
    }
  }

}
