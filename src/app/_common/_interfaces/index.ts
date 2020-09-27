export interface HeaderActionButton {
    label: string;
    click: () => any;
    classes: string;
    disabled: () => boolean;
  }