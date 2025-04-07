import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Redeemable',
    Svg: require('@site/static/img/blue.png').default,
    description: (
      <>
        Each stablecoin issued by Nerite is redeemable for $1 of collateral in the system.
      </>
    ),
  },
  {
    title: 'Streamable',
    Svg: require('@site/static/img/green.png').default,
    description: (
      <>
        NUSD is a streaming super-token stablecoin built with the Superfluid protocol.
      </>
    ),
  },
  {
    title: 'Sustainable',
    Svg: require('@site/static/img/red.png').default,
    description: (
      <>
        NUSD yield is sustainable and comes from multiple sources. 100% of protocol revenue is directed towards users.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
