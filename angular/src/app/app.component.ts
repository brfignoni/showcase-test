import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { getBundles } from '@genexus/mercury/bundles.js';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomDialogComponent],
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  bundles = getBundles(
    [
      'chameleon/scrollbar',
      'components/accordion',
      'components/button',
      'components/chat',
      'components/checkbox',
      'components/code',
      'components/combo-box',
      'components/dialog',
      'components/dropdown',
      'components/edit',
      'components/flexible-layout',
      'components/icon',
      'components/layout-splitter',
      'components/list-box',
      'components/markdown-viewer',
      'components/navigation-list',
      'components/pills',
      'components/radio-group',
      'components/segmented-control',
      'components/sidebar',
      'components/slider',
      'components/switch',
      'components/tab',
      'components/tabular-grid',
      'components/ticket-list',
      'components/tooltip',
      'components/tree-view',
      'components/widget',
      'utils/elevation',
      'utils/form',
      'utils/layout',
      'utils/spacing',
      'utils/typography',
    ],
    'dist/assets/css/',
  );
}
