import { ReportHandler } from 'web-vitals';

async function reportWebVitals(onPerfEntry?: ReportHandler) {
  if (onPerfEntry) {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import ('web-vitals');
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
}

export default reportWebVitals;
