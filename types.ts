// src/types/types.ts
export type Icon =
  | "home"
  | "create"
  | "friends"
  | "play"
  | "rewards"
  | "google"
  | "facebook"
  | "apple";

export interface SignUpFormProps {
  email: string;
  password: string;
  username: string;
}

export interface UserData {
  accountId: string;
  email: string;
  username: string;
  avatar: string;
}

interface DataPointLabelComponentProps {
  // Add any props here if your component uses them
}

export interface LineDataItem {
  value: number;
  label: string;
  frontColor: string;
  showStrip?: boolean;
  stripHeight?: number;
  stripColor?: string;
  dataPointLabelComponent?: React.FC<DataPointLabelComponentProps>;
  dataPointLabelShiftY?: number;
  dataPointLabelShiftX?: number;
}
