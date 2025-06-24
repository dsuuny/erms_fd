import React from 'react';
import styles from './RecentSpecificationsTable.module.css';

interface SpecRow {
  id: string;
  name: string;
  version: string;
  status: 'Published' | 'Draft' | 'Review';
  lastModified: string;
}

const specData: SpecRow[] = [
  { id: 'E-21', name: 'Sales Transformations', version: 'v3.1.5', status: 'Published', lastModified: '2023-12-15' },
  { id: 'E-87', name: 'Inventory Pipeline', version: 'v0.8', status: 'Draft', lastModified: '2023-12-14' },
  { id: 'E-92', name: 'Customer Analytics', version: 'v2.0.1', status: 'Review', lastModified: '2023-12-13' },
  { id: 'E-95', name: 'Product Metrics', version: 'v1.5.0', status: 'Published', lastModified: '2023-12-12' },
];

const RecentSpecificationsTable: React.FC = () => {
  return (
    <div className={styles.tableCard}>
      <div className={styles.title}>Recent Specifications</div>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', fontWeight: 500, color: '#888', fontSize: 14, borderBottom: '1px solid #f0f0f0', padding: '8px 0' }}>
          <div style={{ flex: '0 0 100px', textAlign: 'left' }}>ID</div>
          <div style={{ flex: '1 1 220px', textAlign: 'left' }}>Specification Name</div>
          <div style={{ flex: '0 0 120px', textAlign: 'left' }}>Latest Version</div>
          <div style={{ flex: '0 0 120px', textAlign: 'left' }}>Status</div>
          <div style={{ flex: '0 0 120px', textAlign: 'left' }}>Last Modified</div>
        </div>
        {specData.map(row => (
          <div key={row.id} style={{ display: 'flex', fontSize: 15, color: '#222', borderBottom: '1px solid #f5f5f5', padding: '10px 0', alignItems: 'center' }}>
            <div style={{ flex: '0 0 100px', textAlign: 'left' }}>{row.id}</div>
            <div style={{ flex: '1 1 220px', textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.name}</div>
            <div style={{ flex: '0 0 120px', textAlign: 'left' }}>{row.version}</div>
            <div style={{ flex: '0 0 120px', textAlign: 'left' }}>
              {row.status === 'Published' && (
                <span className={`${styles.status} ${styles['status-published']}`}>Published</span>
              )}
              {row.status === 'Draft' && (
                <span className={`${styles.status} ${styles['status-draft']}`}>Draft</span>
              )}
              {row.status === 'Review' && (
                <span className={`${styles.status} ${styles['status-review']}`}>Review</span>
              )}
            </div>
            <div style={{ flex: '0 0 120px', textAlign: 'left' }}>{row.lastModified}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSpecificationsTable;
