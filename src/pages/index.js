import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { Button,NavBar,Icon } from 'antd-mobile';

export default function() {
  return (
    <div className={styles.normal}>
      <NavBar
        mode="dark"
        leftContent="Back"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
      <div className={styles.welcome} />
      <Button type="warning">warning</Button>
      <Button type="primary">primary</Button>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
    </div>
  );
}
