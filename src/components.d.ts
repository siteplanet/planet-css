/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PlanetAlertSeverity } from "./components/planet-alert/planet-alert-severity.enum";
import { PlanetValueInterface } from "./components/planet-input/planet-value-interface";
import { Validator } from "./validators/validator";
import { PlanetValueInterface as PlanetValueInterface1 } from ".";
export namespace Components {
    interface PlanetActionBar {
    }
    interface PlanetAlert {
        "severity": PlanetAlertSeverity;
    }
    interface PlanetBackdrop {
    }
    interface PlanetButton {
        "disabled": boolean;
        "form": string;
        "full": boolean;
        "pTabIndex": number;
        "severity": 'error' | 'success';
        "size": 'mini' | 'large' | 'sm' | 'xs' | 'md' | 'lg';
        "type": 'button' | 'submit';
    }
    interface PlanetButtonGroup {
    }
    interface PlanetCard {
    }
    interface PlanetCardContent {
    }
    interface PlanetCardHeader {
    }
    interface PlanetCollapsible {
        "toggle": () => Promise<void>;
    }
    interface PlanetColumn {
        "large": number;
        "medium": number;
        "small": number;
        "xlarge": number;
        "xsmall": number;
    }
    interface PlanetConfirm {
    }
    interface PlanetCopyrightBar {
    }
    interface PlanetCoverOfPage {
        "imageUrl": string;
    }
    interface PlanetCrud {
        "closeForm": () => Promise<void>;
        "columns": {
    key: string;
    label: string;
    showInGrid: boolean;
    type: 'autocomplete' | 'select' | 'text' | 'time' | 'toggle';
    validators: any[];
    defaultValue?: PlanetValueInterface<any>,
  }[];
        "data": any[];
        "openForm": (state: 'put' | 'post', row?: any) => Promise<void>;
        "page": number;
        "pages": number;
        "setColumnValue": (key: any, valuePair: any) => Promise<void>;
        "titleOfForm": string;
    }
    interface PlanetFooter {
    }
    interface PlanetFooterLink {
    }
    interface PlanetFooterList {
        "titleOfList": string;
    }
    interface PlanetFormSection {
        "titleOfSection": string;
    }
    interface PlanetFrameset {
    }
    interface PlanetGrid {
    }
    interface PlanetGridHeader {
    }
    interface PlanetGridItem {
    }
    interface PlanetInput {
        "label": string;
        "name": string;
        "options": PlanetValueInterface<any>[];
        "showHelp": boolean;
        "showValue": boolean;
        "type": 'autocomplete' | 'select' | 'text' | 'time' | 'toggle';
        "validators": (() => Validator<PlanetValueInterface<any>>)[];
        "value": PlanetValueInterface<any>;
    }
    interface PlanetInputBox {
        "focused": boolean;
        "label": string;
        "showHelp": boolean;
        "showSearch": boolean;
        "validators": (() => Validator<PlanetValueInterface<any>>)[];
        "value": PlanetValueInterface<any>;
    }
    interface PlanetItem {
    }
    interface PlanetLabel {
    }
    interface PlanetModal {
        "titleOfModal": string;
    }
    interface PlanetOverlayNavigation {
        "open": boolean;
    }
    interface PlanetPage {
    }
    interface PlanetPagination {
        "page": number;
        "pages": number;
    }
    interface PlanetRow {
    }
    interface PlanetTile {
        "color": string;
        "count": number;
        "graphNumbers": number[];
    }
    interface PlanetTitleOfGroup {
    }
    interface PlanetTitleOfPage {
    }
    interface PlanetValidationMessage {
    }
    interface PlanetWrapper {
    }
}
declare global {
    interface HTMLPlanetActionBarElement extends Components.PlanetActionBar, HTMLStencilElement {
    }
    var HTMLPlanetActionBarElement: {
        prototype: HTMLPlanetActionBarElement;
        new (): HTMLPlanetActionBarElement;
    };
    interface HTMLPlanetAlertElement extends Components.PlanetAlert, HTMLStencilElement {
    }
    var HTMLPlanetAlertElement: {
        prototype: HTMLPlanetAlertElement;
        new (): HTMLPlanetAlertElement;
    };
    interface HTMLPlanetBackdropElement extends Components.PlanetBackdrop, HTMLStencilElement {
    }
    var HTMLPlanetBackdropElement: {
        prototype: HTMLPlanetBackdropElement;
        new (): HTMLPlanetBackdropElement;
    };
    interface HTMLPlanetButtonElement extends Components.PlanetButton, HTMLStencilElement {
    }
    var HTMLPlanetButtonElement: {
        prototype: HTMLPlanetButtonElement;
        new (): HTMLPlanetButtonElement;
    };
    interface HTMLPlanetButtonGroupElement extends Components.PlanetButtonGroup, HTMLStencilElement {
    }
    var HTMLPlanetButtonGroupElement: {
        prototype: HTMLPlanetButtonGroupElement;
        new (): HTMLPlanetButtonGroupElement;
    };
    interface HTMLPlanetCardElement extends Components.PlanetCard, HTMLStencilElement {
    }
    var HTMLPlanetCardElement: {
        prototype: HTMLPlanetCardElement;
        new (): HTMLPlanetCardElement;
    };
    interface HTMLPlanetCardContentElement extends Components.PlanetCardContent, HTMLStencilElement {
    }
    var HTMLPlanetCardContentElement: {
        prototype: HTMLPlanetCardContentElement;
        new (): HTMLPlanetCardContentElement;
    };
    interface HTMLPlanetCardHeaderElement extends Components.PlanetCardHeader, HTMLStencilElement {
    }
    var HTMLPlanetCardHeaderElement: {
        prototype: HTMLPlanetCardHeaderElement;
        new (): HTMLPlanetCardHeaderElement;
    };
    interface HTMLPlanetCollapsibleElement extends Components.PlanetCollapsible, HTMLStencilElement {
    }
    var HTMLPlanetCollapsibleElement: {
        prototype: HTMLPlanetCollapsibleElement;
        new (): HTMLPlanetCollapsibleElement;
    };
    interface HTMLPlanetColumnElement extends Components.PlanetColumn, HTMLStencilElement {
    }
    var HTMLPlanetColumnElement: {
        prototype: HTMLPlanetColumnElement;
        new (): HTMLPlanetColumnElement;
    };
    interface HTMLPlanetConfirmElement extends Components.PlanetConfirm, HTMLStencilElement {
    }
    var HTMLPlanetConfirmElement: {
        prototype: HTMLPlanetConfirmElement;
        new (): HTMLPlanetConfirmElement;
    };
    interface HTMLPlanetCopyrightBarElement extends Components.PlanetCopyrightBar, HTMLStencilElement {
    }
    var HTMLPlanetCopyrightBarElement: {
        prototype: HTMLPlanetCopyrightBarElement;
        new (): HTMLPlanetCopyrightBarElement;
    };
    interface HTMLPlanetCoverOfPageElement extends Components.PlanetCoverOfPage, HTMLStencilElement {
    }
    var HTMLPlanetCoverOfPageElement: {
        prototype: HTMLPlanetCoverOfPageElement;
        new (): HTMLPlanetCoverOfPageElement;
    };
    interface HTMLPlanetCrudElement extends Components.PlanetCrud, HTMLStencilElement {
    }
    var HTMLPlanetCrudElement: {
        prototype: HTMLPlanetCrudElement;
        new (): HTMLPlanetCrudElement;
    };
    interface HTMLPlanetFooterElement extends Components.PlanetFooter, HTMLStencilElement {
    }
    var HTMLPlanetFooterElement: {
        prototype: HTMLPlanetFooterElement;
        new (): HTMLPlanetFooterElement;
    };
    interface HTMLPlanetFooterLinkElement extends Components.PlanetFooterLink, HTMLStencilElement {
    }
    var HTMLPlanetFooterLinkElement: {
        prototype: HTMLPlanetFooterLinkElement;
        new (): HTMLPlanetFooterLinkElement;
    };
    interface HTMLPlanetFooterListElement extends Components.PlanetFooterList, HTMLStencilElement {
    }
    var HTMLPlanetFooterListElement: {
        prototype: HTMLPlanetFooterListElement;
        new (): HTMLPlanetFooterListElement;
    };
    interface HTMLPlanetFormSectionElement extends Components.PlanetFormSection, HTMLStencilElement {
    }
    var HTMLPlanetFormSectionElement: {
        prototype: HTMLPlanetFormSectionElement;
        new (): HTMLPlanetFormSectionElement;
    };
    interface HTMLPlanetFramesetElement extends Components.PlanetFrameset, HTMLStencilElement {
    }
    var HTMLPlanetFramesetElement: {
        prototype: HTMLPlanetFramesetElement;
        new (): HTMLPlanetFramesetElement;
    };
    interface HTMLPlanetGridElement extends Components.PlanetGrid, HTMLStencilElement {
    }
    var HTMLPlanetGridElement: {
        prototype: HTMLPlanetGridElement;
        new (): HTMLPlanetGridElement;
    };
    interface HTMLPlanetGridHeaderElement extends Components.PlanetGridHeader, HTMLStencilElement {
    }
    var HTMLPlanetGridHeaderElement: {
        prototype: HTMLPlanetGridHeaderElement;
        new (): HTMLPlanetGridHeaderElement;
    };
    interface HTMLPlanetGridItemElement extends Components.PlanetGridItem, HTMLStencilElement {
    }
    var HTMLPlanetGridItemElement: {
        prototype: HTMLPlanetGridItemElement;
        new (): HTMLPlanetGridItemElement;
    };
    interface HTMLPlanetInputElement extends Components.PlanetInput, HTMLStencilElement {
    }
    var HTMLPlanetInputElement: {
        prototype: HTMLPlanetInputElement;
        new (): HTMLPlanetInputElement;
    };
    interface HTMLPlanetInputBoxElement extends Components.PlanetInputBox, HTMLStencilElement {
    }
    var HTMLPlanetInputBoxElement: {
        prototype: HTMLPlanetInputBoxElement;
        new (): HTMLPlanetInputBoxElement;
    };
    interface HTMLPlanetItemElement extends Components.PlanetItem, HTMLStencilElement {
    }
    var HTMLPlanetItemElement: {
        prototype: HTMLPlanetItemElement;
        new (): HTMLPlanetItemElement;
    };
    interface HTMLPlanetLabelElement extends Components.PlanetLabel, HTMLStencilElement {
    }
    var HTMLPlanetLabelElement: {
        prototype: HTMLPlanetLabelElement;
        new (): HTMLPlanetLabelElement;
    };
    interface HTMLPlanetModalElement extends Components.PlanetModal, HTMLStencilElement {
    }
    var HTMLPlanetModalElement: {
        prototype: HTMLPlanetModalElement;
        new (): HTMLPlanetModalElement;
    };
    interface HTMLPlanetOverlayNavigationElement extends Components.PlanetOverlayNavigation, HTMLStencilElement {
    }
    var HTMLPlanetOverlayNavigationElement: {
        prototype: HTMLPlanetOverlayNavigationElement;
        new (): HTMLPlanetOverlayNavigationElement;
    };
    interface HTMLPlanetPageElement extends Components.PlanetPage, HTMLStencilElement {
    }
    var HTMLPlanetPageElement: {
        prototype: HTMLPlanetPageElement;
        new (): HTMLPlanetPageElement;
    };
    interface HTMLPlanetPaginationElement extends Components.PlanetPagination, HTMLStencilElement {
    }
    var HTMLPlanetPaginationElement: {
        prototype: HTMLPlanetPaginationElement;
        new (): HTMLPlanetPaginationElement;
    };
    interface HTMLPlanetRowElement extends Components.PlanetRow, HTMLStencilElement {
    }
    var HTMLPlanetRowElement: {
        prototype: HTMLPlanetRowElement;
        new (): HTMLPlanetRowElement;
    };
    interface HTMLPlanetTileElement extends Components.PlanetTile, HTMLStencilElement {
    }
    var HTMLPlanetTileElement: {
        prototype: HTMLPlanetTileElement;
        new (): HTMLPlanetTileElement;
    };
    interface HTMLPlanetTitleOfGroupElement extends Components.PlanetTitleOfGroup, HTMLStencilElement {
    }
    var HTMLPlanetTitleOfGroupElement: {
        prototype: HTMLPlanetTitleOfGroupElement;
        new (): HTMLPlanetTitleOfGroupElement;
    };
    interface HTMLPlanetTitleOfPageElement extends Components.PlanetTitleOfPage, HTMLStencilElement {
    }
    var HTMLPlanetTitleOfPageElement: {
        prototype: HTMLPlanetTitleOfPageElement;
        new (): HTMLPlanetTitleOfPageElement;
    };
    interface HTMLPlanetValidationMessageElement extends Components.PlanetValidationMessage, HTMLStencilElement {
    }
    var HTMLPlanetValidationMessageElement: {
        prototype: HTMLPlanetValidationMessageElement;
        new (): HTMLPlanetValidationMessageElement;
    };
    interface HTMLPlanetWrapperElement extends Components.PlanetWrapper, HTMLStencilElement {
    }
    var HTMLPlanetWrapperElement: {
        prototype: HTMLPlanetWrapperElement;
        new (): HTMLPlanetWrapperElement;
    };
    interface HTMLElementTagNameMap {
        "planet-action-bar": HTMLPlanetActionBarElement;
        "planet-alert": HTMLPlanetAlertElement;
        "planet-backdrop": HTMLPlanetBackdropElement;
        "planet-button": HTMLPlanetButtonElement;
        "planet-button-group": HTMLPlanetButtonGroupElement;
        "planet-card": HTMLPlanetCardElement;
        "planet-card-content": HTMLPlanetCardContentElement;
        "planet-card-header": HTMLPlanetCardHeaderElement;
        "planet-collapsible": HTMLPlanetCollapsibleElement;
        "planet-column": HTMLPlanetColumnElement;
        "planet-confirm": HTMLPlanetConfirmElement;
        "planet-copyright-bar": HTMLPlanetCopyrightBarElement;
        "planet-cover-of-page": HTMLPlanetCoverOfPageElement;
        "planet-crud": HTMLPlanetCrudElement;
        "planet-footer": HTMLPlanetFooterElement;
        "planet-footer-link": HTMLPlanetFooterLinkElement;
        "planet-footer-list": HTMLPlanetFooterListElement;
        "planet-form-section": HTMLPlanetFormSectionElement;
        "planet-frameset": HTMLPlanetFramesetElement;
        "planet-grid": HTMLPlanetGridElement;
        "planet-grid-header": HTMLPlanetGridHeaderElement;
        "planet-grid-item": HTMLPlanetGridItemElement;
        "planet-input": HTMLPlanetInputElement;
        "planet-input-box": HTMLPlanetInputBoxElement;
        "planet-item": HTMLPlanetItemElement;
        "planet-label": HTMLPlanetLabelElement;
        "planet-modal": HTMLPlanetModalElement;
        "planet-overlay-navigation": HTMLPlanetOverlayNavigationElement;
        "planet-page": HTMLPlanetPageElement;
        "planet-pagination": HTMLPlanetPaginationElement;
        "planet-row": HTMLPlanetRowElement;
        "planet-tile": HTMLPlanetTileElement;
        "planet-title-of-group": HTMLPlanetTitleOfGroupElement;
        "planet-title-of-page": HTMLPlanetTitleOfPageElement;
        "planet-validation-message": HTMLPlanetValidationMessageElement;
        "planet-wrapper": HTMLPlanetWrapperElement;
    }
}
declare namespace LocalJSX {
    interface PlanetActionBar {
    }
    interface PlanetAlert {
        "severity"?: PlanetAlertSeverity;
    }
    interface PlanetBackdrop {
    }
    interface PlanetButton {
        "disabled"?: boolean;
        "form"?: string;
        "full"?: boolean;
        "pTabIndex"?: number;
        "severity"?: 'error' | 'success';
        "size"?: 'mini' | 'large' | 'sm' | 'xs' | 'md' | 'lg';
        "type"?: 'button' | 'submit';
    }
    interface PlanetButtonGroup {
    }
    interface PlanetCard {
    }
    interface PlanetCardContent {
    }
    interface PlanetCardHeader {
    }
    interface PlanetCollapsible {
    }
    interface PlanetColumn {
        "large"?: number;
        "medium"?: number;
        "small"?: number;
        "xlarge"?: number;
        "xsmall"?: number;
    }
    interface PlanetConfirm {
    }
    interface PlanetCopyrightBar {
    }
    interface PlanetCoverOfPage {
        "imageUrl"?: string;
    }
    interface PlanetCrud {
        "columns"?: {
    key: string;
    label: string;
    showInGrid: boolean;
    type: 'autocomplete' | 'select' | 'text' | 'time' | 'toggle';
    validators: any[];
    defaultValue?: PlanetValueInterface<any>,
  }[];
        "data"?: any[];
        "onItemAdd"?: (event: CustomEvent<object>) => void;
        "onItemDeleted"?: (event: CustomEvent<object>) => void;
        "onItemSearch"?: (event: CustomEvent<object>) => void;
        "onItemUpdate"?: (event: CustomEvent<object>) => void;
        "page"?: number;
        "pages"?: number;
        "titleOfForm"?: string;
    }
    interface PlanetFooter {
    }
    interface PlanetFooterLink {
    }
    interface PlanetFooterList {
        "titleOfList"?: string;
    }
    interface PlanetFormSection {
        "titleOfSection"?: string;
    }
    interface PlanetFrameset {
    }
    interface PlanetGrid {
    }
    interface PlanetGridHeader {
    }
    interface PlanetGridItem {
    }
    interface PlanetInput {
        "label"?: string;
        "name"?: string;
        "onPChange"?: (event: CustomEvent<PlanetValueInterface<any>>) => void;
        "onPHelp"?: (event: CustomEvent<void>) => void;
        "onPInput"?: (event: CustomEvent<PlanetValueInterface<any>>) => void;
        "onPSearchClick2"?: (event: CustomEvent<void>) => void;
        "options"?: PlanetValueInterface<any>[];
        "showHelp"?: boolean;
        "showValue"?: boolean;
        "type"?: 'autocomplete' | 'select' | 'text' | 'time' | 'toggle';
        "validators"?: (() => Validator<PlanetValueInterface<any>>)[];
        "value"?: PlanetValueInterface<any>;
    }
    interface PlanetInputBox {
        "focused"?: boolean;
        "label"?: string;
        "onPClear"?: (event: CustomEvent<void>) => void;
        "onPFocus"?: (event: CustomEvent<void>) => void;
        "onPHelp"?: (event: CustomEvent<void>) => void;
        "onPSearchClick"?: (event: CustomEvent<void>) => void;
        "showHelp"?: boolean;
        "showSearch"?: boolean;
        "validators"?: (() => Validator<PlanetValueInterface<any>>)[];
        "value"?: PlanetValueInterface<any>;
    }
    interface PlanetItem {
    }
    interface PlanetLabel {
    }
    interface PlanetModal {
        "onPClose"?: (event: CustomEvent<void>) => void;
        "titleOfModal"?: string;
    }
    interface PlanetOverlayNavigation {
        "open"?: boolean;
    }
    interface PlanetPage {
    }
    interface PlanetPagination {
        "page"?: number;
        "pages"?: number;
    }
    interface PlanetRow {
    }
    interface PlanetTile {
        "color"?: string;
        "count"?: number;
        "graphNumbers"?: number[];
    }
    interface PlanetTitleOfGroup {
    }
    interface PlanetTitleOfPage {
    }
    interface PlanetValidationMessage {
    }
    interface PlanetWrapper {
    }
    interface IntrinsicElements {
        "planet-action-bar": PlanetActionBar;
        "planet-alert": PlanetAlert;
        "planet-backdrop": PlanetBackdrop;
        "planet-button": PlanetButton;
        "planet-button-group": PlanetButtonGroup;
        "planet-card": PlanetCard;
        "planet-card-content": PlanetCardContent;
        "planet-card-header": PlanetCardHeader;
        "planet-collapsible": PlanetCollapsible;
        "planet-column": PlanetColumn;
        "planet-confirm": PlanetConfirm;
        "planet-copyright-bar": PlanetCopyrightBar;
        "planet-cover-of-page": PlanetCoverOfPage;
        "planet-crud": PlanetCrud;
        "planet-footer": PlanetFooter;
        "planet-footer-link": PlanetFooterLink;
        "planet-footer-list": PlanetFooterList;
        "planet-form-section": PlanetFormSection;
        "planet-frameset": PlanetFrameset;
        "planet-grid": PlanetGrid;
        "planet-grid-header": PlanetGridHeader;
        "planet-grid-item": PlanetGridItem;
        "planet-input": PlanetInput;
        "planet-input-box": PlanetInputBox;
        "planet-item": PlanetItem;
        "planet-label": PlanetLabel;
        "planet-modal": PlanetModal;
        "planet-overlay-navigation": PlanetOverlayNavigation;
        "planet-page": PlanetPage;
        "planet-pagination": PlanetPagination;
        "planet-row": PlanetRow;
        "planet-tile": PlanetTile;
        "planet-title-of-group": PlanetTitleOfGroup;
        "planet-title-of-page": PlanetTitleOfPage;
        "planet-validation-message": PlanetValidationMessage;
        "planet-wrapper": PlanetWrapper;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "planet-action-bar": LocalJSX.PlanetActionBar & JSXBase.HTMLAttributes<HTMLPlanetActionBarElement>;
            "planet-alert": LocalJSX.PlanetAlert & JSXBase.HTMLAttributes<HTMLPlanetAlertElement>;
            "planet-backdrop": LocalJSX.PlanetBackdrop & JSXBase.HTMLAttributes<HTMLPlanetBackdropElement>;
            "planet-button": LocalJSX.PlanetButton & JSXBase.HTMLAttributes<HTMLPlanetButtonElement>;
            "planet-button-group": LocalJSX.PlanetButtonGroup & JSXBase.HTMLAttributes<HTMLPlanetButtonGroupElement>;
            "planet-card": LocalJSX.PlanetCard & JSXBase.HTMLAttributes<HTMLPlanetCardElement>;
            "planet-card-content": LocalJSX.PlanetCardContent & JSXBase.HTMLAttributes<HTMLPlanetCardContentElement>;
            "planet-card-header": LocalJSX.PlanetCardHeader & JSXBase.HTMLAttributes<HTMLPlanetCardHeaderElement>;
            "planet-collapsible": LocalJSX.PlanetCollapsible & JSXBase.HTMLAttributes<HTMLPlanetCollapsibleElement>;
            "planet-column": LocalJSX.PlanetColumn & JSXBase.HTMLAttributes<HTMLPlanetColumnElement>;
            "planet-confirm": LocalJSX.PlanetConfirm & JSXBase.HTMLAttributes<HTMLPlanetConfirmElement>;
            "planet-copyright-bar": LocalJSX.PlanetCopyrightBar & JSXBase.HTMLAttributes<HTMLPlanetCopyrightBarElement>;
            "planet-cover-of-page": LocalJSX.PlanetCoverOfPage & JSXBase.HTMLAttributes<HTMLPlanetCoverOfPageElement>;
            "planet-crud": LocalJSX.PlanetCrud & JSXBase.HTMLAttributes<HTMLPlanetCrudElement>;
            "planet-footer": LocalJSX.PlanetFooter & JSXBase.HTMLAttributes<HTMLPlanetFooterElement>;
            "planet-footer-link": LocalJSX.PlanetFooterLink & JSXBase.HTMLAttributes<HTMLPlanetFooterLinkElement>;
            "planet-footer-list": LocalJSX.PlanetFooterList & JSXBase.HTMLAttributes<HTMLPlanetFooterListElement>;
            "planet-form-section": LocalJSX.PlanetFormSection & JSXBase.HTMLAttributes<HTMLPlanetFormSectionElement>;
            "planet-frameset": LocalJSX.PlanetFrameset & JSXBase.HTMLAttributes<HTMLPlanetFramesetElement>;
            "planet-grid": LocalJSX.PlanetGrid & JSXBase.HTMLAttributes<HTMLPlanetGridElement>;
            "planet-grid-header": LocalJSX.PlanetGridHeader & JSXBase.HTMLAttributes<HTMLPlanetGridHeaderElement>;
            "planet-grid-item": LocalJSX.PlanetGridItem & JSXBase.HTMLAttributes<HTMLPlanetGridItemElement>;
            "planet-input": LocalJSX.PlanetInput & JSXBase.HTMLAttributes<HTMLPlanetInputElement>;
            "planet-input-box": LocalJSX.PlanetInputBox & JSXBase.HTMLAttributes<HTMLPlanetInputBoxElement>;
            "planet-item": LocalJSX.PlanetItem & JSXBase.HTMLAttributes<HTMLPlanetItemElement>;
            "planet-label": LocalJSX.PlanetLabel & JSXBase.HTMLAttributes<HTMLPlanetLabelElement>;
            "planet-modal": LocalJSX.PlanetModal & JSXBase.HTMLAttributes<HTMLPlanetModalElement>;
            "planet-overlay-navigation": LocalJSX.PlanetOverlayNavigation & JSXBase.HTMLAttributes<HTMLPlanetOverlayNavigationElement>;
            "planet-page": LocalJSX.PlanetPage & JSXBase.HTMLAttributes<HTMLPlanetPageElement>;
            "planet-pagination": LocalJSX.PlanetPagination & JSXBase.HTMLAttributes<HTMLPlanetPaginationElement>;
            "planet-row": LocalJSX.PlanetRow & JSXBase.HTMLAttributes<HTMLPlanetRowElement>;
            "planet-tile": LocalJSX.PlanetTile & JSXBase.HTMLAttributes<HTMLPlanetTileElement>;
            "planet-title-of-group": LocalJSX.PlanetTitleOfGroup & JSXBase.HTMLAttributes<HTMLPlanetTitleOfGroupElement>;
            "planet-title-of-page": LocalJSX.PlanetTitleOfPage & JSXBase.HTMLAttributes<HTMLPlanetTitleOfPageElement>;
            "planet-validation-message": LocalJSX.PlanetValidationMessage & JSXBase.HTMLAttributes<HTMLPlanetValidationMessageElement>;
            "planet-wrapper": LocalJSX.PlanetWrapper & JSXBase.HTMLAttributes<HTMLPlanetWrapperElement>;
        }
    }
}
