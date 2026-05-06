import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Badge } from 'primereact/badge';
import { Chip } from 'primereact/chip';
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';
import '../styles/index.css';
import '../styles/tailwind.css';

export default function App() {
  return (
    <PrimeReactProvider>
      <div className="p-8 flex flex-col gap-8 max-w-4xl mx-auto">

        {/* Buttons */}
        <Card title="Buttons">
          <div className="flex flex-wrap gap-3">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Warning" severity="warning" />
            <Button label="Danger" severity="danger" />
            <Button label="Info" severity="info" />
            <Button label="Outlined" outlined />
            <Button label="Text" text />
            <Button label="With Icon" icon="pi pi-check" />
            <Button label="Loading" loading />
          </div>
        </Card>

        {/* Inputs */}
        <Card title="Inputs">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-medium">Name</label>
              <InputText id="name" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="disabled" className="font-medium">Disabled</label>
              <InputText id="disabled" value="Disabled value" disabled />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="invalid" className="font-medium">Invalid</label>
              <InputText id="invalid" placeholder="Invalid input" invalid />
            </div>
          </div>
        </Card>

        {/* Tags, Badges, Chips */}
        <Card title="Tags, Badges and Chips">
          <div className="flex flex-wrap gap-3 items-center">
            <Tag value="Default" />
            <Tag value="Primary" severity="primary" />
            <Tag value="Success" severity="success" />
            <Tag value="Warning" severity="warning" />
            <Tag value="Danger" severity="danger" />
            <Tag value="Info" severity="info" />
            <Divider layout="vertical" />
            <Badge value="4" />
            <Badge value="12" severity="success" />
            <Badge value="!" severity="danger" />
            <Divider layout="vertical" />
            <Chip label="Angular" />
            <Chip label="React" icon="pi pi-prime" />
            <Chip label="Removable" removable />
          </div>
        </Card>

        {/* Avatars */}
        <Card title="Avatars">
          <div className="flex flex-wrap gap-3 items-center">
            <Avatar label="P" size="normal" />
            <Avatar label="DN" size="large" style={{ backgroundColor: '#2196F3', color: '#fff' }} />
            <Avatar icon="pi pi-user" size="normal" />
            <Avatar icon="pi pi-user" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle" />
          </div>
        </Card>

      </div>
    </PrimeReactProvider>
  );
}
