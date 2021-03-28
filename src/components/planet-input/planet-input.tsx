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
  @Prop({ mutable: true }) options: PlanetValueInterface<any>[];
  @Prop() showHelp = false;
  @Prop() showValue = true;
  @Prop({ mutable: true }) value: PlanetValueInterface<any>;
  @Prop() type: 'autocomplete' | 'select' | 'text' | 'time' | 'toggle' = 'text';
  @Prop() validators: (() => Validator<PlanetValueInterface<any>>)[] = [];

  @Event() pChange: EventEmitter<PlanetValueInterface<any>>;
  @Event() pHelp: EventEmitter<void>;
  @Event() pInput: EventEmitter<PlanetValueInterface<any>>;
  @Event() pSearch: EventEmitter<void>;

  @State() dateHours = 0;
  @State() dateMinutes = 0;
  @State() focused = false;
  @State() showOptions = false;
  @State() filteredOptions: PlanetValueInterface<any>[] = [];
  @State() focusedOption = 0;

  @Watch('options') optionsChanged() {
    this.filterOptions();
  }

  @Watch('dateHours') dateHoursChanged() {
    this.updateTime();
  }

  @Watch('dateMinutes') dateMinutesChanged() {
    this.updateTime();
  }

  @Watch('value') valueChanged(value: PlanetValueInterface<any>) {
    if (this.type === 'time') {
      this.parseTime();
    }
    this.filterOptions();
    this.pChange.emit(value);
  }

  parseTime() {
    const value = this.value?.value;
    if (/^\d{2}:\d{2}:\d{2}$/.test(value)) {
      console.log(value.match(/^\d{2}:\d{2}:\d{2}$/));
    }
  }

  updateTime() {
    this.value = { description: null, value: `${this.dateHours < 10 ? '0' : ''}${this.dateHours}:${this.dateMinutes < 10 ? '0' : ''}${this.dateMinutes}:00` };
  }

  handleBlur() {
    this.toggleOptions(false);
  }

  handleFocus() {
    this.toggleOptions(true);
  }

  handleHelp() {
    this.pHelp.emit();
  }

  handleSearch() {
    this.pSearch.emit();
  }

  handleInput(event) {
    this.toggleOptions(true);
    this.value = {
      description: event.target ? event.target.value : null,
      value: event.target ? event.target.value : null,
    };
    this.pInput.emit(this.value);
  }

  handleClear(): void {
    this.value = null;
  }

  handleDateInput(event, field: 'hours' | 'minutes'): void {
    if (field === 'hours') {
      this.dateHours = event.target ? event.target.value : null;
    }
    if (field === 'minutes') {
      this.dateMinutes = event.target ? event.target.value : null;
    }
  }

  handleDateKeyUp(event, field: 'hours' | 'minutes') {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (field === 'hours') {
        this.dateHours = this.dateHours ? (this.dateHours === 23 ? 0 : parseInt(this.dateHours.toString(), 10) + 1) : 0;
      }
      if (field === 'minutes') {
        this.dateMinutes = this.dateMinutes ? (this.dateMinutes === 59 ? 0 : parseInt(this.dateMinutes.toString(), 10) + 1) : 0;
      }
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (field === 'hours') {
        this.dateHours = this.dateHours ? (this.dateHours === 0 ? 0 : this.dateHours - 1) : 0;
      }
      if (field === 'minutes') {
        this.dateMinutes = this.dateMinutes ? (this.dateMinutes === 0 ? 59 : this.dateMinutes - 1) : 0;
      }
    }
  }

  handleSetFocus() {
    console.log(`set focus`);
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
      if (this.showOptions && this.filteredOptions[this.focusedOption] !== undefined) {
        event.preventDefault();
        this.handleSelect(this.filteredOptions[this.focusedOption]);
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
    if (this.focusedOption === this.filterOptions.length - 1) {
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

  private filterOptions(): void {
    this.focusedOption = 0;
    const value = (this.value?.value ? this.value?.value.toString() : '').trim().toUpperCase();
    this.filteredOptions = !this.options || this.type === 'select' ? this.options : this.options.filter((option) => (option?.description ? option?.description.toString() : '').trim().toUpperCase()?.indexOf(value) > -1 || (option?.value ? option?.value.toString() : '').trim().toUpperCase()?.indexOf(value) > -1);
  }

  render() {
    const { el, dateHours, dateMinutes, focused, focusedOption, label, name, showValue, validators, value } = this;
    this.renderInputOutsideShadowRoot(el, name, value);

    return (
      <Host>
        <planet-input-box
          focused={focused}
          label={label}
          validators={validators}
          value={value} onPClear={() =>
          {this.handleClear()}}
          onPFocus={() => {this.handleSetFocus()}}
          onPHelp={() => {this.handleHelp()}}
          onPSearch={() => {this.handleSearch()}}>
          <div slot="planet-input-box__area">
            {this.type === 'autocomplete' || this.type === 'select' || this.type === 'text' ? (
              <Fragment>
                <input name={name} value={value?.value !== undefined ? (value.description ? value.description : value.value) : value} onBlur={() => this.handleBlur()} onFocus={() => this.handleFocus()} onInput={(event) => this.handleInput(event)} onKeyUp={(event) => this.handleKeyUp(event)} />
                {showValue && value?.value !== undefined && value.value != value.description ? (<div class="planet-input__value">{value.value}</div>) : null}
              </Fragment>
            ) : null}
            {this.type === 'time' ? (
              <Fragment>
                <input class='planet-input__time-control' type='number' min={0} max={23} value={dateHours} onInput={(event) => this.handleDateInput(event, 'hours')} onKeyUp={(event) => this.handleDateKeyUp(event, 'hours')} /> :
                <input class='planet-input__time-control' type='number' min={0} max={59} value={dateMinutes} onInput={(event) => this.handleDateInput(event, 'minutes')} onKeyUp={(event) => this.handleDateKeyUp(event, 'minutes')} />
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
            {this.showOptions && this.filteredOptions && (this.type === 'autocomplete' || this.type === 'select') ? (<div class="planet-input__options">
              {this.filteredOptions.map((option, index) => (
                <div class={{
                  'planet-input__option': true,
                  'planet-input__option--focused': index === focusedOption,
                }} onMouseDown={(_) => this.handleSelect(option)}>
                  {option.description}
                  {showValue ? (<Fragment><br />{option.value}</Fragment>) : null}
                </div>
              ))}
            </div>) : null}
          </div>
        </planet-input-box>
      </Host >
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
