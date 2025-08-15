import React from "react";
import Item from "./Item";
import { prepareSection } from "../../utils/functions";
import type { ItemType, SectionsProps } from "../../types/type";

const Sections: React.FC<SectionsProps> = ({ sections, setSections }) => {
  const handleItemsChange = (sectionIdx: number, updatedItems: ItemType[]) => {
    setSections((prevSections) =>
      prevSections.map((section, idx) =>
        idx === sectionIdx
          ? prepareSection({ ...section, items: updatedItems })
          : section
      )
    );
  };

    return (
        <div className='p-2'>
            {sections?.map((section, idx) => (
                <div key={section.section_id} className="border-b border-gray-200 py-4">
                    <div className='flex justify-between items-center'>
                        <p className="text-xl font-normal">{section.section_name}</p>
                        <p>
                            total : $ {(Number(section.total || 0) / 100).toFixed(2)} 👁️
                        </p>
                    </div>
                    <Item
                        items={section.items}
                        onItemsChange={updatedItems => handleItemsChange(idx, updatedItems)}
                    />
                </div>
            ))}
        </div>
    );
};

export default React.memo(Sections);