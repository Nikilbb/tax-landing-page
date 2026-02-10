"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export const useUTM = () => {
  const searchParams = useSearchParams();
  const [utms, setUtms] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    let captured: Record<string, string> = {};

    params.forEach(param => {
      const value = searchParams.get(param);
      if (value) captured[param] = value;
    });

    setUtms(captured);
  }, [searchParams]);

  return utms;
};