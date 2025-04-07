import { useState } from "react";
import type { ActionListModel } from "@genexus/chameleon-controls-library";
import { ChActionListRender } from "./chameleon-components";

const CustomDialog = () => {
  const [listBoxModel] = useState<ActionListModel>([
    {
      id: "item 1",
      type: "group",
      caption: "item 1",
      expandable: true,
      expanded: true,
      items: [
        {
          id: "item 1.1",
          type: "actionable",
          caption: "item 1.1",
        },
        {
          id: "item 1.2",
          type: "actionable",
          caption: "item 1.2",
        },
        {
          id: "item 1.3",
          type: "actionable",
          caption: "item 1.3",
        },
      ],
    },
    {
      type: "separator",
    },
    {
      id: "item 2",
      type: "group",
      caption: "item 2",
      expandable: true,
      expanded: false,
      items: [
        {
          id: "item 2.1",
          type: "actionable",
          caption: "item 2.1",
        },
        {
          id: "item 2.2",
          type: "actionable",
          caption: "item 2.2",
        },
        {
          id: "item 2.3",
          type: "actionable",
          caption: "item 2.3",
        },
      ],
    },
    {
      type: "separator",
    },
    {
      id: "item 3",
      type: "group",
      caption: "item 3",
      expandable: true,
      expanded: false,
      items: [
        {
          id: "item 3.1",
          type: "actionable",
          caption: "item 3.1",
        },
        {
          id: "item 3.2",
          type: "actionable",
          caption: "item 3.2",
        },
        {
          id: "item 3.3",
          type: "actionable",
          caption: "item 3.3",
        },
      ],
    },
  ]);

  return (
    <>
      <ChActionListRender
        className="list-box"
        selection="single"
        model={listBoxModel}
      ></ChActionListRender>
    </>
  );
};

export default CustomDialog;
