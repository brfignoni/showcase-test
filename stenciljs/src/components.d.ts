/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CustomDialog {
    }
}
declare global {
    interface HTMLCustomDialogElement extends Components.CustomDialog, HTMLStencilElement {
    }
    var HTMLCustomDialogElement: {
        prototype: HTMLCustomDialogElement;
        new (): HTMLCustomDialogElement;
    };
    interface HTMLElementTagNameMap {
        "custom-dialog": HTMLCustomDialogElement;
    }
}
declare namespace LocalJSX {
    interface CustomDialog {
    }
    interface IntrinsicElements {
        "custom-dialog": CustomDialog;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-dialog": LocalJSX.CustomDialog & JSXBase.HTMLAttributes<HTMLCustomDialogElement>;
        }
    }
}
