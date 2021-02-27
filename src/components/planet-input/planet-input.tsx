import { Component, Element, Event, EventEmitter, Fragment, Host, h, Prop, Watch, State } from '@stencil/core';
import { Validator } from '../../validators/validator';
import { PlanetValueInterface } from './planet-value-interface';

@Component({
  tag: 'planet-input',
  styleUrl: 'planet-input.css',
  shadow: true,
})
export class PlanetInput {
  @Element() el!: HTMLElement;

  @Prop() label: string;
  @Prop() name: string = '__name';
  @Prop({ mutable: true }) options: PlanetValueInterface<any>[] = [{
    description: 'Denmark',
    value: 'DNK',
  },
  {
    description: 'Netherlands',
    value: 'NLD',
  }];
  @Prop({ mutable: true }) value: PlanetValueInterface<any>;
  @Prop() type: 'autocomplete' | 'select' | 'text' | 'toggle' = 'text';
  @Prop() validators: (() => Validator<PlanetValueInterface<any>>)[] = [];

  @Event() pChange: EventEmitter<PlanetValueInterface<any>>;
  @Event() pInput: EventEmitter<PlanetValueInterface<any>>;

  @State() showOptions = false;
  @State() focusedOption = 0;

  @Watch('options') optionsChanged() {
    this.focusedOption = 0;
  }

  @Watch('value') valueChanged(value: PlanetValueInterface<any>) {
    this.pChange.emit(value);
  }

  handleBlur() {
    this.toggleOptions(false);
  }
  
  handleFocus() {
    this.toggleOptions(true);
  }

  handleInput(event) {
    this.toggleOptions(true);
    this.value = { 
      description: event.target ? event.target.value : null,
      value: event.target ? event.target.value : null,
    };
    this.pInput.emit(this.value);
  }

  handleSelect(option: PlanetValueInterface<any>) {
    this.value = option;
    this.toggleOptions(false);
  }

  handleToggle(event) {
    this.value = { value: event.target ? event.target.checked : null };
  }

  handleKeyUp(event) {
    if (event.key === 'ArrowUp') {
      if (this.showOptions) {
        event.preventDefault();
        this.moveUpOption();
      }
    }
    if (event.key === 'ArrowDown') {
      if (this.showOptions) {
        event.preventDefault();
        this.moveDownOption();
      }
    }
    if (event.key === 'Enter' || event.keyCode === 13) {
      if (this.showOptions && this.options[this.focusedOption] !== undefined) {
        event.preventDefault();
        this.handleSelect(this.options[this.focusedOption]);
      } else {
        this.callEnter(this.el);
      }
    }
  }

  private moveUpOption() {
    if (this.focusedOption === 0) {
      return;
    }
    this.focusedOption = this.focusedOption - 1;
  }

  private moveDownOption() {
    if (this.focusedOption === this.options.length - 1) {
      return;
    }
    this.focusedOption = this.focusedOption + 1;
  }

  private toggleOptions(value: boolean) {
    if (value) {
      this.focusedOption = 0;
    }
    this.showOptions = value;
  }

  render() {
    const { el, focusedOption, label, name, value } = this;
    this.renderInputOutsideShadowRoot(el, name, value);

    return (
      <Host>
        <div class="planet-input__control">
          <div class="planet-input__label">
            {label}
          </div>
          <div class="planet-input__area">
            {this.type === 'autocomplete' || this.type === 'select' || this.type === 'text' ? (
              <Fragment>
                <input name={name} value={value?.value !== undefined ? (value.description ? value.description : value.value) : value} onBlur={() => this.handleBlur()} onFocus={() => this.handleFocus()} onInput={(event) => this.handleInput(event)} onKeyUp={(event) => this.handleKeyUp(event)} />
                {value?.value !== undefined && value.value != value.description ? (<div class="planet-input__value">{value.value}</div>) : null}
              </Fragment>
              ) : null}
            {this.type === 'toggle' ? (
              <Fragment>
                <input 
                  class="planet-input__toggle"
                  id={name}
                  name={name}
                  type='checkbox'
                  checked={value ? value.value : value}
                  onChange={(event) => {
                    this.handleToggle(event)
                  }}
                  role="switch" />
                <label htmlFor={name}></label>
              </Fragment>
            ) : null}
            {this.showOptions && (this.type === 'autocomplete' || this.type === 'select') ? (<div class="planet-input__options">
              {this.options.map((option, index) => (
                <div class={{
                  'planet-input__option': true,
                  'planet-input__option--focused': index === focusedOption,
                }} onMouseDown={(_) => this.handleSelect(option)}>
                  {option.description}<br />
                  {option.value}
                </div>
              ))}
            </div>) : null}
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
