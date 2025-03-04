'use client';

import { Alert } from 'antd';
import { ReactElement, PropsWithChildren } from 'react';

export type ErrorBoundaryProps = {
  children: ReactElement
};

export function ErrorBoundary({
  children,
}: PropsWithChildren) {
  return (
    <Alert.ErrorBoundary>
      {children}
    </Alert.ErrorBoundary>
  );
}