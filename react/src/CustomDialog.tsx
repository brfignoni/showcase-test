import { useState } from "react";
import type { TabModel } from "@genexus/chameleon-controls-library";
import { ChTabRender } from "./chameleon-components";

const CustomDialog = () => {
  const [tabModel] = useState<TabModel>([
    {
      id: "item-1",
      name: "Item Button 1",
    },
    {
      id: "item-2",
      name: "Item Button 2",
    },
    {
      id: "item-3",
      name: "Item Button 3",
    },
  ]);

  return (
    <>
      <ChTabRender
        className="tab"
        model={tabModel}
        tabListPosition="block-start"
        selectedId="item-1"
      >
        <div className="spacing-body" slot="item-1">
          Item 1 slotted content
        </div>
        <div className="spacing-body" slot="item-2">
          Item 2 slotted content
        </div>
        <div className="spacing-body" slot="item-3">
          Item 3 slotted content
        </div>
      </ChTabRender>
    </>
  );
};

export default CustomDialog;
