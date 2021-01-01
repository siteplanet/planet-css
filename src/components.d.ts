/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PlanetCopyrightBar {
    }
    interface PlanetFooter {
    }
    interface PlanetFooterLink {
        "href": string;
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
    interface HTMLPlanetCopyrightBarElement extends Components.PlanetCopyrightBar, HTMLStencilElement {
    }
    var HTMLPlanetCopyrightBarElement: {
        prototype: HTMLPlanetCopyrightBarElement;
        new (): HTMLPlanetCopyrightBarElement;
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
        "planet-copyright-bar": HTMLPlanetCopyrightBarElement;
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
    interface PlanetCopyrightBar {
    }
    interface PlanetFooter {
    }
    interface PlanetFooterLink {
        "href"?: string;
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
        "planet-copyright-bar": PlanetCopyrightBar;
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
            "planet-copyright-bar": LocalJSX.PlanetCopyrightBar & JSXBase.HTMLAttributes<HTMLPlanetCopyrightBarElement>;
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
