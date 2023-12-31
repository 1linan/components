import { Button } from '@/components/Button/Button';
import styles from '@/styles/buttonDemo.module.scss';
import { MouseEvent } from 'react';

export function ButtonUseDemo() {
  function onClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
  }
  return (
    <div className={styles.wrapper}>
      <Button type="primary" ghost>
        cancel
      </Button>
      <Button type="primary" add>
        add
      </Button>
      <Button type="link" ghost>
        cancel
      </Button>
      <Button
        type="primary"
        onClick={(e: MouseEvent<HTMLButtonElement>) => onClick(e)}
      >
        add
      </Button>
      <Button danger>danger</Button>
      <Button danger ghost>
        danger
      </Button>
      <div className={styles.space}>
        <Button type="link" colorfulBorders={true} colorfulBordersShadows>
          彩色边框-动态-阴影
        </Button>
      </div>

      <div className={styles.space}>
        <Button type="link" colorfulBorders>
          彩色边框-动态
        </Button>
      </div>
    </div>
  );
}
