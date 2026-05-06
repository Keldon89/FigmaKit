## Package Installation

**CRITICAL**: You MUST explicitly install every package listed below as a direct dependency, exactly as written.

Rules:
- Even if a package is already available as a transitive dependency (i.e., installed by another package), you MUST still add it as a direct dependency. Transitive availability does NOT count as installed.
- Use the **exact** package name shown. Packages with similar names are different packages and are NOT interchangeable. Never substitute one for another.
- Do not skip any package. Do not reorder, rename, or omit any entry.

Add the following to your `package.json` dependencies:

```json
{
  "dependencies": {
    "primereact": "10.9.7",
    "primeicons": "7.0.0"
  }
}
```

## CSS Imports (Step 2)

In your main CSS entry file (e.g. `src/styles/index.css`), add these imports **in this exact order**:

```css
@import 'primereact/resources/primereact.min.css';
@import 'primereact/resources/themes/lara-light-blue/theme.css';
@import 'primeicons/primeicons.css';
```

## Provider Setup (Step 3)

Wrap the root of every app in `PrimeReactProvider`:

```tsx
import { PrimeReactProvider } from 'primereact/api';

export default function App() {
  return (
    <PrimeReactProvider>
      {/* your content */}
    </PrimeReactProvider>
  );
}
```

## Available Components (Step 4)

Import each component from its own subpath:

```tsx
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Badge } from 'primereact/badge';
import { Chip } from 'primereact/chip';
import { Avatar } from 'primereact/avatar';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { ToggleButton } from 'primereact/togglebutton';
import { SelectButton } from 'primereact/selectbutton';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Password } from 'primereact/password';
import { Calendar } from 'primereact/calendar';
import { Slider } from 'primereact/slider';
import { ProgressBar } from 'primereact/progressbar';
import { Skeleton } from 'primereact/skeleton';
import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';
import { TabView, TabPanel } from 'primereact/tabview';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import { Toolbar } from 'primereact/toolbar';
import { Breadcrumb } from 'primereact/breadcrumb';
import { Steps } from 'primereact/steps';
import { Timeline } from 'primereact/timeline';
import { FileUpload } from 'primereact/fileupload';
import { Image } from 'primereact/image';
import { Galleria } from 'primereact/galleria';
import { Carousel } from 'primereact/carousel';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { ConfirmPopup } from 'primereact/confirmpopup';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Tooltip } from 'primereact/tooltip';
import { Message } from 'primereact/message';
import { InlineMessage } from 'primereact/inlinemessage';
import { Paginator } from 'primereact/paginator';
import { Tree } from 'primereact/tree';
import { TreeTable } from 'primereact/treetable';
import { OrderList } from 'primereact/orderlist';
import { PickList } from 'primereact/picklist';
import { OrganizationChart } from 'primereact/organizationchart';
import { Chart } from 'primereact/chart';
import { Knob } from 'primereact/knob';
import { Rating } from 'primereact/rating';
import { ColorPicker } from 'primereact/colorpicker';
import { Editor } from 'primereact/editor';
import { Terminal } from 'primereact/terminal';
import { BlockUI } from 'primereact/blockui';
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { FloatLabel } from 'primereact/floatlabel';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputGroup } from 'primereact/inputgroup';
import { InputGroupAddon } from 'primereact/inputgroupaddon';
import { MeterGroup } from 'primereact/metergroup';
import { SpeedDial } from 'primereact/speeddial';
import { SplitButton } from 'primereact/splitbutton';
import { Dock } from 'primereact/dock';
import { AutoComplete } from 'primereact/autocomplete';
import { CascadeSelect } from 'primereact/cascadeselect';
import { MultiSelect } from 'primereact/multiselect';
import { ListBox } from 'primereact/listbox';
import { TreeSelect } from 'primereact/treeselect';
import { InputMask } from 'primereact/inputmask';
import { InputSwitch } from 'primereact/inputswitch';
import { Chips } from 'primereact/chips';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { DataView } from 'primereact/dataview';
import { VirtualScroller } from 'primereact/virtualscroller';
```
