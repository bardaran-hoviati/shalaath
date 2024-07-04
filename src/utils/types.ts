export enum RequestTypes {
  FetchVerifiers,
}

export type Verifier = {
  firstname: string;
  lastname: string;
  id: string;
  rate: string;
  transactions_participated_count: number;
};

export enum RequestState {
  LOADING,
  ERROR,
  DONE,
  NONE,
}

export type IconProps = {
  color?: string;
  size: number;
  className?: string;
  bgColor?: string;
  secondColor?: string;
} & React.SVGProps<SVGSVGElement>;
export type IconComponent = React.FC<IconProps>;
