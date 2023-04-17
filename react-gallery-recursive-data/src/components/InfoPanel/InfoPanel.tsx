import styles from './InfoPanel.module.css';

export type InfoPanelProps = {
  id?: string;
  description?: string;
  dimensions?: string;
  createdAt?: string;
};

export const InfoPanel = (props: InfoPanelProps) => {
  const { id, description, dimensions, createdAt } = props;
  console.log(id);

  if (!id) {
    return <aside className={styles.panel}> Nothing to show!</aside>;
  }

  return (
    <aside className={styles.panel} id="info-panel">
      <h2 className={styles.heading} id="block-info">
        Block info
      </h2>
      <dl>
        <dt className={styles.title}>ID:</dt>
        <dd className={styles.details}>{id}</dd>

        <dt className={styles.title}>Description:</dt>
        <dd className={styles.details}>{description}</dd>

        <dt className={styles.title}>Dimensions:</dt>
        <dd className={styles.details}>{dimensions}</dd>

        <dt className={styles.title}>Created at:</dt>
        <dd className={styles.details}>
          {new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }).format(new Date(createdAt))}
        </dd>
      </dl>
    </aside>
  );
};
