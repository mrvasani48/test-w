export type ItemType = {
  item_id?: string | number;
  item_type_name?: string;
  subject?: string;
  quantity?: number | string;
  unit_cost?: number | string;
  total?: number | string;
  unit?: string;
  tax_rate?: number | string;
  cost_code?: string;
};

export type SectionType = {
  section_id: string | number;
  section_name: string;
  total?: number | string;
  items: ItemType[];
};

export type EstimateData = {
  sections: SectionType[];
};

export type ApiResponse<T> = {
  data?: T;
};


export interface SectionsProps {
  sections: SectionType[];
  setSections: React.Dispatch<React.SetStateAction<SectionType[]>>;
}

export interface ItemProps {
  items: ItemType[];
  onItemsChange: (updatedItems: ItemType[]) => void;
}