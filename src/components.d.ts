/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PlanetAlertSeverity } from "./components/planet-alert/planet-alert-severity.enum";
export namespace Components {
    interface PlanetAlert {
        "severity": PlanetAlertSeverity;
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
    interface PlanetOverlayNavigation {
        "open": boolean;
    }
    interface PlanetTitleOfGroup {
    }
    interface PlanetTitleOfPage {
    }
    interface PlanetWrapper {
    }
}
declare global {
    interface HTMLPlanetAlertElement extends Components.PlanetAlert, HTMLStencilElement {
    }
    var HTMLPlanetAlertElement: {
        prototype: HTMLPlanetAlertElement;
        new (): HTMLPlanetAlertElement;
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
    interface HTMLPlanetOverlayNavigationElement extends Components.PlanetOverlayNavigation, HTMLStencilElement {
    }
    var HTMLPlanetOverlayNavigationElement: {
        prototype: HTMLPlanetOverlayNavigationElement;
        new (): HTMLPlanetOverlayNavigationElement;
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
    interface HTMLPlanetWrapperElement extends Components.PlanetWrapper, HTMLStencilElement {
    }
    var HTMLPlanetWrapperElement: {
        prototype: HTMLPlanetWrapperElement;
        new (): HTMLPlanetWrapperElement;
    };
    interface HTMLElementTagNameMap {
        "planet-alert": HTMLPlanetAlertElement;
        "planet-copyright-bar": HTMLPlanetCopyrightBarElement;
        "planet-cover-of-page": HTMLPlanetCoverOfPageElement;
        "planet-footer": HTMLPlanetFooterElement;
        "planet-footer-link": HTMLPlanetFooterLinkElement;
        "planet-footer-list": HTMLPlanetFooterListElement;
        "planet-overlay-navigation": HTMLPlanetOverlayNavigationElement;
        "planet-title-of-group": HTMLPlanetTitleOfGroupElement;
        "planet-title-of-page": HTMLPlanetTitleOfPageElement;
        "planet-wrapper": HTMLPlanetWrapperElement;
    }
}
declare namespace LocalJSX {
    interface PlanetAlert {
        "severity"?: PlanetAlertSeverity;
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
    interface PlanetOverlayNavigation {
        "open"?: boolean;
    }
    interface PlanetTitleOfGroup {
    }
    interface PlanetTitleOfPage {
    }
    interface PlanetWrapper {
    }
    interface IntrinsicElements {
        "planet-alert": PlanetAlert;
        "planet-copyright-bar": PlanetCopyrightBar;
        "planet-cover-of-page": PlanetCoverOfPage;
        "planet-footer": PlanetFooter;
        "planet-footer-link": PlanetFooterLink;
        "planet-footer-list": PlanetFooterList;
        "planet-overlay-navigation": PlanetOverlayNavigation;
        "planet-title-of-group": PlanetTitleOfGroup;
        "planet-title-of-page": PlanetTitleOfPage;
        "planet-wrapper": PlanetWrapper;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "planet-alert": LocalJSX.PlanetAlert & JSXBase.HTMLAttributes<HTMLPlanetAlertElement>;
            "planet-copyright-bar": LocalJSX.PlanetCopyrightBar & JSXBase.HTMLAttributes<HTMLPlanetCopyrightBarElement>;
            "planet-cover-of-page": LocalJSX.PlanetCoverOfPage & JSXBase.HTMLAttributes<HTMLPlanetCoverOfPageElement>;
            "planet-footer": LocalJSX.PlanetFooter & JSXBase.HTMLAttributes<HTMLPlanetFooterElement>;
            "planet-footer-link": LocalJSX.PlanetFooterLink & JSXBase.HTMLAttributes<HTMLPlanetFooterLinkElement>;
            "planet-footer-list": LocalJSX.PlanetFooterList & JSXBase.HTMLAttributes<HTMLPlanetFooterListElement>;
            "planet-overlay-navigation": LocalJSX.PlanetOverlayNavigation & JSXBase.HTMLAttributes<HTMLPlanetOverlayNavigationElement>;
            "planet-title-of-group": LocalJSX.PlanetTitleOfGroup & JSXBase.HTMLAttributes<HTMLPlanetTitleOfGroupElement>;
            "planet-title-of-page": LocalJSX.PlanetTitleOfPage & JSXBase.HTMLAttributes<HTMLPlanetTitleOfPageElement>;
            "planet-wrapper": LocalJSX.PlanetWrapper & JSXBase.HTMLAttributes<HTMLPlanetWrapperElement>;
        }
    }
}
