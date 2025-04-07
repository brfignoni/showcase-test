import { ChTheme } from "./chameleon-components";
import { getBundles } from "@genexus/mercury/bundles.js";
import CustomDialog from "./CustomDialog";

const bundles = getBundles(
  [
    "chameleon/scrollbar",
    "components/accordion",
    "components/button",
    "components/chat",
    "components/checkbox",
    "components/code",
    "components/combo-box",
    "components/dialog",
    "components/dropdown",
    "components/edit",
    "components/flexible-layout",
    "components/icon",
    "components/layout-splitter",
    "components/list-box",
    "components/markdown-viewer",
    "components/navigation-list",
    "components/pills",
    "components/radio-group",
    "components/segmented-control",
    "components/sidebar",
    "components/slider",
    "components/switch",
    "components/tab",
    "components/tabular-grid",
    "components/ticket-list",
    "components/tooltip",
    "components/tree-view",
    "components/widget",
    "utils/elevation",
    "utils/form",
    "utils/layout",
    "utils/spacing",
    "utils/typography",
  ],
  "assets/css/"
);

const Main = () => {
  return (
    <>
      <ChTheme model={bundles}></ChTheme>
      <CustomDialog></CustomDialog>
    </>
  );
};

export default Main;
