import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
} from '@angular/core';
import type { TabModel } from '@genexus/chameleon-controls-library';
import { getIconPath } from '@genexus/mercury/assets-manager.js';

@Component({
  selector: 'custom-dialog',
  styleUrl: './custom-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: ` <ch-tab-render
    class="tab"
    [model]="tabModel()"
    [selectedId]="'item-1'"
    [tabListPosition]="'block-start'"
    [showTabListEnd]="true"
  >
    <div class="spacing-body" [slot]="'item-1'">Item 1 slotted content</div>
    <div class="spacing-body" [slot]="'item-2'">Item 2 slotted content</div>
    <div class="spacing-body" [slot]="'item-3'">Item 3 slotted content</div>
    <div class="buttons-spacer" [slot]="'tab-list-end'">
      <button class="button-tertiary button-icon-only">
        <ch-image
          class="icon-md"
          [src]="ICON_UPLOAD"
          [type]="'mask'"
        ></ch-image>
      </button>
      <button class="button-tertiary button-icon-only">
        <ch-image class="icon-md" [src]="ICON_UNDO" [type]="'mask'"></ch-image>
      </button>
      <button class="button-tertiary button-icon-only">
        <ch-image class="icon-md" [src]="ICON_TOOLS" [type]="'mask'"></ch-image>
      </button>
    </div>
  </ch-tab-render>`,
})
export class CustomDialogComponent {
  ICON_UPLOAD = getIconPath({
    category: 'system',
    name: 'upload',
    colorType: 'primary',
  });
  ICON_UNDO = getIconPath({
    category: 'system',
    name: 'undo',
    colorType: 'primary',
  });
  ICON_TOOLS = getIconPath({
    category: 'system',
    name: 'tools',
    colorType: 'primary',
  });

  tabModel = signal<TabModel>([
    {
      id: 'item-1',
      name: 'Item Button 1',
    },
    {
      id: 'item-2',
      name: 'Item Button 2',
    },
    {
      id: 'item-3',
      name: 'Item Button 3',
    },
  ]);
}
