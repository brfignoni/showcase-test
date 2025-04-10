import { Component, Host, h } from '@stencil/core';
import type { TreeViewModel } from '@genexus/chameleon-controls-library';
import { getIconPath, getIconPathExpanded } from '@genexus/mercury';

@Component({
  shadow: false,
  styleUrl: 'custom-dialog.scss',
  tag: 'custom-dialog',
})
export class CustomDialog {
  #treeViewModel: TreeViewModel = [
    {
      id: 'root',
      caption: 'GeneXusNext Develop',
      expanded: true,
      startImgSrc: getIconPath({ category: 'objects', name: 'version' }),
      items: [
        {
          id: 'Main_Programs',
          caption: 'Main Programs',
          startImgSrc: getIconPath({ category: 'objects', name: 'category' }),
          expanded: true,
          items: [
            {
              id: 'Main_Programs.ApiHealthCheck',
              caption: 'ApiHealthCheck',
              leaf: true,
              order: 3,
              startImgSrc: getIconPath({ category: 'objects', name: 'api' }),
            },
            {
              id: 'Main_Programs.BackHome',
              caption: 'BackHome',
              leaf: true,
              startImgSrc: getIconPath({ category: 'objects', name: 'webpanel' }),
            },
            {
              id: 'Main_Programs.Login',
              caption: 'Login',
              leaf: true,
              startImgSrc: getIconPath({ category: 'objects', name: 'webpanel' }),
            },
            {
              id: 'Main_Programs.Prompt',
              caption: 'Prompt',
              leaf: true,
              startImgSrc: getIconPath({ category: 'objects', name: 'panel-for-sd' }),
            },
            {
              id: 'Main_Programs.ProvisioningServices',
              caption: 'ProvisioningServices',
              leaf: true,
              startImgSrc: getIconPath({ category: 'objects', name: 'api' }),
            },
            {
              id: 'Main_Programs.VersionCheck',
              caption: 'VersionCheck',
              leaf: true,
              startImgSrc: getIconPath({ category: 'objects', name: 'procedure' }),
            },
          ],
        },
        {
          id: 'Root_Module',
          caption: 'Root Module',
          order: 1,
          startImgSrc: getIconPathExpanded({ category: 'objects', name: 'module' }, { category: 'objects', name: 'module-open' }),
          items: [
            {
              id: 'Root_Module.BL',
              caption: 'BL',
              startImgSrc: getIconPathExpanded({ category: 'objects', name: 'module' }, { category: 'objects', name: 'module-open' }),
            },
            {
              id: 'Root_Module.Tests',
              caption: 'Tests',
              startImgSrc: getIconPathExpanded({ category: 'objects', name: 'folder' }, { category: 'objects', name: 'folder-open' }),
            },
            {
              id: 'Root_Module.GeneXusNext',
              caption: 'GeneXusNext',
              leaf: true,
              startImgSrc: getIconPath({ category: 'objects', name: 'dso' }),
            },
            {
              id: 'Root_Module.Domain',
              caption: 'Domain',
              leaf: true,
              startImgSrc: getIconPath({ category: 'objects', name: 'domain' }),
            },
            {
              id: 'Root_Module.Files',
              caption: 'Files',
              leaf: true,
              startImgSrc: getIconPath({ category: 'objects', name: 'file' }),
            },
            {
              id: 'Root_Module.Images',
              caption: 'Images',
              leaf: true,
              startImgSrc: getIconPath({ category: 'objects', name: 'image' }),
            },
          ],
        },
        {
          id: 'References',
          caption: 'References',
          order: 2,
          startImgSrc: getIconPath({ category: 'objects', name: 'references' }),
        },
        {
          id: 'Customization',
          caption: 'Customization',
          order: 3,
          startImgSrc: getIconPath({ category: 'objects', name: 'customization' }),
        },
        {
          id: 'Documentation',
          caption: 'Documentation',
          leaf: true,
          order: 4,
          startImgSrc: getIconPath({ category: 'objects', name: 'document' }),
        },
      ],
    },
  ];

  render() {
    return (
      <Host>
        <ch-tree-view-render class="tree-view" model={this.#treeViewModel} showLines="last"></ch-tree-view-render>
      </Host>
    );
  }
}
