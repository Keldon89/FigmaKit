# PrimeReact Component Guidelines

This file documents the most used components and how to use them correctly in Figma Make.

---

## Button

### Usage
Use `Button` for all interactive actions. Never use a plain `<button>` HTML element.

### Variants
- **Primary** (default): main action on the page
- **Secondary**: `severity="secondary"` — supporting action
- **Success**: `severity="success"` — confirm or save
- **Warning**: `severity="warning"` — destructive but reversible
- **Danger**: `severity="danger"` — irreversible destructive action
- **Info**: `severity="info"` — informational action
- **Outlined**: `outlined` — low-emphasis action
- **Text**: `text` — ghost/inline action
- **Raised**: `raised` — elevated emphasis

### API
```tsx
<Button
  label="Save"
  icon="pi pi-check"         // optional PrimeIcon
  iconPos="left"              // 'left' | 'right' | 'top' | 'bottom'
  severity="success"          // 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'help' | 'contrast'
  outlined                    // boolean
  text                        // boolean
  raised                      // boolean
  rounded                     // boolean
  loading={false}             // boolean — shows spinner
  disabled={false}            // boolean
  size="large"                // 'small' | 'large'
  onClick={() => {}}
/>
```

### Rules
- One primary button per section
- Do not use more than 3 buttons in a row
- Always include `label` or `icon` (or both)

---

## InputText

### Usage
Use for single-line text input. Pair with `<label>` and optionally `FloatLabel`, `IconField`.

### API
```tsx
<InputText
  id="field"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter value"
  invalid           // boolean — red error state
  disabled          // boolean
  fluid             // boolean — full width
  size="large"      // 'small' | 'large'
/>
```

---

## Dropdown

### Usage
Use `Dropdown` for single option selection from a list. Use `MultiSelect` for multiple selection.

### API
```tsx
<Dropdown
  value={selectedValue}
  onChange={(e) => setSelectedValue(e.value)}
  options={[{ label: 'Option 1', value: '1' }]}
  optionLabel="label"
  placeholder="Select an option"
  filter            // boolean — enables search
  showClear         // boolean
  invalid           // boolean
  disabled          // boolean
  fluid             // boolean
/>
```

---

## DataTable

### Usage
Use `DataTable` + `Column` for tabular data. Never build a table manually with `<table>` HTML.

### API
```tsx
<DataTable value={data} paginator rows={10} stripedRows>
  <Column field="name" header="Name" sortable />
  <Column field="email" header="Email" />
  <Column field="status" header="Status" body={(row) => <Tag value={row.status} />} />
</DataTable>
```

### Rules
- Always add `paginator` when data can exceed 10 rows
- Use `sortable` on columns that benefit from sorting
- Use `body` template for custom cell rendering

---

## Dialog

### Usage
Use `Dialog` for modal overlays. Use `ConfirmDialog` for confirmation prompts.

### API
```tsx
<Dialog
  header="Dialog Title"
  visible={visible}
  onHide={() => setVisible(false)}
  style={{ width: '450px' }}
  modal
  footer={
    <div className="flex gap-2 justify-end">
      <Button label="Cancel" severity="secondary" onClick={() => setVisible(false)} />
      <Button label="Confirm" onClick={handleConfirm} />
    </div>
  }
>
  <p>Dialog content here.</p>
</Dialog>
```

---

## Toast

### Usage
Use `Toast` for non-blocking notifications. Requires a `useRef`.

### API
```tsx
const toast = useRef(null);

<Toast ref={toast} />

// Trigger:
toast.current.show({ severity: 'success', summary: 'Done', detail: 'Saved!', life: 3000 });
```

---

## Card

### Usage
Use `Card` as a surface/container for grouped content.

### API
```tsx
<Card
  title="Card Title"
  subTitle="Subtitle"
  header={<img src="..." />}   // optional
  footer={<Button label="Action" />} // optional
>
  <p>Card content</p>
</Card>
```

---

## Tag

### Usage
Use `Tag` for status labels, categories, or labels inside tables and lists.

### API
```tsx
<Tag
  value="Active"
  severity="success"   // null | 'success' | 'info' | 'warning' | 'danger'
  icon="pi pi-check"  // optional
  rounded             // boolean
/>
```

---

## Skeleton

### Usage
Use `Skeleton` as a loading placeholder before data arrives. Never use spinners for whole-page loading.

### API
```tsx
<Skeleton width="100%" height="2rem" />      // text line
<Skeleton shape="circle" size="4rem" />      // avatar
<Skeleton width="100%" height="150px" />     // image/card
```

---

## FloatLabel

### Usage
Wrap an input with `FloatLabel` for a floating label UX pattern.

```tsx
<FloatLabel>
  <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
  <label htmlFor="username">Username</label>
</FloatLabel>
```

---

## IconField + InputIcon

### Usage
Use to add an icon inside an input field.

```tsx
<IconField iconPosition="left">
  <InputIcon className="pi pi-search" />
  <InputText placeholder="Search" />
</IconField>
```

---

## TabView

### Usage
Use `TabView` + `TabPanel` for tabbed sections.

```tsx
<TabView>
  <TabPanel header="Tab 1"><p>Content 1</p></TabPanel>
  <TabPanel header="Tab 2"><p>Content 2</p></TabPanel>
</TabView>
```

---

## Accordion

### Usage
Use `Accordion` for collapsible content sections (FAQ, settings, etc.).

```tsx
<Accordion>
  <AccordionTab header="Section 1"><p>Content</p></AccordionTab>
  <AccordionTab header="Section 2"><p>Content</p></AccordionTab>
</Accordion>
```
