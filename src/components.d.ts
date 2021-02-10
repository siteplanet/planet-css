/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PlanetAlertSeverity } from "./components/planet-alert/planet-alert-severity.enum";
import { PlanetButtonSeverity } from "./components/planet-button/planet-button-severity.enum";
export namespace Components {
    interface PlanetActionBar {
    }
    interface PlanetAlert {
        "severity": PlanetAlertSeverity;
    }
    interface PlanetButton {
        "disabled": boolean;
        "form": string;
        "full": boolean;
        "severity": PlanetButtonSeverity;
        "size": 'mini' | 'large';
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
    interface PlanetCopyrightBar {
    }
    interface PlanetCoverOfPage {
        "imageUrl": string;
    }
    interface PlanetFooter {
    }
    interface PlanetFooterLink {
    }
    interface PlanetFooterList {
        "titleOfList": string;
    }
    interface PlanetFrameset {
    }
    interface PlanetInput {
        "label": string;
    }
    interface PlanetItem {
    }
    interface PlanetLabel {
    }
    interface PlanetOverlayNavigation {
        "open": boolean;
    }
    interface PlanetPage {
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
    interface HTMLPlanetFramesetElement extends Components.PlanetFrameset, HTMLStencilElement {
    }
    var HTMLPlanetFramesetElement: {
        prototype: HTMLPlanetFramesetElement;
        new (): HTMLPlanetFramesetElement;
    };
    interface HTMLPlanetInputElement extends Components.PlanetInput, HTMLStencilElement {
    }
    var HTMLPlanetInputElement: {
        prototype: HTMLPlanetInputElement;
        new (): HTMLPlanetInputElement;
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
        "planet-button": HTMLPlanetButtonElement;
        "planet-button-group": HTMLPlanetButtonGroupElement;
        "planet-card": HTMLPlanetCardElement;
        "planet-card-content": HTMLPlanetCardContentElement;
        "planet-card-header": HTMLPlanetCardHeaderElement;
        "planet-collapsible": HTMLPlanetCollapsibleElement;
        "planet-copyright-bar": HTMLPlanetCopyrightBarElement;
        "planet-cover-of-page": HTMLPlanetCoverOfPageElement;
        "planet-footer": HTMLPlanetFooterElement;
        "planet-footer-link": HTMLPlanetFooterLinkElement;
        "planet-footer-list": HTMLPlanetFooterListElement;
        "planet-frameset": HTMLPlanetFramesetElement;
        "planet-input": HTMLPlanetInputElement;
        "planet-item": HTMLPlanetItemElement;
        "planet-label": HTMLPlanetLabelElement;
        "planet-overlay-navigation": HTMLPlanetOverlayNavigationElement;
        "planet-page": HTMLPlanetPageElement;
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
    interface PlanetButton {
        "disabled"?: boolean;
        "form"?: string;
        "full"?: boolean;
        "onClick"?: (event: CustomEvent<void>) => void;
        "severity"?: PlanetButtonSeverity;
        "size"?: 'mini' | 'large';
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
    interface PlanetCopyrightBar {
    }
    interface PlanetCoverOfPage {
        "imageUrl"?: string;
    }
    interface PlanetFooter {
    }
    interface PlanetFooterLink {
    }
    interface PlanetFooterList {
        "titleOfList"?: string;
    }
    interface PlanetFrameset {
    }
    interface PlanetInput {
        "label"?: string;
    }
    interface PlanetItem {
    }
    interface PlanetLabel {
    }
    interface PlanetOverlayNavigation {
        "open"?: boolean;
    }
    interface PlanetPage {
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
        "planet-button": PlanetButton;
        "planet-button-group": PlanetButtonGroup;
        "planet-card": PlanetCard;
        "planet-card-content": PlanetCardContent;
        "planet-card-header": PlanetCardHeader;
        "planet-collapsible": PlanetCollapsible;
        "planet-copyright-bar": PlanetCopyrightBar;
        "planet-cover-of-page": PlanetCoverOfPage;
        "planet-footer": PlanetFooter;
        "planet-footer-link": PlanetFooterLink;
        "planet-footer-list": PlanetFooterList;
        "planet-frameset": PlanetFrameset;
        "planet-input": PlanetInput;
        "planet-item": PlanetItem;
        "planet-label": PlanetLabel;
        "planet-overlay-navigation": PlanetOverlayNavigation;
        "planet-page": PlanetPage;
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
            "planet-button": LocalJSX.PlanetButton & JSXBase.HTMLAttributes<HTMLPlanetButtonElement>;
            "planet-button-group": LocalJSX.PlanetButtonGroup & JSXBase.HTMLAttributes<HTMLPlanetButtonGroupElement>;
            "planet-card": LocalJSX.PlanetCard & JSXBase.HTMLAttributes<HTMLPlanetCardElement>;
            "planet-card-content": LocalJSX.PlanetCardContent & JSXBase.HTMLAttributes<HTMLPlanetCardContentElement>;
            "planet-card-header": LocalJSX.PlanetCardHeader & JSXBase.HTMLAttributes<HTMLPlanetCardHeaderElement>;
            "planet-collapsible": LocalJSX.PlanetCollapsible & JSXBase.HTMLAttributes<HTMLPlanetCollapsibleElement>;
            "planet-copyright-bar": LocalJSX.PlanetCopyrightBar & JSXBase.HTMLAttributes<HTMLPlanetCopyrightBarElement>;
            "planet-cover-of-page": LocalJSX.PlanetCoverOfPage & JSXBase.HTMLAttributes<HTMLPlanetCoverOfPageElement>;
            "planet-footer": LocalJSX.PlanetFooter & JSXBase.HTMLAttributes<HTMLPlanetFooterElement>;
            "planet-footer-link": LocalJSX.PlanetFooterLink & JSXBase.HTMLAttributes<HTMLPlanetFooterLinkElement>;
            "planet-footer-list": LocalJSX.PlanetFooterList & JSXBase.HTMLAttributes<HTMLPlanetFooterListElement>;
            "planet-frameset": LocalJSX.PlanetFrameset & JSXBase.HTMLAttributes<HTMLPlanetFramesetElement>;
            "planet-input": LocalJSX.PlanetInput & JSXBase.HTMLAttributes<HTMLPlanetInputElement>;
            "planet-item": LocalJSX.PlanetItem & JSXBase.HTMLAttributes<HTMLPlanetItemElement>;
            "planet-label": LocalJSX.PlanetLabel & JSXBase.HTMLAttributes<HTMLPlanetLabelElement>;
            "planet-overlay-navigation": LocalJSX.PlanetOverlayNavigation & JSXBase.HTMLAttributes<HTMLPlanetOverlayNavigationElement>;
            "planet-page": LocalJSX.PlanetPage & JSXBase.HTMLAttributes<HTMLPlanetPageElement>;
            "planet-title-of-group": LocalJSX.PlanetTitleOfGroup & JSXBase.HTMLAttributes<HTMLPlanetTitleOfGroupElement>;
            "planet-title-of-page": LocalJSX.PlanetTitleOfPage & JSXBase.HTMLAttributes<HTMLPlanetTitleOfPageElement>;
            "planet-validation-message": LocalJSX.PlanetValidationMessage & JSXBase.HTMLAttributes<HTMLPlanetValidationMessageElement>;
            "planet-wrapper": LocalJSX.PlanetWrapper & JSXBase.HTMLAttributes<HTMLPlanetWrapperElement>;
        }
    }
}
