import type { TTFBMetric } from 'web-vitals';

export type ConsoleEventProperties = {
  page_ttfb: {
    /** Time from document navigation to the first byte, in milliseconds. */
    ttfbMs: number;
    navigationType: TTFBMetric['navigationType'];
    metricId: string;
    /** Sanitized document URL, which may differ from the current SPA route. */
    $current_url: string;
  };
  workflow_started: { workflowId: string; nodeCount: number };
  workflow_finished: {
    workflowId: string;
    status: 'success' | 'failed';
    /** Elapsed execution time in milliseconds. */
    duration: number;
  };
  workflow_timeout: { workflowId: string; timeoutMs: number };
  sse_disconnect: {
    workflowId: string;
    reason: 'unexpected_eof' | 'stream_error';
  };
  sse_reconnect: { workflowId: string; retryCount: number };
};
