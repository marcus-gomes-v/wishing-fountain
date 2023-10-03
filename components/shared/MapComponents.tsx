'use client';
import dynamic from 'next/dynamic';

export const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false,
});

export default DynamicMap;