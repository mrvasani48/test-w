import React, { useState, useEffect, useMemo } from "react";
import Sections from "../components/estimate/Sections";
import useFetch from "../hooks/useFetch";
import { prepareSection } from "../utils/functions";
import Loading from "../components/common/loading";
import type { SectionType } from "../types/type";

const EstimatePage: React.FC = () => {
  const { data, error, loading } = useFetch();
  const [sections, setSections] = useState<SectionType[]>([]);

  useEffect(() => {
    if (data?.data?.sections) {
      setSections(data.data.sections.map(prepareSection));
    }
  }, [data]);

  const total = useMemo(
    () =>
      sections.reduce(
        (sum, section) => sum + (Number(section.total) || 0),
        0
      ),
    [sections]
  );

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4">
      <p className="text-2xl font-bold mb-4">Estimate</p>
      <div className="mb-4 text-xl text-right font-bold text-green-700">
        Grand Total: $ {(total / 100).toFixed(2)} 👁️
      </div>
      <Sections sections={sections} setSections={setSections} />
    </div>
  );
};

export default React.memo(EstimatePage);
